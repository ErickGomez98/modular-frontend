import { Steps } from "antd";
import moment from "moment";
import { FC } from "react";
import { ActionHistory } from "./interfaces";
const { Step } = Steps;

interface MatchHistoryProps {
  actions: ActionHistory[];
}

const MatchHistory: FC<MatchHistoryProps> = ({ actions }) => {
  const orderedActions = [...actions].reverse();
  return (
    <Steps direction="vertical" size="small">
      {orderedActions.map((action, k) => {
        const date = moment
          .unix(action.timestamp)
          .tz("America/Mexico_City")
          .format("HH:mm:ss");
        return (
          <Step
            key={k}
            status="finish"
            title={
              action.type === "INIT_GAME" ? "Partida iniciada" : action.payload
            }
            description={date}
          />
        );
      })}
    </Steps>
  );
};

export default MatchHistory;
