import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],

})


export class MainComponent implements OnInit, OnDestroy {
  private observable: Observable<boolean>;
  popupIsShown: boolean = false;
  private subscription: Subscription | null = null;

  constructor() {
   this.observable = new Observable((observer) => {
      setTimeout(() => {
        return observer.next(true);
      }, 10000);
    })
  }

  ngOnInit() {

 this.subscription = this.observable.subscribe((param:boolean)=> {

 this.popupIsShown = true;
})
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

}
