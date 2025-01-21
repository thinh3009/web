import {useForm} from 'react-hook-form';
type FormValues = {
    name: string;
    mail: string;
    subject: string;
    message: string;

};
const FormContact:React.FC<FormValues>=()=>{
    const {register,handleSubmit,formState:{errors}}=useForm<FormValues>();
    const onSubmit=(data: FormValues)=>{
        console.log(data);
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>First Name</label>
            <input
                {...register("name", { required: true })}
                placeholder="Name"
            />
            {errors.name && <span>This field is required</span>}
            <label>First Name</label>
            <input
                {...register("mail", { required: true })}
                placeholder="Email"
            />
            {errors.mail && <span>Please inform email</span>}
            <label>First Name</label>
            <input
                {...register("subject", { required: true })}
               
            />
            {errors.subject && <span>Inform subject</span>}
            <label>First Name</label>
            <input
                {...register("message", { required: true })}
                
            />
            {errors.message && <span>Inform message</span>}

            <button type="submit">Submit</button>
        </form>
    );
}
export default FormContact;