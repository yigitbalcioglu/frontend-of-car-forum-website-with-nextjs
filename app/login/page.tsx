"use client"

import { Form, Field, Formik } from 'formik';
import * as Yup from 'yup';

import { useRouter } from 'next/navigation';
import { login } from '@/lib/auth';


interface Values {
    username: string;
    email: string;
    password: string;
}

const validationSchema = Yup.object().shape({
   
    email: Yup.string().email('Geçersiz email formatı').required('Email gereklidir'),
    password: Yup.string().required('Şifre gereklidir'),

});

const RegisterForm = () => {
    const router = useRouter();

    return (
        <Formik
            initialValues={{        
                email: '',
                password: ''
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting }) => {
                try {
                    const sessionData = await login(values);
                    const userId = sessionData.user.userId

                    const sessionResponse = await fetch('/api/create-session', {
                      method: 'POST',
                      headers: {
                          'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({ userId:userId }),
                  });
                  if (!sessionResponse.ok) {
                      throw new Error('Session creation failed.');
                  }
                  else {
                      router.push("/")
                  }
                  console.log("Session successfully created!");
                } catch (error) {
                    console.error("Kayıt sırasında hata oluştu.", error);
                } finally {
                    setSubmitting(false);
                }
            }}
        >
            {({ errors, touched }) => (
                <Form className="bg-white shadow-lg rounded-lg p-8 w-[28rem] mx-auto mt-16 border border-black">
                <h2 className="text-2xl font-bold text-center text-black mb-4">Login</h2>
              
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
                  Login
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
                Don't you have an account?{" "}
                  <a href="/sign-up" className="text-blue-600 hover:underline">
                    Signup
                  </a>
                </p>
              </Form>
              
            )}
        </Formik>
    );
};

export default RegisterForm;