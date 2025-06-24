import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { TabBar } from "antd-mobile";
import "./index.scss";
// 异步action
import { getBillList } from "@/store/modules/billStore";
// 引入图标
import {
  BillOutline,
  CalculatorOutline,
  AddCircleOutline,
} from "antd-mobile-icons";

const tabs = [
  {
    key: "/month",
    title: "月度账单",
    icon: <BillOutline />,
  },
  {
    key: "/new",
    title: "记账",
    icon: <AddCircleOutline />,
  },
  {
    key: "/year",
    title: "年度账单",
    icon: <CalculatorOutline />,
  },
];

const Layout = () => {
  // 请求账单数据
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBillList());
  }, [dispatch]);

  //   切换菜单,跳转路由
  const navigate = useNavigate();
  const swithRoute = (path) => {
    console.log(path);
    navigate(path);
  };
  return (
    <div className="layout">
      <div className="container">
        <Outlet></Outlet>
      </div>
      <div className="footer">
        {/* onchange默认传参每一个TabBar的key值 */}
        <TabBar onChange={swithRoute}>
          {tabs.map((item) => (
            <TabBar.Item
              key={item.key}
              icon={item.icon}
              title={item.title}
            ></TabBar.Item>
          ))}
        </TabBar>
      </div>
    </div>
  );
};

export default Layout;
