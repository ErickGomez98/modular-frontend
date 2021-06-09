import { Card, Col, Divider, Row, Statistic } from "antd";
import { FC, useState } from "react";
import { Player } from "./interfaces";
import MatchHistory from "./MatchHistory";

const tabList = [
  {
    key: "tab0",
    tab: "Estadísticas",
  },
  {
    key: "tab1",
    tab: "Historial de partida",
  },
  {
    key: "tab2",
    tab: "Información de Jugador",
  },
];

interface DetailCardProps {
  player: Player;
}

const DetailCard: FC<DetailCardProps> = ({ player }) => {
  const [activeTabKey, setActiveTabKey] = useState<string>("tab0");

  return (
    <Card
      style={{ width: "100%" }}
      title={`Resumen de ${player.nickName}`}
      tabList={tabList}
      activeTabKey={activeTabKey}
      onTabChange={(key) => {
        setActiveTabKey(key);
      }}
    >
      {activeTabKey === "tab0" ? (
        <>
          <Row gutter={16}>
            <Col span={12}>
              <Statistic
                title="Jugador colaborativo?"
                value={player.statistics.colaboration ? "SI" : "NO"}
                valueStyle={{
                  color: player.statistics.colaboration ? "#3f8600" : "#cf1322",
                }}
              />
            </Col>
          </Row>
          <Divider />
          <Row gutter={16}>
            <Col span={8}>
              <Statistic
                title="Acciones Realizadas"
                value={player.statistics.actionsDone}
                valueStyle={{
                  color:
                    player.statistics.actionsDone >= 5 ? "#3f8600" : "#cf1322",
                }}
              />
            </Col>
            <Col span={8}>
              <Statistic
                title="Comunicación Efectiva"
                value={player.statistics.effectiveCommunication}
                valueStyle={{
                  color:
                    player.statistics.effectiveCommunication >= 5
                      ? "#3f8600"
                      : "#cf1322",
                }}
              />
            </Col>
            <Col span={8}>
              <Statistic
                title="Finalización de tareas"
                value={player.statistics.taskCompletion}
                valueStyle={{
                  color:
                    player.statistics.taskCompletion >= 5
                      ? "#3f8600"
                      : "#cf1322",
                }}
              />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={8}>
              <Statistic
                title="Exploración"
                value={player.statistics.exploration}
                valueStyle={{
                  color:
                    player.statistics.exploration >= 5 ? "#3f8600" : "#cf1322",
                }}
              />
            </Col>
            <Col span={8}>
              <Statistic
                title="Comunicación Inefectiva"
                value={player.statistics.ineffectiveComunication}
                valueStyle={{
                  color:
                    player.statistics.ineffectiveComunication <= 5
                      ? "#3f8600"
                      : "#cf1322",
                }}
              />
            </Col>
            <Col span={8}>
              <Statistic
                title="Acompañamiento"
                value={player.statistics.accompaniment}
                valueStyle={{
                  color:
                    player.statistics.accompaniment >= 5
                      ? "#3f8600"
                      : "#cf1322",
                }}
              />
            </Col>
          </Row>
        </>
      ) : activeTabKey === "tab1" ? (
        <MatchHistory actions={player.history.actions} />
      ) : activeTabKey === "tab2" ? (
        <>
          <Row gutter={16}>
            <Col span={8}>
              <Statistic
                title="Nombre Jugador"
                value={player.statistics.actionsDone}
                valueStyle={{
                  color:
                    player.statistics.actionsDone >= 5 ? "#3f8600" : "#cf1322",
                }}
              />
            </Col>
            <Col span={8}>
              <Statistic
                title="Email"
                value={player.statistics.actionsDone}
                valueStyle={{
                  color:
                    player.statistics.actionsDone >= 5 ? "#3f8600" : "#cf1322",
                }}
              />
            </Col>
            <Col span={8}>
              <Statistic
                title="Fecha creación"
                value={player.statistics.effectiveCommunication}
                valueStyle={{
                  color:
                    player.statistics.effectiveCommunication >= 5
                      ? "#3f8600"
                      : "#cf1322",
                }}
              />
            </Col>
          </Row>
        </>
      ) : (
        ""
      )}
    </Card>
  );
};

export default DetailCard;
