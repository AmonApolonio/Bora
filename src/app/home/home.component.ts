import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../services/activity/activity.service';
import { Activity } from '../shared/models/activity';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DeviceDetectorService } from 'ngx-device-detector';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  activities:Activity[] = [];
  activities$:Observable<Activity[]> = new Observable<Activity[]>;
  tags$:Observable<any> = new Observable<any>;
  isMobile = this.deviceService.isMobile();

  constructor(
    private activityService:ActivityService,
    private route:ActivatedRoute,
    private deviceService: DeviceDetectorService
  ) { }

  ngOnInit(): void {
    
    this.route.params.subscribe(params => {
       //this.activities$.subscribe(value => console.log(value));
       //to check the value in comming from the Activity Service
      if(params['searchTerm'])
        this.activities$ = this.activityService.getAllInstaActivitiesBySearchTerm(params['searchTerm']);
      else if(params['tag']){
        this.activities$ = this.activityService.getAllInstaActivitiesByTag(params['tag']);
      }
      else 
        this.activities$ = this.activityService.getAllInstaActivities();
    })
    
  }

}