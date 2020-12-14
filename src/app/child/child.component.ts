import { Component, OnInit, OnChanges, DoCheck, OnDestroy, Input, SimpleChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, OnDestroy, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  
  @Input() count: number;
  constructor(){
    console.log("child constructor");
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
    for(let propertyName in changes){
      let change = changes[propertyName];
      let current = change.currentValue;
      let previous = change.previousValue;
    }
    console.log("child ngOnChanges");
  }

  ngOnInit(){
    console.log("child ngOnInit");
  }

  ngDoCheck(){
    console.log("child ngDoCheck");
  }

  ngAfterContentInit(): void {
    console.log("child ngAfterContentInit");
  }
  ngAfterContentChecked(): void {
    console.log("child ngAfterContentChecked");
  }
  ngAfterViewInit(): void {
    console.log("child ngAfterViewInit");
  }
  ngAfterViewChecked(): void {
    console.log("child ngAfterViewChecked");
  }

  ngOnDestroy(){
    console.log("child ngOnDestroy");
  }

  
  
}
