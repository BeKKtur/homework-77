export interface Message {
    id:string;
    author: string;
    message: string;
    image: string;
    array: []
}

export interface MessageMutation {
    message_id?: string
    author: string;
    message: string;
    image: string;
}