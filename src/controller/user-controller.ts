import UserService from '../services/user'
import Controller from './controller';

class UserController extends Controller{
  service = new UserService();

  constructor(){
    super()
  }

  getUserList(req, res): void{
    res.json(this.service.getUserList())
  }

  getUserById(req, res): void{
    const { id } = req.params
    const user = this.service.find(id);
    if(user) res.json(user)
    else{
      res.status(404)
      res.json({ error: 'user not found'})
    }
  }

  createUser(req, res): void {
    const data = req.body
    const user = this.service.create(data)
    res.json(user)
  }

  updateUser(req, res): void {
    const data = req.body
    const { id } = req.params
    const user = this.service.update(id, data)

    if(user) res.json(user)
    else{
      res.status(404)
      res.json({ error: 'user not found'})
    }
  }

  deleteUser(req, res): void {
    const { id } = req.params
    const user = this.service.delete(id)

    if(user) res.json({
      message: 'User deleted successfully'
    })
    else{
      res.status(404)
      res.json({ error: 'user not found'})
    }
  }
}

export default UserController