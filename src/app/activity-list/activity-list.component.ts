import { Component, Input, OnInit } from '@angular/core';
import { Activity } from '../shared/models/activity';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent implements OnInit{
  @Input() activities:Activity[] = [];
  
  constructor(
    private router:Router,
    ) { }


  ngOnInit(): void {}

  viewDetails(activityId:number){
    this.router.navigateByUrl('/details/' + activityId);
  }

}
