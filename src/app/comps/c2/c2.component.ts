import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Students } from 'src/app/scool/students';
import { GetStuService } from 'src/app/servies/get-stu.service';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {


  // @Output() sentStudent: EventEmitter<Students> = new EventEmitter<Students>()
  student:Students=new Students()
  students:Students[]=[]

  constructor(private srv:GetStuService) { }

  ngOnInit(): void {
  }

  sentStu(firstName,lastName,tZ,phone,password,pictchur){

    this.student.firstName=firstName.value
    this.student.lastName =lastName.value
    this.student.tZ=tZ.value
    this.student.phone=phone.value
    this.student.password=password.value
    this.student.pictchur=pictchur 

    this.students.push(this.student)

    this.srv.arrayStudents.push(this.students)
    this.student = new Students()
    console.log(this.srv.arrayStudents);
    
    // this.sentStudent.emit(this.student)

  }

  radio(x){
   this.student.men = x
  }

  date(x){
    this.student.datePicker=`${x.value.getDate()}/${x.value.getMonth()+1}/${x.value.getFullYear()}`;
  }

  

  

    
  }


