import { flatten } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Activity } from 'src/app/shared/models/activity';
import { HttpClient } from '@angular/common/http'
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  instaActivities:Activity[] = [];

  constructor(
    private httpClient: HttpClient,
  ) {
    //const API_URL = 'https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink,children{media_url,thumbnail_url}&access_token=IGQVJXSk0tTDduVVlBaHlSNE1JQnZAYY2NpeFgwMTc1ak9qTm5BS0s2ZAE8tTlh1Q1FTZAGQ2RWtnZAHhpVDYtTnpyY2FtN01rcENGcEN1X3ZAibDVqZAy1Xd1ZAjMWpvekJZATFNicWk2VFpwbFN6SUUzNHJOQQZDZD';
    const API_URL = 'https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,children{media_url,thumbnail_url}&access_token=IGQVJXSk0tTDduVVlBaHlSNE1JQnZAYY2NpeFgwMTc1ak9qTm5BS0s2ZAE8tTlh1Q1FTZAGQ2RWtnZAHhpVDYtTnpyY2FtN01rcENGcEN1X3ZAibDVqZAy1Xd1ZAjMWpvekJZATFNicWk2VFpwbFN6SUUzNHJOQQZDZD';
    this.httpClient.get<any>(API_URL).pipe(
      map(value => value.data)
    ).subscribe((results: any) => {
        results.map((result) => {
          const activity: Activity = {
            id: result.id,
            name: result.caption,
            imageUrl: result.media_url,
          };
          this.instaActivities[result.id] = activity;
        });
      });
      //console.log(this.instaActivities);
  }

    

  getAllActivitiesBySearchTerm(searchTerm: string): Activity[]{
    return this.getAlllocal()
    .filter(activity => 
      activity.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()));
  }

  
  getAllActivitiesByTag(tag: string):Activity[]{
    
    return tag == "All" 
      ? this.getAlllocal() 
      : this.getAlllocal().filter(activity => 
        activity.tags.includes(tag));

  }

  getAllTags(activities:Activity[]):string[]{
    let tags = activities.map(tag => tag.tags);
    return(flatten(tags));
  }

  getAllInstaActivities(): Activity[]{
    return this.instaActivities;
  }

  getAlllocal(): Activity[]{
    return [
      {
        id: 1,
        name: 'basquete',
        imageUrl:'assets/images/basquete.png',
        place:'Sococaba',
        favorite: true,
        tags: ['Esporte',],
      },
      {
        id: 2,
        name: 'bicicleta',
        imageUrl:'assets/images/bicicleta.jpg',
        place:'Sococaba',
        tags: ['Esporte', 'Teste'],
      },
      {
        id: 3,
        name: 'cartas',
        imageUrl:'assets/images/cartas.webp',
        place:'Sococaba',
        tags: ['Indoors',],
      },
      {
        id: 4,
        name: 'cinema',
        imageUrl:'assets/images/cinema.jpg',
        place:'Sococaba',
        favorite: true,
        tags: ['Outdoors',],
      },
      {
        id: 5,
        name: 'cozinhar',
        imageUrl:'assets/images/cozinhar.jpg',
        place:'Sococaba',
        favorite: true,
        tags: ['Indoors',],
      },
      {
        id: 6,
        name: 'futebol',
        imageUrl:'assets/images/futebol.jpg',
        place:'Sococaba',
        tags: ['Esporte',],
      },
      {
        id: 7,
        name: 'games',
        imageUrl:'assets/images/games.webp',
        place:'Sococaba',
        tags: ["Indoors",],
      },
      {
        id: 8,
        name: 'tabuleiro',
        imageUrl:'assets/images/tabuleiro.webp',
        place:'Sococaba',
        tags: ['Indoors',],
      },
      {
        id: 9,
        name: 'tenis',
        imageUrl:'assets/images/tenis.jpg',
        place:'Sococaba',
        favorite: true,
        tags: ['Esporte',],
      },
      {
        id: 10,
        name: 'trilha',
        imageUrl:'assets/images/trilha.jpg',
        place:'Sococaba',
        tags: ['Outdoors',],
      },
      {
        id: 11,
        name: 'volei',
        imageUrl:'assets/images/volei.jpg',
        place:'Sococaba',
        favorite: true,
        tags: ['Esporte',],
      },
    ]
  }
}
