import { FC, useEffect, useState } from "react";
import * as d3 from "d3";
import "./report.css";
import mapBackground from "../../../images/map.png";
import moment from "moment-timezone";
import {
  Col,
  Divider,
  Row,
  Select,
  Slider,
  Typography,
  Avatar,
  List,
  Statistic,
  Skeleton,
} from "antd";
import { GameDetail, Player } from "./interfaces";
import DetailCard from "./DetailCard";
import { Radar } from "react-chartjs-2";
import axios from "axios";
import { useParams } from "react-router";
const { Title } = Typography;
const { Option } = Select;
const height = 816;
const width = 745;
let xScale = d3.scaleLinear().domain([-160, 190]).range([0, width]);
let yScale = d3.scaleLinear().domain([-115, 106]).range([height, 0]);

const API = process.env.REACT_APP_API_ENDPOINT;

const hexToRgb = (hex: string) => {
  const h = hex
    .replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (m: any, r: any, g: any, b: any) => "#" + r + r + g + g + b + b
    )
    .substring(1)
    .match(/.{2}/g);

  return h ? h.map((x: any) => parseInt(x, 16)) : [];
};
const ReportDetail: FC = () => {
  const { gameId } = useParams<{ gameId: string }>();
  const [data, setData] = useState<GameDetail>({
    createdAt: 0,
    gameDuration: 0,
    gameFinished: false,
    gameHistory: [],
    gameId: 0,
    playerList: [],
    roomName: "",
  });
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);
  const [radarData, setRadarData] = useState<{
    labels: string[];
    datasets: any[];
  }>({ labels: [], datasets: [] });
  const [timeInterval, setTimeInterval] = useState<number>(2);
  const [availableTimeIntervals, setAvailableTimeIntervals] = useState<
    number[]
  >([2]);
  const [players, setPlayers] = useState<Player[]>([]);
  const [pickedPlayer, setPickedPlayer] = useState<Player>({
    color: "",
    email: "",
    playerId: 0,
    userId: 0,
    createdAt: 0,
    history: {
      actions: [],
    },
    isGameCreator: false,
    statistics: {
      colaboration: true,
      actionsDone: 10,
      effectiveCommunication: 7,
      taskCompletion: 4,
      exploration: 2,
      ineffectiveComunication: 3,
      accompaniment: 2,
    },
    nickName: "",
    position: { x: 0, y: 0 },
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = (
        await axios.get<GameDetail>(`${API}game/gameDetails/${gameId}`)
      ).data;
      console.log("result", result);
      setData(result);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (data.gameId !== 0) {
      d3.select("#plot")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g");

      determineTimeIntervals();
      getPlayersList();
      setDataLoaded(true);

      formatRadarData();
    }
  }, [data]);

  useEffect(() => {
    if (dataLoaded) {
      updateMapView(0);
    }
  }, [dataLoaded]);

  const formatRadarData = () => {
    const dataset: any[] = [];
    data.playerList.forEach((p) => {
      const stats = p.statistics;
      const rgb = hexToRgb(p.color);
      dataset.push({
        label: p.nickName,
        data: [
          stats.actionsDone,
          stats.effectiveCommunication,
          stats.taskCompletion,
          stats.exploration,
          stats.ineffectiveComunication,
          stats.accompaniment,
        ],
        backgroundColor: `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.2)`,
        borderColor: `rgba(${rgb[0]}, ${rgb[0]}, ${rgb[0]}, 1)`,
        borderWidth: 1,
      });
    });
    const _data = {
      labels: [
        "Acciones Realizadas",
        "Comunicación Efectiva",
        "Finalización de tareas",
        "Exploración",
        "Comunicación Inefectiva",
        "Acompañamiento",
      ],
      datasets: dataset,
    };
    setRadarData(_data);
  };

  const getPlayersList = () => {
    setPlayers(data.playerList);
    setPickedPlayer(data.playerList[0]);
  };

  const updateMapView = (idx: number) => {
    d3.select("#plot").selectAll("*").remove();
    const playersToUpdate = data.gameHistory[idx].playersPosition;
    for (let player of playersToUpdate) {
      const xScaleInverted = xScale(player.position.x);
      const yScaleInverted = yScale(player.position.y);
      d3.select("#plot")
        .append("circle")
        .attr(
          "style",
          `fill:${
            data.playerList.find((p) => p.playerId === player.playerId)?.color
          }`
        )
        .attr("cx", xScaleInverted)
        .attr("cy", yScaleInverted)
        .attr("r", 5);
    }
  };

  const determineTimeIntervals = () => {
    // Data coming from the backend will be in a 2 sec interval by default
    const totalElements = data.gameHistory.length;
    const tmpTimeIntervals = [2];
    // Check if we can show the 10 sec interval
    if (totalElements / 10 >= 1) {
      tmpTimeIntervals.push(10);
    }

    // Check if we can show the 20 sec interval
    if (totalElements / 20 >= 1) {
      tmpTimeIntervals.push(20);
    }

    // Check if we can show the 30 sec interval
    if (totalElements / 30 >= 1) {
      tmpTimeIntervals.push(30);
    }

    // Check if we can show the 60 sec interval
    if (totalElements / 60 >= 1) {
      tmpTimeIntervals.push(60);
    }

    setAvailableTimeIntervals([...tmpTimeIntervals]);
  };

  const formatter = (value: number | undefined) => {
    if (value === undefined) {
      return "";
    }
    return moment
      .unix(data.gameHistory[value].timestamp)
      .tz("America/Mexico_City")
      .format("HH:mm:ss");
  };

  const onSliderChange = (value: number | undefined) => {
    if (value !== undefined) {
      updateMapView(value);
    }
  };

  const handleChangeInterval = (value: number) => {
    setTimeInterval(value);
  };

  const handleClickPlayer = (id: number) => {
    console.log("player id", id);
    //@ts-ignore
    setPickedPlayer(players.find((p) => p.playerId === id));
  };

  return (
    <>
      {!dataLoaded ? (
        <Skeleton />
      ) : (
        <>
          <Row>
            <Col>
              <Title>Reporte de partida</Title>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={10}>
              <Row>
                <Col span={6}>
                  <Title level={4}>Intervalo (seg)</Title>
                  <Select
                    defaultValue={2}
                    style={{ width: 120 }}
                    onChange={handleChangeInterval}
                  >
                    {availableTimeIntervals &&
                      availableTimeIntervals.map((ti) => (
                        <Option key={ti} value={ti}>
                          {ti} seg
                        </Option>
                      ))}
                  </Select>
                </Col>
              </Row>
            </Col>
            <Col span={5}>
              <Statistic
                title="Fecha Partida"
                value={moment
                  .unix(data.createdAt)
                  .tz("America/Mexico_City")
                  .format("DD/MM/YYYY HH:mm:ss")}
              />
            </Col>
            <Col span={3}>
              <Statistic
                title="Total de jugadores"
                value={data.playerList.length}
              />
            </Col>
            <Col span={3}>
              <Statistic
                title="Duración"
                value={new Date(data.gameDuration * 1000)
                  .toISOString()
                  .substr(11, 8)}
              />
            </Col>
            <Col span={3}>
              <Statistic
                title="Finalizado"
                value={data.gameFinished ? "SI" : "NO"}
                valueStyle={{
                  color: data.gameFinished ? "#3f8600" : "#cf1322",
                }}
              />
            </Col>
          </Row>
          <Row>
            <Divider />
            <Col span={24}>
              <Title level={4}>
                Línea del tiempo (Cada {timeInterval} segundos)
              </Title>
              <Slider
                dots
                onChange={onSliderChange}
                step={timeInterval / 2}
                tipFormatter={formatter}
                min={0}
                max={data.gameHistory.length - 1}
              />
            </Col>
          </Row>
          <Divider />
          <Row style={{ marginTop: 20 }}>
            <Col span={12}>
              <svg
                id="plot"
                style={{ backgroundImage: `url(${mapBackground})` }}
              ></svg>
            </Col>
            <Col span={12}>
              <Row>
                <Col span={24}>
                  <Title level={4}>Estadísticas Generales</Title>
                  <Radar
                    type
                    data={radarData}
                    options={{
                      animation: false,
                      scale: { ticks: { beginAtZero: true } },
                    }}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Title level={4}>Lista de jugadores</Title>
            </Col>
            <Col span={8}>
              <List
                itemLayout="horizontal"
                dataSource={players}
                renderItem={(player) => (
                  <List.Item
                    onClick={() => handleClickPlayer(player.playerId)}
                    style={{ cursor: "pointer" }}
                    className={`player-list-item ${
                      pickedPlayer?.playerId === player.playerId
                        ? "active-item-list"
                        : ""
                    }`}
                  >
                    <List.Item.Meta
                      avatar={
                        <Avatar
                          style={{
                            backgroundColor: player.color,
                          }}
                        >
                          {player.nickName[0].toUpperCase()}
                        </Avatar>
                      }
                      title={player.nickName}
                      description={
                        player.isGameCreator
                          ? "Creador de la partida"
                          : "Jugador"
                      }
                    />
                  </List.Item>
                )}
              />
            </Col>
            <Col span={16}>
              <DetailCard player={pickedPlayer} />
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default ReportDetail;
