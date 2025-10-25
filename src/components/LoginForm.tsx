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
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Minimum 6 characters").required("Password is required"),
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
          alert("Login failed");
        } finally {
          setSubmitting(false);
        }
      }}
    >
      <Form>
        <Field name="email" placeholder="Email" />
        <ErrorMessage name="email" component="div" />

        <Field name="password" type="password" placeholder="Password" />
        <ErrorMessage name="password" component="div" />

        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
