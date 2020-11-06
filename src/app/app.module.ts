import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileService } from './services/profile.service';

import { FormsModule } from '@angular/forms';
import { ContributorsListComponent } from './components/contributors-list/contributors-list.component';
import { ContributorsListService } from './services/contributors-list.service';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ContributorsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProfileService,ContributorsListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
