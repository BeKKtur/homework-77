export interface Message {
    id:string;
    author: string;
    message: string;
    image: string;
}

export interface MessageMutation {
    author: string;
    message: string;
    image: string;
}