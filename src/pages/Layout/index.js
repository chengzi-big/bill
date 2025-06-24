import { Button } from "antd-mobile";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
// 异步action
import { getBillList } from "@/store/modules/billStore";

const Layout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBillList());
  }, [dispatch]);
  return (
    <div>
      我是layout
      <Outlet></Outlet>
      {/* 测试全局生效样式 */}
      <Button color="primary">测试全局</Button>
      <div className="puple">
        <Button color="primary">测试局部</Button>
      </div>
    </div>
  );
};

export default Layout;
