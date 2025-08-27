import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
};

const onSubmit = (values) => {
  console.log("formdata", values);
};

const validationSchema = Yup.object({
  firstname: Yup.string().required("Required"),
  lastname: Yup.string().required("Required"),
  email: Yup.string().email("Invalid Email Address!").required("Required"),
  password: Yup.string().required("Required"),
});

const Form3 = () => {
  return (
    <div className="h-screen flex items-start justify-center bg-gradient-to-br from-pink-100 via-purple-200 to-indigo-100 pt-16 px-4">
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        <Form className="w-[700px] h-[700px] bg-white rounded-3xl shadow-2xl p-10 overflow-y-auto">
          <h2 className="text-3xl font-bold text-purple-700 text-center mb-8 drop-shadow-sm">
            Registration Form
          </h2>

          {/* First Name */}
          <div className="mb-5">
            <label htmlFor="firstname" className="block text-sm font-semibold text-gray-700 mb-1">
              First Name
            </label>
            <Field
              type="text"
              id="firstname"
              name="firstname"
              className="input"
              placeholder="John"
            />
            <ErrorMessage name="firstname" component="p" className="error-text" />
          </div>

          {/* Last Name */}
          <div className="mb-5">
            <label htmlFor="lastname" className="block text-sm font-semibold text-gray-700 mb-1">
              Last Name
            </label>
            <Field
              type="text"
              id="lastname"
              name="lastname"
              className="input"
              placeholder="Doe"
            />
            <ErrorMessage name="lastname" component="p" className="error-text" />
          </div>

          {/* Email */}
          <div className="mb-5">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
              Email Address
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              className="input"
              placeholder="john@example.com"
            />
            <ErrorMessage name="email" component="p" className="error-text" />
          </div>

          {/* Password */}
          <div className="mb-5">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-1">
              Password
            </label>
            <Field
              type="password"
              id="password"
              name="password"
              className="input"
              placeholder="••••••••"
            />
            <ErrorMessage name="password" component="p" className="error-text" />
          </div>

          {/* Remember Me */}
          <div className="flex items-center mb-6">
            <Field
              type="checkbox"
              id="remember"
              name="remember"
              className="checkbox"
            />
            <label htmlFor="remember" className="ml-2 text-sm text-gray-700 font-medium">
              Remember me
            </label>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn w-full">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Form3;
