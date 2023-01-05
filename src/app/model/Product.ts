export class Product {
  id?: number
  name?: string
  img?: string
  detail? :string
  price?: number
  amount?: number


  constructor(id: number, name: string, img: string, detail: string, price: number, amount: number) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.detail = detail;
    this.price = price;
    this.amount = amount;
  }
}
