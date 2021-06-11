import { Layout as Ly, Menu, Breadcrumb } from "antd";
import { FC, useEffect, useState } from "react";
import "./layout.css";
import { Switch, Route, useHistory } from "react-router-dom";
import ReportDetail from "../Report/details";
import GameList from "../GameList";

const { Header, Content, Footer } = Ly;

const Layout: FC = () => {
  const [activeBreadcrumb, setActivebreadcrumb] = useState<string>("Reportes");
  const history = useHistory();
  const navigateTo = (path: string, breadcrumb: string) => {
    history.push(path);
    setActivebreadcrumb(breadcrumb);
  };

  useEffect(() => {
    history.replace("/reportes");
  }, []);

  return (
    <Ly className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item
            key="1"
            onClick={() => {
              navigateTo("/reportes", "Reportes");
            }}
          >
            Reportes
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>{activeBreadcrumb}</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
          <Switch>
            <Route path="/report/:gameId">
              <ReportDetail />
            </Route>
            <Route path="/reportes">
              <GameList />
            </Route>
          </Switch>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}></Footer>
    </Ly>
  );
};

export default Layout;
