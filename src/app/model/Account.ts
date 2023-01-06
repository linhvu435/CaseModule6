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


  constructor(id: number, username: string, email: string, password: string, phoneNumber: string, name: string, birthday: Date, date: Date, address: string, gender: string, img: string, status: number, roles: Roles) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.phoneNumber = phoneNumber;
    this.name = name;
    this.birthday = birthday;
    this.date = date;
    this.address = address;
    this.gender = gender;
    this.img = img;
    this.status = status;
    this.roles = roles;
  }
}

