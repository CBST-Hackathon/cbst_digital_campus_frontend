import { Field } from "@/components/ui/field";
import { Input, Fieldset, Button, Box } from "@chakra-ui/react";
import { PasswordInput } from "../ui/password-input";
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { clearState, userLogin } from "@/redux/AuthReducer";
import { AppDispatch, RootState } from "@/redux"; // Ensure AppDispatch and RootState are exported from Redux setup
import { useEffect } from "react";
import { useNavigate } from "react-router";

interface Values {
  email: string;
  password: string;
}

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const loginState = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loginState.isSuccess) {
      dispatch(clearState());
      navigate("/dashboard/student", { replace: true });
    }
  }, [dispatch, loginState.isSuccess, navigate]);

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={LoginSchema}
      onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
        dispatch(userLogin(values));
        setSubmitting(false); // Ensure form reset after submission
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <Form onSubmit={handleSubmit}>
          <Fieldset.Root size="sm" maxW="md">
            <Fieldset.Content>
              <Field label="Email" required>
                <Input
                  name="email"
                  type="text"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter email"
                />
                {errors.email && touched.email && (
                  <Box color="red.500" fontSize="sm">
                    {errors.email}
                  </Box>
                )}
              </Field>
              <Field label="Password" required>
                <PasswordInput
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter password"
                />
                {errors.password && touched.password && (
                  <Box color="red.500" fontSize="sm">
                    {errors.password}
                  </Box>
                )}
              </Field>
            </Fieldset.Content>
            <Box display="flex" gap="15px">
              <Button type="submit" alignSelf="flex-start">
                Login
              </Button>
              <Button type="button" alignSelf="flex-start">
                Forget Password
              </Button>
            </Box>
          </Fieldset.Root>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
