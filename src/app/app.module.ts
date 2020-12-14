import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import {RouterModule, Routes} from '@angular/router';
import { OtherComponent } from './other/other.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  { path: 'checkCycles', component: ParentComponent },
  { path: 'other', component: OtherComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    OtherComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
