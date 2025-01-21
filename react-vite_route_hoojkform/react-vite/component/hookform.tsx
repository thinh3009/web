import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormValues = {
    firstName: string;
    lastName: string;
};

function HookForm() {
    // const form=useForm<Inputs>()
    // const register=form.register
    // const handleSubmit=form.handleSubmit
    // const watch=form.watch;
    // const formState=form.formState
    // const error=formState.errors
    const {
        register, handleSubmit, formState: { errors }
    } = useForm<FormValues>({
        defaultValues:{
            firstName:'bui duc thinh',
            lastName:'bui'
        },
    }
        
        
    );


    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                {...register("firstName", { required: true })}
                placeholder="First Name"
            />
            {errors.firstName && <span>This field is required</span>}

            <input
                {...register("lastName", { required: true, minLength: 2 })}
                placeholder="Last Name"
            />
            {errors.lastName && <span>Last name must be at least 2 characters</span>}

            <button type="submit">Submit</button>
        </form>
    );
}

export default HookForm;