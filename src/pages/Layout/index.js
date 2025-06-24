import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div>我是layout
            <Outlet></Outlet>
        </div>

    )
}

export default Layout