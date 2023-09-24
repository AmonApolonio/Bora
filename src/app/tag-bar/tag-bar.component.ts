import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/services/activity/activity.service';


@Component({
  selector: 'app-tag-bar',
  templateUrl: './tag-bar.component.html',
  styleUrls: ['./tag-bar.component.scss']
})
export class TagBarComponent implements OnInit {

  tags:string[] = [
    "ORM",
    "JAS",
    "Esporte",
    "Bailes",
    "Rolês",
    "Jogos",
    "Ar livre",
    "Todas as Tags",
  ];

  constructor(
    private activityService: ActivityService,
  ) { }

  ngOnInit() {
  }

}