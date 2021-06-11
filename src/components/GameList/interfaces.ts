export interface GameListItem {
  gameId: number;
  createdAt: number;
  totalPlayers: number;
  gameDuration: number;
  gameFinished: boolean;
  roomName: string;
}

export interface GameListItemTable {
  key: number;
  gameId: number;
  createdAt: string;
  totalPlayers: number;
  gameDuration: string;
  gameFinished: boolean;
  roomName: string;
}
