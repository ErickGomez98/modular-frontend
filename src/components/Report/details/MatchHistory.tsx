import { Steps } from "antd";
import moment from "moment";
import { FC } from "react";
import { ActionHistory } from "./interfaces";
const { Step } = Steps;

interface MatchHistoryProps {
  actions: ActionHistory[];
}

const MatchHistory: FC<MatchHistoryProps> = ({ actions }) => {
  return (
    <Steps direction="vertical" size="small">
      {actions.map((action, k) => {
        const date = moment
          .unix(action.timestamp)
          .tz("America/Mexico_City")
          .format("HH:mm:ss");
        return (
          <Step
            key={k}
            status="finish"
            title={action.text}
            description={date}
          />
        );
      })}
    </Steps>
  );
};

export default MatchHistory;
