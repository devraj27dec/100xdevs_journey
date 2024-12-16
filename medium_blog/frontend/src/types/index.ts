export interface Blog {
    id: string;
    title: string;
    Content: string;
    author:{
        name:string
    }
    published: boolean;
    createdAt: string;
    updatedAt: string;
}
 
export interface User {
    id:string;
    email:string;
    name:string;
    password:string
    posts: Blog[]
}


