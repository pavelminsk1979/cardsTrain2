import { toast, ToastContainer } from "react-toastify";
import { useEffect } from "react";
import {useDispatch} from "react-redux";



export const GlobalError = () => {
    const error ='Error'
/*    const error = useSelector<RootState,string|null>(
        state => state.app.error);*/
    const dispatch = useDispatch();

    if (error !== null) {
        toast.error(error);
    }

    // Данный код необходим для того, чтобы занулять ошибку в стейте
    // после того как ошибка установилась.
    useEffect(() => {
        if (error !== null) {
            setTimeout(() => {
                /*dispatch(appActions.setError( null ));*/
            }, 1000);
        }
    }, [error]);
    return (
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
        />
    );
};