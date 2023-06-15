import {instance} from "common/instanceAxios";

export const authApi = {
    login (payload:LoginType){
        return instance.post<LoginResponseType>('auth/login',payload)
    }
}

export type LoginType = {
    email: string
    password: string
     rememberMe:boolean
}

export type LoginResponseType = {
    avatar?: string;
    _id: string;
    email: string;
    rememberMe: boolean;
    isAdmin: boolean;
    name: string;
    verified: boolean;
    publicCardPacksCount: number;
    created: string;
    updated: string;
    __v: number;
    token: string;
    tokenDeathTime: number;
}