import { Component, OnInit } from '@angular/core';
import {Student} from './../Student';
import {User} from './../UserModel';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  
  articles:User[];
  
  name= ""

  constructor(private apiService: ApiService) { }
  getMyData():void{
    this.apiService.getData().subscribe((data)=>{
      // console.log(data);
      this.articles = data;
      console.log(this.articles)
    });
  }

  ngOnInit() {
    this.getMyData()
    
  }

  onKey(event: any) {
    this.getMyData();
    console.log(this.getMyData())
    this.name = event.target.value;
    if(this.name!=""){
      this.articles = this.articles.filter(single=>{
        return single.name.includes(this.name)
      })
    }
    }
  

}
