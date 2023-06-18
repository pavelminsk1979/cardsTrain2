import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {authApi, LoginResponseType} from "feature/auth/authApi";

/* типизация санки...первым-что санка возвращает-положительный кейс
 вторым-что санка принимает
 трейтим параметром---что санка возвращает если
в ней промис будет ЗАРЕДЖЕКЧЕНЫЙ у данной санки это null    {rejectValue:null} */

const login = createAsyncThunk<any, any, { rejectValue: null }>('auth/login', async (arg: {
    email: string
    password: string
    rememberMe: boolean
}, thunkAPI) => {
    const respons = await authApi.login(arg)
    return {profileData: respons.data}

})

const slice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,
        profile: null as null | LoginResponseType, /*когда происходид логинизация-тогда возвращаются с сервера обьект с данными
        ...из санки будут эти данные ретурном отправлятся в билдер  и там помещаются  в СТОР*/
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.profile = action.payload.profileData
                state.isLoggedIn = true
            })
    }
})

export const authSlice = slice.reducer
export const authThunk = {login}