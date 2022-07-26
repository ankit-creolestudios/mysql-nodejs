export interface BasicUser {
  id?: number | string;
}
export interface User extends BasicUser {
  userName: string;
  email: string;
  password: string;
}
