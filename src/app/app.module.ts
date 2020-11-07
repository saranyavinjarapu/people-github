import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ContributorsListComponent } from './components/contributors-list/contributors-list.component';
import { ContributorsListService } from './services/contributors-list.service';
import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    ContributorsListComponent,
    ProfileComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ContributorsListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
