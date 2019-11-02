import { Component, OnInit } from '@angular/core';
import {ApiService} from './../api.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }
  formSubmit(obj){
    this.apiService.addUser(obj)
  }
}
