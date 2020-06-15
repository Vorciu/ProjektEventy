import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { headerComponent } from './header/app.headerComponent';
import { navComponent } from './nav/app.navComponent';
import { contentAreaComponent } from './contentArea/app.contentAreaComponent';
import { footerComponent } from './footer/app.footerComponent';
import { eventyComponent } from './eventy/app.eventyComponent';

@NgModule({
  declarations: [
    AppComponent,
    headerComponent, 
    navComponent, 
    contentAreaComponent, 
    footerComponent,
    eventyComponent,
  ],
  imports: [
    BrowserModule,

    RouterModule.forRoot([

    	{
    	path: 'eventy', 
    	component: eventyComponent
    	},
      
    	{
    	path: '',
    	component: contentAreaComponent
    	},

    ]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
