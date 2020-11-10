import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContributorsListComponent } from './components/contributors-list/contributors-list.component';
import { ContributorsListService } from './services/contributors-list.service';
import { ProfileComponent } from './components/profile/profile.component';
import { RepositoryDetailComponent } from './components/repository-detail/repository-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    ContributorsListComponent,
    ProfileComponent,
    RepositoryDetailComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [ContributorsListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
