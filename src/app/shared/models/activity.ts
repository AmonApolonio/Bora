export class Activity{
    id!: number;
    caption!:string;
    media_url!:string;
    place?:string;
    tags?:string[];
    favorite?:boolean=false;
    //stars:number=0;
}