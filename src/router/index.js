// 创建路由实例 绑定Path element

import Layout from '@/pages/Layout'
import Month from '@/pages/Month'
import New from '@/pages/New'
import Year from '@/pages/Year'
import {createBrowserRouter} from 'react-router-dom'

const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        children:[
            {
                // path:'month',
                index:true,
                element:<Month></Month>
            },
            {
                path:'year',
                element:<Year></Year>
            }
        ]
    },
    {
        path:'/new',
        element:<New></New>
    }

])

export default router