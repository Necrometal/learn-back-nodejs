export interface UserType {
  id: number
  name: string
  email: string
  password: string
  sexe?: string
}

class User implements UserType{
  id: number;
  name: string;
  email: string;
  password: string;
  sexe?: string;

  constructor(id: number, name: string, email: string, password, sexe?: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.sexe = sexe;
  }
}

export default User