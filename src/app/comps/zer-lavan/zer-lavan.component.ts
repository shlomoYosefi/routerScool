import { Component, OnInit } from '@angular/core';
import { GetStuService } from 'src/app/servies/get-stu.service';

@Component({
  selector: 'app-zer-lavan',
  templateUrl: './zer-lavan.component.html',
  styleUrls: ['./zer-lavan.component.css']
})
export class ZerLavanComponent implements OnInit {

  arrData =[]

  constructor(public srv :GetStuService) { }

  ngOnInit(): void {
    setTimeout(()=>{
      for (let i of this.srv.arryZer){
          console.log(i);  
      }
    },4000)
    
  }

}
