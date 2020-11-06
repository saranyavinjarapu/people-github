import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mergeMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
  private clientid = '8a9709f56e2813755f06';
  private clientsecret = 'e8aeba65c646e879950c11f1e715aeae27107287';

  constructor(private httpClient: HttpClient) {
    console.log("service is now ready!");
  	this.username = 'SaranyaVinjarapu';
   }

   getProfileInfo():Observable<any>{
  	return this.httpClient.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
  	.pipe(map(res => res));
  }

  getProfileRepos():Observable<any>{
  	return this.httpClient.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
  	.pipe(map(res => res));
  }

  updateProfile(username:string){
  	this.username = username;
  }
}
