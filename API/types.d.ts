export interface Message {
    id:string;
    author: string;
    message: string;
    image: string;
    array: Test[]
}

export interface Test {
    author: string;
    message: string;
    image: string;
}

export type MessageWithoutId = Omit<Message, 'id', 'array'>