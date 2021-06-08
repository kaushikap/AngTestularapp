export interface Post{
    id:number;
    name:string;
    username:number;
    email:number;
    address:{
        street:string,
        suite:string,
        city:string,
        zipcode:string,
        geo:{
            lat:string,
            lng:string,
        }
        
    };
    phone:string;
    website:string;
    company: {
      name:string,
      catchPhrase: string,
      bs:string,
    }
    mobileno:number;
    profession:string;
    profilePic:any;
}

