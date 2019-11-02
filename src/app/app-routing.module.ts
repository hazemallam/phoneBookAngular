import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import {AdduserComponent} from './adduser/adduser.component';
import {SearchUserComponent} from './search-user/search-user.component';
const routes: Routes = [
  {path:'contacts', component: CardComponent},
  {path:'adduser', component:AdduserComponent},
  {path:'search', component:SearchUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
