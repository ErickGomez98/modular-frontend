import { Layout as Ly, Menu, Breadcrumb } from "antd";
import { FC, useState } from "react";
import "./layout.css";
import { Switch, Route, useHistory } from "react-router-dom";
import ReportDetail from "../Report/details";

const { Header, Content, Footer } = Ly;

const Layout: FC = () => {
  const [activeBreadcrumb, setActivebreadcrumb] = useState<string>("");
  const history = useHistory();
  const navigateTo = (path: string, breadcrumb: string) => {
    history.push(path);
    setActivebreadcrumb(breadcrumb);
  };

  return (
    <Ly className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item
            key="1"
            onClick={() => {
              navigateTo("/report", "Reportes");
            }}
          >
            Reportes
          </Menu.Item>
          <Menu.Item
            key="2"
            onClick={() => {
              navigateTo("/nav2", "Nav2");
            }}
          >
            nav 2
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>{activeBreadcrumb}</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
          <Switch>
            <Route path="/report">
              <ReportDetail />
            </Route>
            <Route path="/nav2">
              <div>Nav 2</div>
            </Route>
          </Switch>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Ly>
  );
};

export default Layout;
