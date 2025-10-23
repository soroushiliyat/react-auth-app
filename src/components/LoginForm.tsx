import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { sendLoginData } from "../api/auth";
import useUserStore from "../store/useUserStore";

interface LoginValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  const { setUser } = useUserStore();

  const initialValues: LoginValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("ایمیل معتبر نیست").required("ایمیل الزامی است"),
    password: Yup.string().min(6, "حداقل ۶ کاراکتر").required("رمز عبور الزامی است"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          const result = await sendLoginData(values);
          setUser(result.user);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (err) {
          alert("ورود ناموفق بود");
        } finally {
          setSubmitting(false);
        }
      }}
    >
      <Form>
        <Field name="email" placeholder="ایمیل" />
        <ErrorMessage name="email" component="div" />

        <Field name="password" type="password" placeholder="رمز عبور" />
        <ErrorMessage name="password" component="div" />

        <button type="submit">ورود</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;