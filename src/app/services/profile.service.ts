import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mergeMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private reponame:string;
  private clientid = '8a9709f56e2813755f06';
  private clientsecret = 'e8aeba65c646e879950c11f1e715aeae27107287';

  constructor(private httpClient: HttpClient) {
    
   }

   updateProfile(reponame:string){
  	this.reponame = reponame;
  }

   getReposContributors() {   

    let repoContributorURL = "https://api.github.com/repos/"+ this.reponame +"/contributors?client_id=8a9709f56e2813755f06&client_secret=e8aeba65c646e879950c11f1e715aeae27107287";
    return this.httpClient.get<any>(repoContributorURL).pipe(map(resp=>resp));
  }
}
