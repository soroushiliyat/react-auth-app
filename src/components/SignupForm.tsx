import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { sendSignupData } from "../api/auth";
import useUserStore from "../store/useUserStore";

interface SignupValues {
  name: string;
  email: string;
  password: string;
}

const SignupForm = () => {
  const { setUser } = useUserStore();

  const initialValues: SignupValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("نام الزامی است"),
    email: Yup.string().email("ایمیل معتبر نیست").required("ایمیل الزامی است"),
    password: Yup.string().min(6, "حداقل ۶ کاراکتر").required("رمز عبور الزامی است"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          const result = await sendSignupData(values);
          setUser(result.user);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (err) {
          alert("ثبت‌نام ناموفق بود");
        } finally {
          setSubmitting(false);
        }
      }}
    >
      <Form>
        <Field name="name" placeholder="نام" />
        <ErrorMessage name="name" component="div" />

        <Field name="email" placeholder="ایمیل" />
        <ErrorMessage name="email" component="div" />

        <Field name="password" type="password" placeholder="رمز عبور" />
        <ErrorMessage name="password" component="div" />

        <button type="submit">ثبت‌نام</button>
      </Form>
    </Formik>
  );
};

export default SignupForm;