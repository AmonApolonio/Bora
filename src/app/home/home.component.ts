import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../services/activity/activity.service';
import { Activity } from '../shared/models/activity';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  activities:Activity[] = [];
  instaActivities:Activity[] = [];

  tags:string[] =[];
  constructor(
    private activityService:ActivityService,
    private route:ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.instaActivities = this.activityService.getAllInstaActivities();
      if(params.searchTerm)
        this.activities = this.activityService.getAllActivitiesBySearchTerm(params.searchTerm);
      else if(params.tag){
        this.activities = this.activityService.getAllActivitiesByTag(params.tag);
      }
      else 
        this.activities = this.activityService.getAlllocal();
    })
    this.tags = this.activityService.getAllTags(this.activities);
    console.log(this.activities);
    console.log(this.instaActivities);
  }

}
