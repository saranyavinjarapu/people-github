import { Component, Input , OnInit } from '@angular/core';
import {ProfileService} from '../../services/profile.service';

@Component({
  selector: 'pg-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() contributorProfile:any;
  @Input() contributorRepos:any;
  @Input() reposContributors:any;
 

  constructor(private profileService : ProfileService) {
   }

   findReposContributors(repoNameQuery){
    console.log('input',repoNameQuery);

    this.profileService.updateProfile(repoNameQuery);
    this.profileService.getReposContributors().subscribe(repoContrib => {  	
      this.reposContributors = repoContrib;
      console.log('ooo',this.reposContributors);      
    }); 
   
      
  }
 
  ngOnInit(): void {
  }

}
