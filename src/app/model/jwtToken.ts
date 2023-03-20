import { Role } from "./role";

export class JwtToken {
  token: string = '';
  id: number = 0;
  username: string = '';
  firstname: string = '';
  lastname: string = '';
  roles: Role[] = [];
  tokenType: string = '';

  constructor() { }
}
