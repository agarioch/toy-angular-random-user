export interface Res {
  info: any;
  results: User[]
} 

export interface User {
  name: Name;
  email: string;
  phone: string;
  picture: Picture;
  dob: Dob
}

interface Name {
  first: string;
  last: string;
  title: string;
}
interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}
interface Dob {
  age: number;
  date: string;
}