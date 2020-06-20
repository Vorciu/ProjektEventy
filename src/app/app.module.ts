import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { headerComponent } from './header/app.headerComponent';
import { navComponent } from './nav/app.navComponent';
import { contentAreaComponent } from './contentArea/app.contentAreaComponent';
import { footerComponent } from './footer/app.footerComponent';
import { eventyComponent } from './eventy/app.eventyComponent';
import { kontoComponent } from './konto/app.kontoComponent';
import { kontaktComponent } from './kontakt/app.kontaktComponent';

import { MatButtonModule} from '@angular/material/Button';
import { MatCardModule } from '@angular/material/Card';
import { MatMenuModule } from '@angular/material/Menu';
import { MatToolbarModule } from '@angular/material/Toolbar';
import { MatIconModule } from '@angular/material/Icon';
import { MatFormFieldModule } from '@angular/material/form-field';

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
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,

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
