"use client"

import { Form, Field, Formik } from 'formik';
import * as Yup from 'yup';

import { useRouter } from 'next/navigation';
import { signup } from '@/lib/auth';

interface Values {
    username: string;
    email: string;
    password: string;
}

const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username adı gereklidir'),
    nickname: Yup.string().required('Nickname adı gereklidir'),
    email: Yup.string().email('Geçersiz email formatı').required('Email gereklidir'),
    password: Yup.string().required('Şifre gereklidir'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Şifreler eşleşmiyor')
        .required('Şifre onayı gereklidir'),
});

const RegisterForm = () => {
    const router = useRouter();

    return (
        <Formik
            initialValues={{
                username: '',
                nickname: '',
                email: '',
                password: '',
                confirmPassword: ''
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting }) => {
              console.log(values)
                try {
                    await signup(values); // Call the signup function
                    router.push("/login");
                } catch (error) {
                    console.error("Kayıt sırasında hata oluştu.", error);
                } finally {
                    setSubmitting(false);
                }
            }}
        >
            {({ errors, touched }) => (
                <Form className="bg-white shadow-lg rounded-lg p-8 w-[28rem] mx-auto mt-16 border border-black">
                <h2 className="text-2xl font-bold text-center text-black mb-4">Sign up</h2>
              
                <label htmlFor="nickname" className="block mb-4">
                  <p className="text-gray-700 text-b font-medium mb-2">Nickname</p>
                  <Field
                    type="text"
                    name="nickname"
                    placeholder="Enter your nickname"
                    className="input w-full px-4 py-2 text-black border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.nickname && touched.nickname && (
                    <p className="text-red-500 text-sm mt-1">{errors.nickname}</p>
                  )}
                </label>

                <label htmlFor="username" className="block mb-4">
                  <p className="text-gray-700 text-b font-medium mb-2">Username</p>
                  <Field
                    type="text"
                    name="username"
                    placeholder="Enter your Username"
                    className="input w-full px-4 py-2 text-black border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.username && touched.username && (
                    <p className="text-red-500 text-sm mt-1">{errors.username}</p>
                  )}
                </label>
              
                <label htmlFor="email" className="block mb-4">
                  <p className="text-gray-700 font-medium mb-2">Email</p>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="input w-full px-4 py-2 text-black border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.email && touched.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </label>
              
                <label htmlFor="password" className="block mb-4">
                  <p className="text-gray-700 font-medium mb-2">Password</p>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    className="input w-full px-4 py-2 text-black border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.password && touched.password && (
                    <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                  )}
                </label>

                <label htmlFor="confirm password" className="block mb-4">
                  <p className="text-gray-700 font-medium mb-2">Confirm Password</p>
                  <Field
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    className="input w-full px-4 py-2 border text-black border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.confirmPassword && touched.confirmPassword && (
                    <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                  )}
                </label>
              
                <div className="flex items-center mb-6">
                  <Field
                    type="checkbox"
                    name="rememberMe"
                    className="h-4 w-4 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                  />
                  <label htmlFor="rememberMe" className="ml-2 text-gray-700 text-sm">
                    Remember me
                  </label>
                </div>
              
                <button
                  className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
                  type="submit"
                >
                  Sign up
                </button>
              
                <div className="flex justify-center items-center mt-6 space-x-4">
                  <button className="bg-gray-100 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-200 transition">
                    Google
                  </button>
                  <button className="bg-gray-100 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-200 transition">
                    LinkedIn
                  </button>
                  <button className="bg-gray-100 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-200 transition">
                    SSO
                  </button>
                </div>
              
                <p className="text-center mt-6 text-sm text-gray-500">
                  Already have an account?{" "}
                  <a href="/login" className="text-blue-600 hover:underline">
                    Login
                  </a>
                </p>
              </Form>
              
            )}
        </Formik>
    );
};

export default RegisterForm;