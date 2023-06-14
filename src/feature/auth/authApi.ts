import {instance} from "common/instanceAxios";

export const authApi = {
    register(payload:any){
        return instance.post<RegisterType>('auth/register',payload)
    }
}

 type RegisterType = {
    email: string
    password: string
    confirmPassword: string
}