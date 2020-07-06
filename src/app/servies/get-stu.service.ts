import { Injectable, OnInit } from '@angular/core';
import { Students } from '../scool/students';
import { GetHttpService } from './get-http.service';

@Injectable({
  providedIn: 'root'
})
export class GetStuService  {


  arryZer =[]
  arrayStudents:Students[][]=[]
  
  
  constructor(public srv:GetHttpService) {
    this.srv.getHttpRespons('https://raw.githubusercontent.com/shlomoYosefi/ajax/master/src/app/ajax.json').subscribe(data =>{
      this.arryZer.push(data)
   })}


    
  }
    
 
