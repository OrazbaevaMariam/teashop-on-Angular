import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})


export class MainComponent implements OnInit {
  private observable: Observable<boolean>;

  constructor() {
   this.observable = new Observable((observer) => {
      setTimeout(() => {
        return observer.next(true);
      }, 10000);
    })
  }

  ngOnInit() {
this.observable.subscribe((param:boolean)=> {
  console.log(param);
})
  }





}
