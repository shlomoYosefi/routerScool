import { Component, OnInit } from '@angular/core';
import { GetStuService } from 'src/app/servies/get-stu.service';

@Component({
  selector: 'app-c5',
  templateUrl: './c5.component.html',
  styleUrls: ['./c5.component.css']
})
export class C5Component implements OnInit {

  constructor(public srv:GetStuService) { }

  ngOnInit(): void {
  }

}
