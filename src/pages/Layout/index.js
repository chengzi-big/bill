import { Button } from "antd-mobile"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div>我是layout
            <Outlet></Outlet>
            {/* 测试全局生效样式 */}
            <Button color="primary">测试全局</Button>
            <div className="puple">
                <Button color="primary">测试局部</Button>
            </div>
        </div>

    )
}

export default Layout