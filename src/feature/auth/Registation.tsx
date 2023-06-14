
import { useForm, SubmitHandler } from "react-hook-form"

type InputsType = {
    email: string
    password: string
    confirmPassword:string
}

export const Registation =() => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<InputsType>()

    const onSubmit: SubmitHandler<InputsType> = (data) => {
        console.log(data)
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <input type="text" {...register("email")} />

            <input type={"password"} {...register("password", { required: true })} />

            {errors.password && <span>This field is required</span>}

            <input type={"password"} {...register("confirmPassword", { required: true })} />

            <input type="submit" />
        </form>
    )
}


