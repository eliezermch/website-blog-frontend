export interface Session {
  user: {
    email: string;
    username: string;
    tasks: Task | [];
    toke: string;
  };
  expires: string;
  iat: number;
  exp: number;
}

export interface Task {
  id: number;
  title: string;
  description: string;
  done: boolean;
  created_at: string;
}
[];
