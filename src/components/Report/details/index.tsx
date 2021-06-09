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
} from "antd";
import { Player } from "./interfaces";
import DetailCard from "./DetailCard";
import { Radar } from "react-chartjs-2";
const { Title } = Typography;
const { Option } = Select;
const height = 816;
const width = 745;
let xScale = d3.scaleLinear().domain([-160, 190]).range([0, width]);
let yScale = d3.scaleLinear().domain([-115, 106]).range([height, 0]);

const data = [
  {
    timestamp: 1621890228,
    players: [
      {
        isGameCreator: true,
        statistics: {
          colaboration: true,
          actionsDone: 10,
          effectiveCommunication: 7,
          taskCompletion: 4,
          exploration: 2,
          ineffectiveComunication: 3,
          accompaniment: 2,
        },
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "erick0gomez98@gmail.com",
        nickName: "erick",
        position: {
          x: -9.669440269,
          y: 0.2304488868,
        },
        color: "#64b5f6",
      },
      {
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
        id: 1,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "a@a.com",
        nickName: "omar",
        position: {
          x: -8.256337166,
          y: -1.89915812,
        },
        color: "#9575cd",
      },
      {
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
        id: 2,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "b@b.com",
        nickName: "rodrigo",
        position: {
          x: -10.52549553,
          y: 1.639630914,
        },
        color: "#81c784",
      },
    ],
  },
  {
    timestamp: 1621890229,
    players: [
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "erick0gomez98@gmail.com",
        nickName: "erick",
        position: {
          x: -8.909608841,
          y: -1.487652779,
        },
        color: "#64b5f6",
      },
      {
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
        id: 1,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "a@a.com",
        nickName: "omar",
        position: {
          x: -11.38960552,
          y: -2.267035723,
        },
        color: "#9575cd",
      },
      {
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
        id: 2,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "b@b.com",
        nickName: "rodrigo",
        position: {
          x: -14.25878906,
          y: -2.661763191,
        },
        color: "#81c784",
      },
    ],
  },
  {
    timestamp: 1621890230,
    players: [
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "erick0gomez98@gmail.com",
        nickName: "erick",
        position: {
          x: -19.73372269,
          y: 2.805848122,
        },
        color: "#64b5f6",
      },
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "a@a.com",
        nickName: "omar",
        position: {
          x: -21.00191307,
          y: 5.18947649,
        },
        color: "#9575cd",
      },
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "b@b.com",
        nickName: "rodrigo",
        position: {
          x: -25.33651543,
          y: 6.775799274,
        },
        color: "#81c784",
      },
    ],
  },
  {
    timestamp: 1621890231,
    players: [
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "erick0gomez98@gmail.com",
        nickName: "erick",
        position: {
          x: -27.71354485,
          y: 5.237593651,
        },
        color: "#64b5f6",
      },
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "a@a.com",
        nickName: "omar",
        position: {
          x: -7.200773239,
          y: 3.982229471,
        },
        color: "#9575cd",
      },
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "b@b.com",
        nickName: "rodrigo",
        position: {
          x: -5.889999866,
          y: 0,
        },
        color: "#81c784",
      },
    ],
  },
  {
    timestamp: 1621890232,
    players: [
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "erick0gomez98@gmail.com",
        nickName: "erick",
        position: {
          x: -7.481158257,
          y: 3.197849512,
        },
        color: "#64b5f6",
      },
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "a@a.com",
        nickName: "omar",
        position: {
          x: -11.64114475,
          y: 4.157140732,
        },
        color: "#9575cd",
      },
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "b@b.com",
        nickName: "rodrigo",
        position: {
          x: -8.970727921,
          y: 5.627796173,
        },
        color: "#81c784",
      },
    ],
  },
  {
    timestamp: 1621890233,
    players: [
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "erick0gomez98@gmail.com",
        nickName: "erick",
        position: {
          x: -13.00753117,
          y: 6.37967968,
        },
        color: "#64b5f6",
      },
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "a@a.com",
        nickName: "omar",
        position: {
          x: -18.75551605,
          y: 7.968966007,
        },
        color: "#9575cd",
      },
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "b@b.com",
        nickName: "rodrigo",
        position: {
          x: -5.424301147,
          y: 1.512073755,
        },
        color: "#81c784",
      },
    ],
  },
  {
    timestamp: 1621890234,
    players: [
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "erick0gomez98@gmail.com",
        nickName: "erick",
        position: {
          x: -9.944536209,
          y: -2.034400702,
        },
        color: "#64b5f6",
      },
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "a@a.com",
        nickName: "omar",
        position: {
          x: -4.741564274,
          y: 4.006775379,
        },
        color: "#9575cd",
      },
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "b@b.com",
        nickName: "rodrigo",
        position: {
          x: -11.32702732,
          y: 11.53499985,
        },
        color: "#81c784",
      },
    ],
  },
  {
    timestamp: 1621890235,
    players: [
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "erick0gomez98@gmail.com",
        nickName: "erick",
        position: {
          x: -16.57142258,
          y: 14.3202467,
        },
        color: "#64b5f6",
      },
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "a@a.com",
        nickName: "omar",
        position: {
          x: -17.43433762,
          y: 15.54532051,
        },
        color: "#9575cd",
      },
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "b@b.com",
        nickName: "rodrigo",
        position: {
          x: -22.15458679,
          y: 21.44928551,
        },
        color: "#81c784",
      },
    ],
  },
  {
    timestamp: 1621890236,
    players: [
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "erick0gomez98@gmail.com",
        nickName: "erick",
        position: {
          x: -3.469911814,
          y: 6.348711967,
        },
        color: "#64b5f6",
      },
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "a@a.com",
        nickName: "omar",
        position: {
          x: -7.051377296,
          y: 7.783280849,
        },
        color: "#9575cd",
      },
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "b@b.com",
        nickName: "rodrigo",
        position: {
          x: -9.112953186,
          y: 7.276476383,
        },
        color: "#81c784",
      },
    ],
  },
  {
    timestamp: 1621890237,
    players: [
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "erick0gomez98@gmail.com",
        nickName: "erick",
        position: {
          x: -3.469911814,
          y: 6.348711967,
        },
        color: "#64b5f6",
      },
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "a@a.com",
        nickName: "omar",
        position: {
          x: -7.051377296,
          y: 7.783280849,
        },
        color: "#9575cd",
      },
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "b@b.com",
        nickName: "rodrigo",
        position: {
          x: -9.112953186,
          y: 7.276476383,
        },
        color: "#81c784",
      },
    ],
  },
  {
    timestamp: 1621890238,
    players: [
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "erick0gomez98@gmail.com",
        nickName: "erick",
        position: {
          x: -3.469911814,
          y: 6.348711967,
        },
        color: "#64b5f6",
      },
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "a@a.com",
        nickName: "omar",
        position: {
          x: -7.051377296,
          y: 7.783280849,
        },
        color: "#9575cd",
      },
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "b@b.com",
        nickName: "rodrigo",
        position: {
          x: -9.112953186,
          y: 7.276476383,
        },
        color: "#81c784",
      },
    ],
  },
  {
    timestamp: 1621890239,
    players: [
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "erick0gomez98@gmail.com",
        nickName: "erick",
        position: {
          x: -3.469911814,
          y: 6.348711967,
        },
        color: "#64b5f6",
      },
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "a@a.com",
        nickName: "omar",
        position: {
          x: -7.051377296,
          y: 7.783280849,
        },
        color: "#9575cd",
      },
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "b@b.com",
        nickName: "rodrigo",
        position: {
          x: -9.112953186,
          y: 7.276476383,
        },
        color: "#81c784",
      },
    ],
  },
  {
    timestamp: 1621890240,
    players: [
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "erick0gomez98@gmail.com",
        nickName: "erick",
        position: {
          x: -3.469911814,
          y: 6.348711967,
        },
        color: "#64b5f6",
      },
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "a@a.com",
        nickName: "omar",
        position: {
          x: -7.051377296,
          y: 7.783280849,
        },
        color: "#9575cd",
      },
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "b@b.com",
        nickName: "rodrigo",
        position: {
          x: -9.112953186,
          y: 7.276476383,
        },
        color: "#81c784",
      },
    ],
  },
  {
    timestamp: 1621890241,
    players: [
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "erick0gomez98@gmail.com",
        nickName: "erick",
        position: {
          x: -3.469911814,
          y: 6.348711967,
        },
        color: "#64b5f6",
      },
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "a@a.com",
        nickName: "omar",
        position: {
          x: -7.051377296,
          y: 7.783280849,
        },
        color: "#9575cd",
      },
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "b@b.com",
        nickName: "rodrigo",
        position: {
          x: -9.112953186,
          y: 7.276476383,
        },
        color: "#81c784",
      },
    ],
  },
  {
    timestamp: 1621890242,
    players: [
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "erick0gomez98@gmail.com",
        nickName: "erick",
        position: {
          x: -3.469911814,
          y: 6.348711967,
        },
        color: "#64b5f6",
      },
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "a@a.com",
        nickName: "omar",
        position: {
          x: -7.051377296,
          y: 7.783280849,
        },
        color: "#9575cd",
      },
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "b@b.com",
        nickName: "rodrigo",
        position: {
          x: -9.112953186,
          y: 7.276476383,
        },
        color: "#81c784",
      },
    ],
  },
  {
    timestamp: 1621890243,
    players: [
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "erick0gomez98@gmail.com",
        nickName: "erick",
        position: {
          x: -3.469911814,
          y: 6.348711967,
        },
        color: "#64b5f6",
      },
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "a@a.com",
        nickName: "omar",
        position: {
          x: -7.051377296,
          y: 7.783280849,
        },
        color: "#9575cd",
      },
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "b@b.com",
        nickName: "rodrigo",
        position: {
          x: -9.112953186,
          y: 7.276476383,
        },
        color: "#81c784",
      },
    ],
  },
  {
    timestamp: 1621890244,
    players: [
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "erick0gomez98@gmail.com",
        nickName: "erick",
        position: {
          x: -3.469911814,
          y: 6.348711967,
        },
        color: "#64b5f6",
      },
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "a@a.com",
        nickName: "omar",
        position: {
          x: -7.051377296,
          y: 7.783280849,
        },
        color: "#9575cd",
      },
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "b@b.com",
        nickName: "rodrigo",
        position: {
          x: -9.112953186,
          y: 7.276476383,
        },
        color: "#81c784",
      },
    ],
  },
  {
    timestamp: 1621890245,
    players: [
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "erick0gomez98@gmail.com",
        nickName: "erick",
        position: {
          x: -3.469911814,
          y: 6.348711967,
        },
        color: "#64b5f6",
      },
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "a@a.com",
        nickName: "omar",
        position: {
          x: -7.051377296,
          y: 7.783280849,
        },
        color: "#9575cd",
      },
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "b@b.com",
        nickName: "rodrigo",
        position: {
          x: -9.112953186,
          y: 7.276476383,
        },
        color: "#81c784",
      },
    ],
  },
  {
    timestamp: 1621890246,
    players: [
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "erick0gomez98@gmail.com",
        nickName: "erick",
        position: {
          x: -3.469911814,
          y: 6.348711967,
        },
        color: "#64b5f6",
      },
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "a@a.com",
        nickName: "omar",
        position: {
          x: -7.051377296,
          y: 7.783280849,
        },
        color: "#9575cd",
      },
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "b@b.com",
        nickName: "rodrigo",
        position: {
          x: -9.112953186,
          y: 7.276476383,
        },
        color: "#81c784",
      },
    ],
  },
  {
    timestamp: 1621890247,
    players: [
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "erick0gomez98@gmail.com",
        nickName: "erick",
        position: {
          x: -3.469911814,
          y: 6.348711967,
        },
        color: "#64b5f6",
      },
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "a@a.com",
        nickName: "omar",
        position: {
          x: -7.051377296,
          y: 7.783280849,
        },
        color: "#9575cd",
      },
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "b@b.com",
        nickName: "rodrigo",
        position: {
          x: -9.112953186,
          y: 7.276476383,
        },
        color: "#81c784",
      },
    ],
  },
  {
    timestamp: 1621890248,
    players: [
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "erick0gomez98@gmail.com",
        nickName: "erick",
        position: {
          x: -3.469911814,
          y: 6.348711967,
        },
        color: "#64b5f6",
      },
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "a@a.com",
        nickName: "omar",
        position: {
          x: -7.051377296,
          y: 7.783280849,
        },
        color: "#9575cd",
      },
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "b@b.com",
        nickName: "rodrigo",
        position: {
          x: -9.112953186,
          y: 7.276476383,
        },
        color: "#81c784",
      },
    ],
  },
  {
    timestamp: 1621890249,
    players: [
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "erick0gomez98@gmail.com",
        nickName: "erick",
        position: {
          x: -3.469911814,
          y: 6.348711967,
        },
        color: "#64b5f6",
      },
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "a@a.com",
        nickName: "omar",
        position: {
          x: -7.051377296,
          y: 7.783280849,
        },
        color: "#9575cd",
      },
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "b@b.com",
        nickName: "rodrigo",
        position: {
          x: -9.112953186,
          y: 7.276476383,
        },
        color: "#81c784",
      },
    ],
  },
  {
    timestamp: 1621890250,
    players: [
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "erick0gomez98@gmail.com",
        nickName: "erick",
        position: {
          x: -3.469911814,
          y: 6.348711967,
        },
        color: "#64b5f6",
      },
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "a@a.com",
        nickName: "omar",
        position: {
          x: -7.051377296,
          y: 7.783280849,
        },
        color: "#9575cd",
      },
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "b@b.com",
        nickName: "rodrigo",
        position: {
          x: -9.112953186,
          y: 7.276476383,
        },
        color: "#81c784",
      },
    ],
  },
  {
    timestamp: 1621890251,
    players: [
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "erick0gomez98@gmail.com",
        nickName: "erick",
        position: {
          x: -3.469911814,
          y: 6.348711967,
        },
        color: "#64b5f6",
      },
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "a@a.com",
        nickName: "omar",
        position: {
          x: -7.051377296,
          y: 7.783280849,
        },
        color: "#9575cd",
      },
      {
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
        id: 0,
        history: {
          actions: [
            { timestamp: 0, text: "Juego completado" },
            { timestamp: 0, text: "Piedra recogida" },
            { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
            {
              timestamp: 0,
              text: "Objetivo cumplido: Recoge carne de caballo",
            },
          ],
        },
        email: "b@b.com",
        nickName: "rodrigo",
        position: {
          x: -9.112953186,
          y: 7.276476383,
        },
        color: "#81c784",
      },
    ],
  },
];

