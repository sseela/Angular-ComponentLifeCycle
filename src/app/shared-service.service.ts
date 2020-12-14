import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
  
})
export class SharedServiceService {

  private behaviorSubject = new BehaviorSubject<number>(0);
  obsBS = this.behaviorSubject.asObservable();

 
  constructor() { 
    //this.obsBS.subscribe(val=> console.log(val));       1234567
    //setTimeout(()=>{this.obsBS.subscribe(val=>console.log("after 3 seconds "+val))},3000);     7
    this.behaviorSubject.next(1);
    this.behaviorSubject.next(2); 
    this.behaviorSubject.next(3);
    this.behaviorSubject.next(4);
    this.behaviorSubject.next(5);
    this.behaviorSubject.next(6);
    //this.obsBS.subscribe(val => console.log(val));      6,7
    this.behaviorSubject.next(7);
    //setTimeout(()=>{this.obsBS.subscribe(val=>console.log("after 3 seconds "+val))},3000);     7
  }
}