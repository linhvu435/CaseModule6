import {Roles} from "./Roles";

export class Account {
  id !: number;
  username !: string;
  email !: string;
  password !: string;
  phoneNumber !: string;
  name !: string;
  birthday !: Date;
  date !: Date;
  address !: string;
  gender!: string;
  img!: string;
  status !: number;
  roles !: Roles;


}

