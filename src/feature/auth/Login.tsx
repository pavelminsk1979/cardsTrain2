import { useForm, SubmitHandler } from "react-hook-form"
import {LoginType} from "feature/auth/authApi";
import {useAppDispatch} from "store/store";
import {authThunk} from "feature/auth/authSlice";



export const Login =() => {
    const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>()

  const onSubmit: SubmitHandler<LoginType> = (data) => {
      dispatch(authThunk.login(data))
  }


  return (
      <form onSubmit={handleSubmit(onSubmit)}>

        <input type="text" {...register("email")} />

        <input type={"password"} {...register("password", { required: true })} />

        {errors.password && <span>This field is required</span>}
          <input type="checkbox" {...register('rememberMe')}/>

        <input type="submit" />
      </form>
  )
}