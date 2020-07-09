import { Component, OnInit, Input } from '@angular/core';
import { GetStuService } from 'src/app/servies/get-stu.service';

@Component({
  selector: 'app-c4',
  templateUrl: './c4.component.html',
  styleUrls: ['./c4.component.css']
})
export class C4Component implements OnInit {


  
  array=[1,2,3,4,5,6,7,8,9,10]
  arrayZer=[{img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmg3Uoip9WUbkGmIq7SXn7yV-L21mqHnJVSQ&usqp=CAU',price:152,hieder:"זר כלה לבן"},
{img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBDkvUaNZJFYzU4s6r29gvc5kpXyzKyxlszA&usqp=CAU',price:652,hieder:"זר כלה לבנבן"},
{img:'https://lh3.googleusercontent.com/proxy/wtRr7DjOdW1Q2GWC-5WWxO3fKZgqNhfTH0RVorKxTQWnTIDEsDi6PtYbp8aDsm91wZo5EYN2B2YaiPnORCotKOHyM88ojmiB2h3EOG7nQEs',price:150,hieder:"זר כלה צבעוני"},
{img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmg3Uoip9WUbkGmIq7SXn7yV-L21mqHnJVSQ&usqp=CAU',price:111,hieder:"זר כלה קאקר"},
{img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQkFpxh9vthjJfkZxvzC2rrnsCcan2OxpnCZg&usqp=CAU',price:562,hieder:"זר כלה כחול"},
{img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmg3Uoip9WUbkGmIq7SXn7yV-L21mqHnJVSQ&usqp=CAU',price:123,hieder:"זר כלה צהוב"},
{img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBDkvUaNZJFYzU4s6r29gvc5kpXyzKyxlszA&usqp=CAU',price:951,hieder:"זר כלה כתום"},
{img:'https://lh3.googleusercontent.com/proxy/wtRr7DjOdW1Q2GWC-5WWxO3fKZgqNhfTH0RVorKxTQWnTIDEsDi6PtYbp8aDsm91wZo5EYN2B2YaiPnORCotKOHyM88ojmiB2h3EOG7nQEs',price:240,hieder:"זר כלה מרמורק"},
{img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmg3Uoip9WUbkGmIq7SXn7yV-L21mqHnJVSQ&usqp=CAU',price:874,hieder:"זר כלה חום"},
{img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQkFpxh9vthjJfkZxvzC2rrnsCcan2OxpnCZg&usqp=CAU',price:666,hieder:"זר כלה שחור"}

]

  constructor(public data:GetStuService) {
    

   }

  ngOnInit(): void {
   
  }


  getImg(img){
    this.data.imgServ =img
    
  }

}
