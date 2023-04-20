import listUser from '../faker/user'
import { UserType } from '../models/user';


class UserService {
  getUserList(): UserType[] {
    return listUser
  }
  
  find(id: any): UserType | undefined {
    return listUser.find(user => user.id == id)
  }
  
  create(data: UserType): UserType{
    return data
  }

  update(id: any, data: UserType): UserType {
    const user = listUser.find(user => user.id == id)
    if(!user) return undefined;
    return data
  }

  delete(id: any){
    const user = listUser.find(user => user.id == id)
    return user
  }
}

export default UserService