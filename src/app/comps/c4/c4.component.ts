import { Component, OnInit, Input } from '@angular/core';
import { Students } from 'src/app/scool/students';
import { GetStuService } from 'src/app/servies/get-stu.service';

@Component({
  selector: 'app-c4',
  templateUrl: './c4.component.html',
  styleUrls: ['./c4.component.css']
})
export class C4Component implements OnInit {


  
  array=[1,2,3,4,5,6,7,8,9,10]

  constructor(public data:GetStuService) {
    

   }

  ngOnInit(): void {
    setTimeout(()=>{
      console.log(this.data.arryZer);
    },4000)
  }

}
