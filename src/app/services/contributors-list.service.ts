import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mergeMap, map } from 'rxjs/operators';
import {Observable, forkJoin} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContributorsListService {

  private username:string;
  public repoName;
  private clientid = '8a9709f56e2813755f06';
  private clientsecret = 'e8aeba65c646e879950c11f1e715aeae27107287';
  private repo_url_list = "https://api.github.com/orgs/Angular/repos?per_page=200&type=all";

  constructor(private httpClient: HttpClient) { }

  getContributorUrlList() {  
    let contributors_url = [];

  return this.httpClient.get<any>(this.repo_url_list+"?client_id="+this.clientid+"&client_secret="+this.clientsecret)
  .pipe(map(resp => { for(var key in resp) {
                          if (resp.hasOwnProperty(key))
                            {     
                              let url_link = this.httpClient.get(resp[key].contributors_url+"?client_id="+this.clientid+"&client_secret="+this.clientsecret);
                              contributors_url.push(url_link);
                            }      
                   }  
           return contributors_url
        }));   
  } 

  updateProfile(username:string){
  	this.username = username;
  }

  getProfileInfo(){
    let profileDataURL = "https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret
    return this.httpClient.get<any>(profileDataURL).pipe(map(resp=>resp));
  }

  getProfileRepos() {
    let repoDataURL = "https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret;
    return this.httpClient.get<any>(repoDataURL).pipe(map(resp=>resp));
  }

  

}
