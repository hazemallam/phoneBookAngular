import { Component, OnInit } from '@angular/core';
import {ApiService} from './../api.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
myData:any=[]
  constructor(private apiService: ApiService, private route: ActivatedRoute) { }
  // getMyData(): void{
  //   console.log(this.route.snapshot.params)
  //   const name: string = this.route.snapshot.params.name;
  //   this.apiService.getSingleUserByName(name).subscribe(
  //     data =>(this.myData = data)
  //   );
  // }

  ngOnInit() {
  }
  formSubmit(name){
    // console.log(this.route.snapshot.params)
    // name = this.route.snapshot.params.name;
    console.log(name)
    this.apiService.getSingleUserByName(name).subscribe(
      data =>(this.myData = data)
    );
    // console.log(this.myData)
  }


}
