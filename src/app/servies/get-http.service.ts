import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetHttpService {

  
  constructor(private http:HttpClient) { }

  getHttpRespons(url:string):any{
      return this.http.get(url)
  }
}
