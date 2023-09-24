import { Component } from '@angular/core';
import { ActivityService } from '../services/activity/activity.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-tags-bar',
  templateUrl: './all-tags-bar.component.html',
  styleUrls: ['./all-tags-bar.component.scss']
})
export class AllTagsBarComponent {
  tags$:Observable<any> = new Observable<any>;

  constructor(
    private activityService: ActivityService,
  ) { }

  ngOnInit() {
    this.tags$ = this.activityService.getAllInstaTags();
    // this.tags$.subscribe(value => {
    //   console.log(value)
    // });
  }
}
