export interface Position {
  x: number;
  y: number;
}
export enum ActionType {
  INIT_GAME = "INIT_GAME",
  PICK_UP_ITEM = "PICK_UP_ITEM",
  THROW_ROCK = "THROW_ROCK",
  HIT_HORSE = "HIT_HORSE",
  END_GAME = "END_GAME",
  CHAT_MSG = "CHAT_MSG",
  COMPLETE_OBJECTIVE = "COMPLETE_OBJECTIVE",
}

export interface ActionHistory {
  timestamp: number;
  payload: string;
  type: ActionType;
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
  playerId: number;
  userId: number;
  email: string;
  nickName: string;
  createdAt: number;
  position: Position;
  color: string;
  isGameCreator: boolean;
  history: ActionsHistory;
  statistics: PlayerStatistics;
}
export interface PlayerPosition {
  playerId: number;
  position: Position;
}

export interface GameHistoryDetail {
  timestamp: number;
  playersPosition: PlayerPosition[];
}

export interface GameDetail {
  gameId: number;
  roomName: string;
  createdAt: number;
  gameDuration: number;
  gameFinished: boolean;
  playerList: Player[];
  gameHistory: GameHistoryDetail[];
}
