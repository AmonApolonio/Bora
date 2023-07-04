export class Activity{
    id!: number;
    name!:string;
    imageUrl!:string;
    place?:string;
    tags?:string[];
    favorite?:boolean=false;
    //stars:number=0;
}