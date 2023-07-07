import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivityService } from '../services/activity/activity.service';

@Component({
  selector: 'app-tag-bar',
  templateUrl: './tag-bar.component.html',
  styleUrls: ['./tag-bar.component.css']
})
export class TagBarComponent implements OnInit {

  tags$:Observable<any>;

  constructor(
    private activityService:ActivityService,
  ) { }

  ngOnInit() {
    this.tags$ = this.activityService.getAllInstaTags();
    // this.tags$.subscribe(value => {
    //   console.log(value)
    // });
  }

}
