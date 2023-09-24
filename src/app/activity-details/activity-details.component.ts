import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivityService } from '../services/activity/activity.service';
import { Activity } from '../shared/models/activity';

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.scss']
})

export class ActivityDetailsComponent implements OnInit{
  
  activity! : Activity;
  activityPhotos!: any[];
  mainPhoto!: string;

  constructor(
    private route:ActivatedRoute,
    private activityService:ActivityService,
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['id'])
        this.activityService.getDetailsInstaActivityById(params['id']).subscribe((res) => {

          this.activity = res;
          this.mainPhoto = res.media_url;
          this.activityPhotos = res.children.data;
          console.log(res);
      })
      })
  }

  
}
