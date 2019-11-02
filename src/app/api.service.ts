import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import {User}  from'./UserModel';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

    public getData(){
    return this.httpClient.get<User[]>(`http://localhost:3000/api/y`);
  }
  getSinUsers(id){
    return this.httpClient.get<User>('http://localhost:3000/api/y/'+id)
  }
  getSingleUserByName(name){
    return this.httpClient.get<User>('http://localhost:3000/api/y/find-record?name='+name)
  }

  addUser(user: User){
    return this.httpClient.post('http://localhost:3000/api/y',user).subscribe(res=>{})
  }

  deleteUser(id:string){
    return this.httpClient.delete('http://localhost:3000/api/y/'  + id)
  }

  updateUser(id:string, user:any){
    
    return this.httpClient.patch('http://localhost:3000/api/y/'+id,id,user)

  }

}
