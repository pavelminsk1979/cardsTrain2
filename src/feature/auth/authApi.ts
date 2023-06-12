import {instance} from "common/instanceAxios";

export const authApi = {
    register(payload:any){
        return instance.post('auth/register',payload)
    }
}