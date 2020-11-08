import { Component, OnInit } from '@angular/core';
import {ContributorsListService} from '../../services/contributors-list.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Observable, forkJoin} from 'rxjs';


@Component({
  selector: 'pg-contributors-list',
  templateUrl: './contributors-list.component.html',
  styleUrls: ['./contributors-list.component.css']
})
export class ContributorsListComponent implements OnInit {

  contributorlist:any[];
  contributorProfile:any[];
  contributorRepos: any[];
  reposContributors:any[];
  username:string;

  constructor(private contributorsListService : ContributorsListService) 
  { 
    /* get the list of contributors_url for all the repositories 
    under given organization 'Angular' */    
    this.getContributorsUrl();
  }

  //list of contributors_url for all the repositories
  getContributorsUrl() {
    this.contributorsListService.getContributorUrlList()
      .subscribe((results) => {         
        /*feed the contributors urls retrieved into below method to retrieve 
        final contributors information for each such url returned*/
           this.getContributorsList(results);        
        },
        (err: any) => {
          console.log(err);
        }
      );
  }

  //method to retrieve final contributors information for each contributor url
  getContributorsList(contributor_url_link) {

    let finalContributorsList = [];
    
    //run http requests for all urls and gather final contributor data
    forkJoin(contributor_url_link).subscribe(contributors_data => {       
      
      for(var i=0;i<contributors_data.length;i++)
      {       
        var individual_contributor_array = contributors_data[i];
        if(Array.isArray(individual_contributor_array))
        {
           for(var j=0;j<individual_contributor_array.length;j++){
             if(finalContributorsList.indexOf(individual_contributor_array[j].login) === -1)
             {         
                
              finalContributorsList.push(individual_contributor_array[j].login);
             }
           }
        }       
      }
      this.contributorlist = finalContributorsList;        
    }); 
   }   

    findProfile(searchQuery){
    
    this.contributorsListService.updateProfile(searchQuery);
  	this.contributorsListService.getProfileInfo().subscribe(profile => {  
      this.contributorProfile = profile ;
  	});
  	this.contributorsListService.getProfileRepos().subscribe(repos => {  	
      this.contributorRepos = repos;
      console.log(this.contributorRepos);      
    });    
  }

  

  ngOnInit(): void {
  }

}

