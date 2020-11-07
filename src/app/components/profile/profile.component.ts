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
  profile:any[];
  repos: any[];
  username:string;

  constructor(private profileService : ProfileService) {
   }
 
  ngOnInit(): void {
  }

}
