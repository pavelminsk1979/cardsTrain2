import {createSlice} from "@reduxjs/toolkit";


const slice = createSlice({
    name: 'app',
    initialState: {
        error: null as string | null,
        statusLoading: 'finishLoading' as 'loading' | 'finishLoading'
    },
    reducers: {
        setError: (state, action) => {
            state.error = action.payload
            /* Вывести ошибку на экран-- текст в action.payload*/
        },
        setStatusLoading: (state, action) => {
            state.statusLoading = action.payload
        }
    },
    extraReducers: builder => {
        builder
            /*крутилку можно тут показать и после отработки САНКИ тут же и выключить крутилку-загрузку*/
            .addMatcher(
                (action) => {

                    console.log(action) /*это чтоб узнать КОНКРЕТНУЮ СТРОКУ В ЭКШЕНЕ
                    далее ДЕЛАЮ ПОИСК ПО СОВПАДЕНИЮ С КОНЦОВКОЙ НУЖНОГО ЭКШЕНА
                    напомню что сам редакс-тулки составляет эту строку для экшена*/

                    return action.type.endsWith('/КОНЦОВКa НУЖНОГО ЭКШЕНА')
                },


                (state, action) => {
                    state.statusLoading = 'loading'
                  /*  это включит крутилку-загрузку*/
                })
            .addMatcher(
               /* этот ЭДМАТЧЕР для показа ошибки-всплывашки*/
                (action) => {
                    return action.type.endsWith('/КОНЦОВКa НУЖНОГО ЭКШЕНА')
                },
                (state, action) => {
                    state.statusLoading = 'finishLoading' /*выключатся загрузка-крутилка будет и при ошибке и при успешном завершении работы санки*/
                    state.error = action.payload.messages[0]
                })
            .addMatcher(
                /* этот ЭДМАТЧЕР для завершения показа крутилки загрузки когда успешно
                * запрос в санке выполняется */
                (action) => {
                    return action.type.endsWith('/КОНЦОВКa НУЖНОГО ЭКШЕНА')
                },
                (state, action) => {
                    state.statusLoading = 'finishLoading' /*выключатся загрузка-крутилка будет и при ошибке и при успешном завершении работы санки*/
                })
    }
})

export const appSlice = slice.reducer;
/*не забыть подключить appReducer к стору*/

export const appActions = slice.actions
