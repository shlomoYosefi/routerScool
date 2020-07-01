import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { C1Component } from './comps/c1/c1.component';
import { C2Component } from './comps/c2/c2.component';
import { C3Component } from './comps/c3/c3.component';
import { C4Component } from './comps/c4/c4.component';
import { C5Component } from './comps/c5/c5.component';


const routes: Routes = [
  {path:"" , component:C1Component,
    children:[
      {path:"rishum" , component:C2Component},
      {path:"user" , component:C3Component},
      {path:"class1" , component:C4Component},
      {path:"class2" , component:C5Component}
    ]
},
  {path:"**" , component:C1Component}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
