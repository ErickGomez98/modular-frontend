export interface Position {
  x: number;
  y: number;
}

export interface ActionHistory {
  timestamp: number;
  text: string;
}
export interface ActionsHistory {
  actions: ActionHistory[];
}

export interface PlayerStatistics {
  colaboration: boolean;
  actionsDone: number;
  effectiveCommunication: number;
  taskCompletion: number;
  exploration: number;
  ineffectiveComunication: number;
  accompaniment: number;
}

export interface Player {
  id: number;
  email: string;
  nickName: string;
  position: Position;
  color: string;
  isGameCreator: boolean;
  history: ActionsHistory;
  statistics: PlayerStatistics;
}
