import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
//import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
//import { NewsApiService } from './news-api.service';


//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/*import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/Sidenav';
import { MatListModule } from '@angular/material/List';
import { MatProgressSpinnerModule } from '@angular/material/Progress-spinner';
import { MatFormField } from '@angular/material/form-field';*/




import { AppComponent } from './app.component';
import { headerComponent } from './header/app.headerComponent';
import { navComponent } from './nav/app.navComponent';
import { contentAreaComponent } from './contentArea/app.contentAreaComponent';
import { footerComponent } from './footer/app.footerComponent';
import { eventyComponent } from './eventy/app.eventyComponent';
import { kontoComponent } from './konto/app.kontoComponent';
import { kontaktComponent } from './kontakt/app.kontaktComponent';

@NgModule({
  declarations: [
    AppComponent,
    headerComponent, 
    navComponent, 
    contentAreaComponent, 
    footerComponent,
    eventyComponent,
    kontoComponent,
    kontaktComponent,
  ],
  imports: [
    BrowserModule,
    //BrowserAnimationsModule,
    HttpClientModule,
    /*MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatFormField,*/

    RouterModule.forRoot([

    	{
    	path: 'eventy', 
    	component: eventyComponent
    	},

      {
      path: 'konto', 
      component: kontoComponent
      },

      {
      path: 'kontakt', 
      component: kontaktComponent
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
