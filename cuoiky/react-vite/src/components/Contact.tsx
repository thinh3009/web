import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import  FormContact  from '../layout/FormContact.tsx';

function Contact() {
    
    return (
        <>
            <div className="container"><FormContact name={''} mail={''} subject={''} message={''}/></div>

        </>

    );
}
export default Contact