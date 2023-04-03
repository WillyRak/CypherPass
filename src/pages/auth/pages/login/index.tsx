import { login } from '@/api/auth'
import FormikInput from '@/components/forms/FormikInput'
import { Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

const validator = Yup.object().shape({
  email: Yup.string().required().email(),
  password : Yup.string().required().min(8).max(20)
})

export default function Login() {
  return (
    <div>
      <Formik
        validateOnChange={true}
        validationSchema={validator}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          login(values.email, values.password)
        }}
    >
          {
          ({submitForm}) =>
            <>
              <FormikInput name="email"/>
              <FormikInput name="password" type='password'/>
              <button onClick={submitForm}>
                heloo
              </button>
            </>
        }
      </Formik>
    </div>
  )
}
