import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app', //está na page index.html
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Tämnî Sïllva' ; //+ VERSION.major
  nascimento = 1985;
  counter =  0;
  timer = setInterval(() =>{
    this.counter = this.counter + 1;
  },100);

  getIdade(){
    return 2022 - this.nascimento;
  }
  getMinutos(){
    return Math.trunc(this.counter/60);
  }

  getSegundos(){
    return Math.trunc(this.counter%60);
  }
}
