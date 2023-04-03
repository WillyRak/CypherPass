import { useField } from 'formik'
import React from 'react'



interface props extends React.HTMLProps<HTMLInputElement>{
    name: string,
}

export default function FormikInput({name, ...props} : props) {
    const [input, meta, helpers] = useField(name);

    return (
        <>
            <input {...input} {...props}></input>
            {
                (meta.touched && meta.error) && <p>{meta.error}</p>
            }
        </>
  )
}
