import { flatten } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API_TOKEN = environment.API_TOKEN

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  apiUrl = 'https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,children{media_url,thumbnail_url}&access_token=IGQVJYdERZARnBNSWp3WVFFVVcyTHRmOUhlUlQwYUoyQWdxTEpGNUduT2RPOWI1WUd0a3F6aHRtbzBxeGhNNGx' + API_TOKEN;
  
  allTags$:Observable<number>[];
 
  constructor(
    private httpClient: HttpClient,
  ) {}


  getAllInstaActivities(){
    return this.httpClient.get<any>(this.apiUrl)
    //Filter only the data array
      .pipe(map(value => value.data
    
    // Get all tags from hashtags in the caption
      .map(value => {
        //in this case getting rid of the #symbol is nescessary to avoid url conflict
        //Also replacing _ symbols with spaces so on Instagram you can type the hashtag
        //like #ar_livre and the site will show "ar livre"
        value.tags = value.caption.match(/#\w+/g).map(v => {
          v = v.replace('#', '');
          v = v[0].toUpperCase() + v.substr(1).toLowerCase();
          v = v.replace('_', ' ');
          return v
        }); 
        // Get filter out all hashtags from the caption
        value.caption = value.caption.split(" ").map(v => {
          if(v.startsWith("#")){
            v = "";
          }
          return v;
        }).join(" ")
        return value
        }
      )
      )
      )
  }

  // Get all tags from the posts and return a list 
  getAllInstaTags(){
    return this.getAllInstaActivities().pipe(map(value => {
      value.allTagsRaw = []
      value.allTags = []
      for(var i=0; i<value.length; i++){
          value.allTagsRaw.push(value[i].tags);
      }

      //Make the array of arrays into just one array and filter repeting tags
      value.allTagsRaw = flatten(value.allTagsRaw)
      for(var i=0; i<value.allTagsRaw.length; i++){
        if (!value.allTags.includes(value.allTagsRaw[i])){
          value.allTags.push(value.allTagsRaw[i]);  
        }
      }
      return value.allTags;
    }));
  }

  
  //Filter all activities by their caption compared to the search term received
  getAllInstaActivitiesBySearchTerm(searchTerm: string){
    return this.getAllInstaActivities().pipe(map(value => value.filter(
           activity => 
            activity.caption
             .toLowerCase()
            .includes(searchTerm.toLowerCase())
       )))
  }

  //Filter all activities by their tags compared to the tag received
  getAllInstaActivitiesByTag(tag: string){
    return tag == "All"
       ? this.getAllInstaActivities() 
       : this.getAllInstaActivities().pipe(map(value => value.filter(
        activity => 
         activity.tags
         .includes(tag)
    )))
  }


//Local Test

//   getAllLocalActivitiesBySearchTerm(searchTerm: string): Activity[]{
//     return this.getAlllocal()
//     .filter(activity => 
//       activity.caption
//         .toLowerCase()
//         .includes(searchTerm.toLowerCase()));
//   }

  
//   getAllLocalActivitiesByTag(tag: string):Activity[]{
    
//     return tag == "All" 
//       ? this.getAlllocal() 
//       : this.getAlllocal().filter(activity => 
//         activity.tags.includes(tag));

//   }

//   getAllTags(activities:Activity[]):string[]{
//     let tags = activities.map(tag => tag.tags);
//     return(flatten(tags));
//   }

//   getAlllocal(): Activity[]{
//     return [
//       {
//         id: 1,
//         caption: 'basquete',
//         media_url:'assets/images/basquete.png',
//         place:'Sococaba',
//         favorite: true,
//         tags: ['Esporte',],
//       },
//       {
//         id: 2,
//         caption: 'bicicleta',
//         media_url:'assets/images/bicicleta.jpg',
//         place:'Sococaba',
//         tags: ['Esporte', 'Teste'],
//       },
//       {
//         id: 3,
//         caption: 'cartas',
//         media_url:'assets/images/cartas.webp',
//         place:'Sococaba',
//         tags: ['Indoors',],
//       },
//       {
//         id: 4,
//         caption: 'cinema',
//         media_url:'assets/images/cinema.jpg',
//         place:'Sococaba',
//         favorite: true,
//         tags: ['Outdoors',],
//       },
//       {
//         id: 5,
//         caption: 'cozinhar',
//         media_url:'assets/images/cozinhar.jpg',
//         place:'Sococaba',
//         favorite: true,
//         tags: ['Indoors',],
//       },
//       {
//         id: 6,
//         caption: 'futebol',
//         media_url:'assets/images/futebol.jpg',
//         place:'Sococaba',
//         tags: ['Esporte',],
//       },
//       {
//         id: 7,
//         caption: 'games',
//         media_url:'assets/images/games.webp',
//         place:'Sococaba',
//         tags: ["Indoors",],
//       },
//       {
//         id: 8,
//         caption: 'tabuleiro',
//         media_url:'assets/images/tabuleiro.webp',
//         place:'Sococaba',
//         tags: ['Indoors',],
//       },
//       {
//         id: 9,
//         caption: 'tenis',
//         media_url:'assets/images/tenis.jpg',
//         place:'Sococaba',
//         favorite: true,
//         tags: ['Esporte',],
//       },
//       {
//         id: 10,
//         caption: 'trilha',
//         media_url:'assets/images/trilha.jpg',
//         place:'Sococaba',
//         tags: ['Outdoors',],
//       },
//       {
//         id: 11,
//         caption: 'volei',
//         media_url:'assets/images/volei.jpg',
//         place:'Sococaba',
//         favorite: true,
//         tags: ['Esporte',],
//       },
//     ]
//   }
}
