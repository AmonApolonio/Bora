import { flatten } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Activity } from 'src/app/shared/models/activity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor() { }

  getAllActivitiesBySearchTerm(searchTerm: string): Activity[]{
    return this.getAll()
    .filter(activity => 
      activity.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()));
  }

  
  getAllActivitiesByTag(tag: string):Activity[]{
    
    return tag == "All" 
      ? this.getAll() 
      : this.getAll().filter(activity => 
        activity.tags.includes(tag));

  }

  getAllTags(activities:Activity[]):string[]{
    let tags = activities.map(tag => tag.tags);
    return(flatten(tags));
  }

  getAll(): Activity[]{
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
