import { Component, OnInit, Input } from '@angular/core';
import { GetStuService } from 'src/app/servies/get-stu.service';

@Component({
  selector: 'app-c5',
  templateUrl: './c5.component.html',
  styleUrls: ['./c5.component.css']
})
export class C5Component implements OnInit {


   myImg

  constructor(public srv:GetStuService) { }

  ngOnInit(): void {
    this.myImg = this.srv.imgServ
  }

}
