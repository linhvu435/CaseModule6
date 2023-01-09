<<<<<<< HEAD
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

=======
import {BillStatus} from "./BillStatus";
import {Roles} from "./Roles";

export class Account {
  id!: number

  username!:string;
  email!:string;
  password!:string;
  phoneNumber! :string;
  name!:string;

  birthday!:Date;

  date!:Date;

  gender!:string;
  img!:string;
  status!:number;

  roles!: Roles;
}
>>>>>>> c2d60439f0dac463ec75498140406ab75a98771c
