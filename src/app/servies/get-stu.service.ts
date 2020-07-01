import { Injectable } from '@angular/core';
import { Students } from '../scool/students';

@Injectable({
  providedIn: 'root'
})
export class GetStuService {



  arrayStudents:Students[][]=[]
  
  
  constructor() { }
}
