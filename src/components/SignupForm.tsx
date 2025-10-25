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
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Minimum 6 characters").required("Password is required"),
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
          alert("Signup failed");
        } finally {
          setSubmitting(false);
        }
      }}
    >
      <Form>
        <Field name="name" placeholder="Name" />
        <ErrorMessage name="name" component="div" />

        <Field name="email" placeholder="Email" />
        <ErrorMessage name="email" component="div" />

        <Field name="password" type="password" placeholder="Password" />
        <ErrorMessage name="password" component="div" />

        <button type="submit">Sign Up</button>
      </Form>
    </Formik>
  );
};

export default SignupForm;
