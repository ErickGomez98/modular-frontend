import { Breadcrumb, Layout as Ly, Menu } from "antd";
import { FC, useEffect, useState } from "react";
import { Switch, useHistory } from "react-router-dom";
import ProtectedRoute from "../Auth/protectedRoute";
import GameList from "../GameList";
import ReportDetail from "../Report/details";
import "./layout.css";

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

  const handleSignOut = () => {
    window.localStorage.removeItem("authToken");
    history.push("/login");
  };

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
          <Menu.Item key="2" onClick={() => handleSignOut()}>
            Cerrar sesión
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>{activeBreadcrumb}</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
          <Switch>
            <ProtectedRoute path="/report/:gameId">
              <ReportDetail />
            </ProtectedRoute>
            <ProtectedRoute path="/reportes">
              <GameList />
            </ProtectedRoute>
          </Switch>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}></Footer>
    </Ly>
  );
};

export default Layout;
