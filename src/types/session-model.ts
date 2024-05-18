export interface Session {
  user: {
    email: string;
    username: string;
    first_name: string;
    tasks: Task[];
    token: string;
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
