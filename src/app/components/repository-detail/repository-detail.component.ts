import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'pg-repository-detail',
  templateUrl: './repository-detail.component.html',
  styleUrls: ['./repository-detail.component.css']
})
export class RepositoryDetailComponent implements OnInit {

  @Input() reposContributors:any;

  constructor() { }

  ngOnInit(): void {
  }

}