const _data = {
  labels: [
    "Acciones Realizadas",
    "Comunicación Efectiva",
    "Finalización de tareas",
    "Exploración",
    "Comunicación Inefectiva",
    "Acompañamiento",
  ],
  datasets: [
    {
      label: "Erick",
      data: [2, 9, 3, 5, 2, 3],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
    {
      label: "Omar",
      data: [1, 3, 6, 8, 2, 4],
      backgroundColor: "rgba(144, 99, 132, 0.2)",
      borderColor: "rgba(144, 99, 132, 1)",
      borderWidth: 1,
    },
    {
      label: "Rodrigo",
      data: [6, 8, 9, 1, 3, 4],
      backgroundColor: "rgba(255, 22, 132, 0.2)",
      borderColor: "rgba(255, 22, 132, 1)",
      borderWidth: 1,
    },
  ],
};
const ReportDetail: FC = () => {
  const [timeInterval, setTimeInterval] = useState<number>(1);
  const [availableTimeIntervals, setAvailableTimeIntervals] = useState<
    number[]
  >([1]);
  const [players, setPlayers] = useState<Player[]>([]);
  const [pickedPlayer, setPickedPlayer] = useState<Player>({
    color: "",
    email: "",
    id: 0,
    history: {
      actions: [
        { timestamp: 0, text: "Juego completado" },
        { timestamp: 0, text: "Piedra recogida" },
        { timestamp: 0, text: "Objetivo cumplido: Mata un caballo" },
        { timestamp: 0, text: "Objetivo cumplido: Recoge carne de caballo" },
      ],
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
    d3.select("#plot")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g");
    // Draw the initial values
    updateMapView(0);
    determineTimeIntervals();
    getPlayersList();
  }, []);

  const getPlayersList = () => {
    setPlayers(data[0].players);
    setPickedPlayer(data[0].players[0]);
  };

  const updateMapView = (idx: number) => {
    d3.select("#plot").selectAll("*").remove();
    const playersToUpdate = data[idx].players;
    for (let player of playersToUpdate) {
      const xScaleInverted = xScale(player.position.x);
      const yScaleInverted = yScale(player.position.y);
      d3.select("#plot")
        .append("circle")
        .attr("style", `fill:${player.color}`)
        .attr("cx", xScaleInverted)
        .attr("cy", yScaleInverted)
        .attr("r", 5);
    }
  };

  const determineTimeIntervals = () => {
    // Data coming from the backend will be in a 1 sec interval by default
    const totalElements = data.length;
    const tmpTimeIntervals = [1];
    // Check if we can show the 5 sec interval
    if (totalElements / 5 >= 1) {
      tmpTimeIntervals.push(5);
    }

    // Check if we can show the 10 sec interval
    if (totalElements / 10 >= 1) {
      tmpTimeIntervals.push(10);
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
      .unix(data[value].timestamp)
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
    setPickedPlayer(players.find((p) => p.id === id));
  };

  return (
    <>
      <Row>
        <Col>
          <Title>Reporte de partida</Title>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Row>
            <Col span={6}>
              <Title level={4}>Intervalo (seg)</Title>
              <Select
                defaultValue={1}
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
          <Divider />
          <Row>
            <Col span={24}>
              <Title level={4}>
                Línea del tiempo (Cada {timeInterval} segundos)
              </Title>
              <Slider
                dots
                onChange={onSliderChange}
                step={timeInterval}
                tipFormatter={formatter}
                min={0}
                max={data.length - 1}
              />
            </Col>
          </Row>
        </Col>
        <Col span={3}>
          <Statistic title="Fecha Partida" value={"12/05/2021"} />
        </Col>
        <Col span={3}>
          <Statistic title="Total de jugadores" value={3} />
        </Col>
        <Col span={3}>
          <Statistic title="Duración" value={"22 min"} />
        </Col>
        <Col span={3}>
          <Statistic
            title="Finalizado"
            value={"SI"}
            valueStyle={{ color: "#3f8600" }}
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
                data={_data}
                options={{
                  animation: false,
                  scale: { ticks: { beginAtZero: true } },
                }}
              />
            </Col>
          </Row>
          <Divider />
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
                    onClick={() => handleClickPlayer(player.id)}
                    style={{ cursor: "pointer" }}
                    className={`player-list-item ${
                      pickedPlayer?.id === player.id ? "active-item-list" : ""
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
        </Col>
      </Row>
    </>
  );
};

export default ReportDetail;
