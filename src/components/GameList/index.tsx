import axios from "axios";
import { useEffect, useState } from "react";
import { GameListItem, GameListItemTable } from "./interfaces";
import { Skeleton, Table } from "antd";
import moment from "moment-timezone";
import { useHistory } from "react-router-dom";
import "./gameList.css";

const API = process.env.REACT_APP_API_ENDPOINT;

const columns = [
  {
    title: "ID",
    dataIndex: "gameId",
    key: "id",
  },
  {
    title: "Fecha creación",
    dataIndex: "createdAt",
    key: "createdAt",
  },
  {
    title: "Nombre sala",
    dataIndex: "roomName",
    key: "roomName",
  },
  {
    title: "Total jugadores",
    dataIndex: "totalPlayers",
    key: "totalPlayers",
  },
  {
    title: "Duración",
    dataIndex: "gameDuration",
    key: "gameDuration",
  },
  {
    title: "Finalizado",
    dataIndex: "gameFinished",
    key: "gameFinished",
  },
];

const GameList = () => {
  const [data, setData] = useState<GameListItem[]>([]);
  const [dataSource, setDataSource] = useState<GameListItemTable[]>([]);
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const result = (await axios.get<GameListItem[]>(`${API}game/gameList`))
        .data;
      console.log("result", result);
      setData(result);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (data.length) {
      formatDataSource();
    }
  }, [data]);

  useEffect(() => {
    if (dataSource.length) {
      setDataLoaded(true);
    }
  }, [dataSource]);

  const formatDataSource = () => {
    const formattedData: GameListItemTable[] = data.map((d) => ({
      createdAt: moment
        .unix(d.createdAt)
        .tz("America/Mexico_City")
        .format("DD/MM/YYYY HH:mm:ss"),
      gameDuration: new Date(d.gameDuration * 1000).toISOString().substr(11, 8),
      gameFinished: d.gameFinished,
      gameId: d.gameId,
      key: d.gameId,
      roomName: d.roomName,
      totalPlayers: d.totalPlayers,
    }));

    setDataSource(formattedData);
  };

  const handleClick = (gameId: number) => {
    history.push("report/" + gameId);
  };

  return (
    <>
      {!dataLoaded ? (
        <Skeleton />
      ) : (
        <Table
          dataSource={dataSource}
          columns={columns}
          rowClassName="clickable-row"
          onRow={(record) => ({
            onClick: () => handleClick(record.gameId),
          })}
        />
      )}
    </>
  );
};

export default GameList;
