import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type FormValues = {
    name: string;
    mail: string;
    subject: string;
    message: string;

};
const FormContact: React.FC<FormValues> = () => {
    // const {register,handleSubmit,formState:{errors}}=useForm<FormValues>();
    // const onSubmit=(data: FormValues)=>{
    //     console.log(data);
    // }
    type FormFields = {
        email: string,
        name: string,
        subject: string,
        message: string

    }
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormFields>();
    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log(data);
        reset();
        window.alert("Sent sucessfully");
    }
    return (
        <>
            <h1 className='text-center'>Contact to me</h1>
            <form className='tutorial gap-2 bg-gray-400 p-14 flex flex-col rounded-md' onSubmit={handleSubmit(onSubmit)} >
                {/* mail */}
                <label className=' w-20 rounded-md text-center'>Email</label>
                <input className='rounded-md' {...register("email", {
                    required: "Email is required",
                    validate: (value) => {
                        if (!value.includes('@')) {
                            return "Email must include @";
                        }
                        return true;
                    }
                })} type="text"
                    placeholder='email'



                />
                {errors.email && <div className='text-red-500'>{errors.email.message}</div>}
                {/* name */}
                <label className=' w-20 rounded-md text-center'>Name</label>
                <input className='rounded-md'  {...register("name", {
                    required: "Name must required",

                })} type="text"
                    placeholder='name'

                />
                {errors.name && <div className='text-red-500'>{errors.name.message}</div>}

                {/* Subject */}
                <label className=' w-20 rounded-md text-center'>Subject</label>
                <input className='rounded-md'  {...register("subject", {
                    required: "Subject must required",


                })} type="text"
                    placeholder='subject'

                />
                {errors.subject && <div className='text-red-500'>{errors.subject.message}</div>}

                {/* message */}
                <label className=' w-20 rounded-md text-center'>Message</label>
                <textarea className='h-20 rounded-md' {...register("message", {
                    required: true,


                })}
                    placeholder='message'

                />
                {errors.message && <div className='text-red-500'>{errors.message.message}</div>}
                <button disabled={isSubmitting} type='submit'>{isSubmitting ? "Loading..." : "Submit"}</button>
                <div className='contact-me flex justify-between pt-5'>
                    <div className="phone flex gap-3 items-center">
                        <img className='rounded-full' src="..\assets\phone.svg" alt="" />
                        <p>0372818739</p>
                    </div>
                    <div className="mail flex gap-3 items-center">
                        <img src="..\assets\mail.svg" alt="" />
                        <p>buiducthinh9a1@gmail.com</p>
                    </div>
                </div>
            </form>
            <p className='text-center p-5'>Thank you very much for take a time to read my portfolio hope receive respone soon !</p>
        </>

        // <form onSubmit={handleSubmit(onSubmit)} className='flex flex-wrap gap-8'>
        //     <label>Name</label>
        //     <input
        //         {...register("name", { required: true })}
        //         placeholder="Name"
        //     />
        //     {errors.name && <span>This field is required</span>}
        //     <label>Mail</label>
        //     <input
        //         {...register("mail", { required: true })}
        //         placeholder="Email"
        //     />
        //     {errors.mail && <span>Please inform email</span>}
        //     <label>Subject</label>
        //     <input
        //         {...register("subject", { required: true })}

        //     />
        //     {errors.subject && <span>Inform subject</span>}
        //     <label>Message</label>
        //     <input
        //         {...register("message", { required: true })}

        //     />
        //     {errors.message && <span>Inform message</span>}

        //     <button type="submit" >Submit</button>
        // </form>
    );
}
export default FormContact;