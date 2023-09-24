export class Activity{
    id!: number;
    caption!:string;
    media_url!:string;
    place?:string;
    tags?:string[];
    description?:string;
    link?:string;
    location?:string;
    creatorName?:string;
    children?:any[];
    favorite?:boolean=false;
}