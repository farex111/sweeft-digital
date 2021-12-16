export interface User {
  id: number;
  name: string;
  lastname: string;
  prefix: string;
  title: string;
  imageUrl: string;
}
export interface Users {
  list: User[];
}
export interface fullUsers {
  id: number;
  name: string;
  lastName: string;
  prefix: string;
  title: string;
  imageUrl: string;
  jobDescriptor: string;
  jobArea: string;
  jobType: string;
  email: string;
  ip: string;
  company: company;
  address: adress;
}

export interface adress {
  zipCode: string;
  city: string;
  streetAddress: string;
  country: string;
  state: string;
}
export interface company {
  name: string;
  suffix: string;
}
