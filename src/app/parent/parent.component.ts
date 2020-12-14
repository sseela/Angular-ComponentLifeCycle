import { Component, OnInit, OnChanges, DoCheck, OnDestroy, Input, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, OnChanges, DoCheck, OnDestroy, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked  {

  counter: number = 0;
  constructor(private ss: SharedServiceService){
    console.log("parent constructor");
  }
 
  ngOnChanges(){
    console.log("parent ngOnChanges");
  }

  ngOnInit(){
    console.log("parent ngOnInit");
  }

  ngDoCheck(){
    console.log("parent ngDoCheck");
  }

  ngAfterContentInit(): void {
    console.log("parent ngAfterContentInit");
  }
  ngAfterContentChecked(): void {
    console.log("parent ngAfterContentChecked");
  }
  ngAfterViewInit(): void {
    console.log("parent ngAfterViewInit");
  }
  ngAfterViewChecked(): void {
    console.log("parent ngAfterViewChecked");
  }

  ngOnDestroy(){
    console.log("parent ngOnDestroy");
  }

  onClick(){
    this.counter = this.counter + 1;
  }

}
