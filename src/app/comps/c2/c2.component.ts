import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Students } from 'src/app/scool/students';
import { GetStuService } from 'src/app/servies/get-stu.service';
import { FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {

  constructor(private srv:GetStuService) { }


  // personFormG = this.formBild.group({
  //   firstName: ['',Validators.required,Validators.pattern("^[a-zA-Z]+$")],
  //   lastName: ['',Validators.required,Validators.pattern("^[a-zA-Z]+$")],
  //   tZ:['',Validators.required,Validators.min(9),Validators.max(9),Validators.pattern("^[0-9]*$")],
  //   phone:['',Validators.required,Validators.min(9),Validators.max(10),Validators.pattern("^[0-9]*$")],
  //   password:['',Validators.required,Validators.min(7),Validators.max(15),Validators.pattern("/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{7,15}$/")],
  //   emil:['']
   
  // })


  
  student:Students=new Students()
  students:Students[]=[]

  
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
    
    

  }

  radio(x){
   this.student.men = x
  }

  date(x){
    this.student.datePicker=`${x.value.getDate()}/${x.value.getMonth()+1}/${x.value.getFullYear()}`;
  }

  

  

    
  }


