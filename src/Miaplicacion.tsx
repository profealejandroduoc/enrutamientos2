import { RouterProvider } from "react-router"
import { rootRouter } from "./router/app.router"


export const Miaplicacion = () => {
    return (
        <>
            <RouterProvider router={rootRouter} />
        </>
    )
}


