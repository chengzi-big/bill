import classNames from "classnames";
import "./index.scss";
import { useMemo, useState } from "react";
import { billTypeToName } from "@/contants/index";
import Icon from "@/components/Icon";

const DailyBill = ({ date, billList }) => {
  const dayResult = useMemo(() => {
    //支出(pay)-收入(income)-结余
    const pay = billList
      .filter((item) => item.type === "pay")
      .reduce((sum, item) => sum + item.money, 0);
    const income = billList
      .filter((item) => item.type === "income")
      .reduce((sum, item) => sum + item.money, 0);
    return { pay, income, total: pay + income };
  }, [billList]);

  //   控制展开收起
  const [visible, setVisible] = useState(false);
  return (
    <div className={classNames("dailyBill")}>
      <div className="header">
        <div className="dateIcon">
          <span className="date">{date}</span>
          {/* expand 有这个类名，就是一个展开的箭头朝上的样子 */}
          <span
            className={classNames("arrow", visible && "expand")}
            onClick={() => setVisible(!visible)}
          ></span>
        </div>
        <div className="oneLineOverview">
          <div className="pay">
            <span className="type">支出</span>
            <span className="money">{dayResult.pay.toFixed(2)}</span>
          </div>
          <div className="income">
            <span className="type">收入</span>
            <span className="money">{dayResult.income}</span>
          </div>
          <div className="balance">
            <span className="money">{dayResult.total}</span>
            <span className="type">结余</span>
          </div>
        </div>
      </div>
      {/* 单日列表 */}
      <div className="billList" style={{ display: visible ? "block" : "none" }}>
        {billList.map((item) => {
          return (
            <div className="bill" key={item.id}>
              {/* 图标 */}
              <Icon type={item.useFor}></Icon>
              <div className="detail">
                <div className="billType">{billTypeToName[item.useFor]}</div>
              </div>
              <div className={classNames("money", item.type)}>{item.money}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default DailyBill;
