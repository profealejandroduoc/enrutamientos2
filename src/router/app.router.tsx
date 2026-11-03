import { AdminPage } from '@/admin/AdminPage'
import { CarritoPage } from '@/client/page/CarritoPage'
import { HomePage } from '@/client/page/HomePage'
import { ClienteLayout } from '@/client/page/layout/ClienteLayout'
import { ProductsPage } from '@/client/page/ProductsPage'
import { createBrowserRouter } from 'react-router'

export const rootRouter = createBrowserRouter([
    {
        path: '/',
        element: <ClienteLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: '/carrito',
                element: <CarritoPage></CarritoPage>
            },
            {
                path: '/productos',
                element: <ProductsPage></ProductsPage>
            },

        ]
    },

    {
        path: '/adm',
        element: <AdminPage></AdminPage>
    }




])