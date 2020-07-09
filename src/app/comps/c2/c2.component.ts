import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Students } from 'src/app/scool/students';
import { GetStuService } from 'src/app/servies/get-stu.service';
import { FormControl,FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {


  spanFirstName
  spanlastName
  spanTz
  spanPhone
  spanPassword
  spanEmail

  constructor(private srv:GetStuService,private fb:FormBuilder) { }

  
   


  personFormG = this.fb.group({
    firstName: ['',[Validators.required,Validators.pattern("^[a-zA-Zא-ת]+$")]],
    lastName: ['',[Validators.required,Validators.pattern("^[a-zA-Zא-ת]+$")]],
    tZ:['',[Validators.required,/*Validators.min(9),Validators.max(9),*/Validators.pattern("^[0-9]*$")]],
    phone:['',[Validators.required,/*Validators.min(9),Validators.max(10),*/Validators.pattern("^[0-9]*$")]],
    password:['',[Validators.required/*Validators.min(7),Validators.pattern("/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{7,15}$/"),*/]],
    email:['',[Validators.required]]
   
  })


  
  student:Students=new Students()
  students:Students[]=[]

  
  ngOnInit(): void {

  this.spanFirstName = document.getElementById('spanFirstName')
  this.spanlastName= document.getElementById('spanlastName')
  this.spanTz= document.getElementById('spanTz')
  this.spanPhone= document.getElementById('spanPhone')
  this.spanPassword= document.getElementById('spanPassword')
  this.spanEmail= document.getElementById('spanEmail')


  }



  sentStu(firstName,lastName,tZ,phone,password){

    console.log(firstName.value);
    this.student.firstName=firstName.value
    this.student.lastName =lastName.value
    this.student.tZ=tZ.value
    this.student.phone=phone.value
    this.student.password=password.value

    this.students.push(this.student)

    // this.srv.arrayStudents.push(this.students)
    // this.student = new Students()
    // console.log(this.srv.arrayStudents);
  
  }





  radio(x){
   this.student.men = x
  }




  date(x){
    this.student.datePicker=`${x.value.getDate()}/${x.value.getMonth()+1}/${x.value.getFullYear()}`;
  }







  logim(){
    

    this.spanFirstName.innerHTML =''
    this.spanlastName.innerHTML = ''
    this.spanPhone.innerHTML = ''
    this.spanPassword.innerHTML = ''
    this.spanEmail.innerHTML = ''
    this.spanTz.innerHTML = ''


    let errorFirst = this.personFormG.controls.firstName.errors
    let errorLast = this.personFormG.controls.lastName.errors    
    let errorTz = this.personFormG.controls.tZ.errors
    let errorPhone = this.personFormG.controls.phone.errors
    let errorPassword = this.personFormG.controls.password.errors
    let errorEmail = this.personFormG.controls.email.errors


    

    for (let i in errorFirst){
      console.log(i);
      
      
      
      
       if(i == 'required'){
        this.spanFirstName.innerHTML = 'שדה זה הינו חובה'
      } 
      else{
        this.spanFirstName.innerHTML = 'שם פרטי חייב להכיל אותיות בלבד'
      } 
    }


    for (let i in errorLast){
      if(i == 'required'){
        this.spanlastName.innerHTML = 'שדה זה הינו חובה'
      } 
      else{
        this.spanlastName.innerHTML = 'שם פרטי חייב להכיל אותיות בלבד'
      }
  }


  for (let i in errorTz){
    if(i == 'required'){
      this.spanTz.innerHTML = 'שדה זה הינו חובה'
    } 
    else if(i == 'pattern'){
      this.spanTz.innerHTML = 'חייב להכיל ספרות בלבד'
    }
    else {
      this.spanTz.innerHTML = 'חייב להכיל 9 ספרות'
    }
}


for (let i in errorPhone){
  if(i == 'required'){
    this.spanPhone.innerHTML = 'שדה זה הינו חובה'
  } 
  else if(i == 'pattern'){
    this.spanPhone.innerHTML = 'חייב להכיל ספרות בלבד'
  }
  else {
    this.spanPhone.innerHTML = 'חייב להכיל או 9 או 10  ספרות'
  }
}


for (let i in errorPassword){
  if(i == 'required'){
    this.spanPassword.innerHTML = 'שדה זה הינו חובה'
  } 
  else if(i == 'pattern'){
    this.spanPassword.innerHTML = 'חייב להכיל אות גדולה אות קטנה ומספר'
  }
  else {
    this.spanPassword.innerHTML = 'חייב להכיל לפחות 7 תווים'
  }
}

for (let i in errorEmail){
  if(i == 'required'){
    this.spanEmail.innerHTML = 'שדה זה הינו חובה'
  }
}
  }


  perfect(){
    if(this.personFormG.valid){
      return ''
    }
  }


}
