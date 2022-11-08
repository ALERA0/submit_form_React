import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import Modal from "react-modal";

const customStyles = {

  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    
    
  },
};

Modal.setAppElement("#root");

export const Signup = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  })


  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal=(event)=> {
    event.preventDefault();
    setIsOpen(true);

  }

  

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
        <div>
          
          <Form className='flex flex-col gap-4'>
            <TextField label="First Name" name="firstName" type="text" />
            <TextField label="Last Name" name="lastName" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="password" name="password" type="password" />
            <TextField label="Confirm Password" name="confirmPassword" type="password" />
            <button className="bg-[#3F4EAC] rounded-2xl text-white py-2 mx-4 mb-1 hover:bg-gradient-to-r from-[#AC3636]  to-[#1C2147]" type="submit"  >Send</button>
            <button className="bg-[#3F4EAC] rounded-2xl text-white py-2 mx-4 mb-1 hover:bg-gradient-to-r from-[#AC3636]  to-[#1C2147]" onClick={openModal}   >Show</button>
            
            
            <Modal
            className=" bg-gradient-to-r from-[#1C2147] to-[#AC3636] h-96 w-80 mt-20 mx-auto flex items-center justify-center rounded-2xl"
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
          >
            <div className="flex  rounded-2xl shadow-lg  p-1 w-5/6 sm:h-5/6 justify-center">
              <form className='flex flex-col w-5/6 '>
                
                <label className='text-white flex justify-center' >Firstname    :   </label>
                <p className='text-[#FFEEDB] flex justify-center mb-7'>{formik.values.firstName}</p>
                <label className='text-white flex justify-center ' >Lastname    :   </label>
                <p className='text-[#FFEEDB] flex justify-center mb-7'>{formik.values.lastName}</p>
                <label className='text-white flex justify-center' >Email    :   </label>
                <p className='text-[#FFEEDB] flex justify-center mb-7'>{formik.values.email}</p>
                <label className='text-white flex justify-center' >Password    :   </label>
                <p className='text-[#FFEEDB] flex justify-center mb-7'>{formik.values.password}</p>
               

              </form>
            </div>
          </Modal>
          </Form>
        </div>
      )}
    </Formik>
  )
}
