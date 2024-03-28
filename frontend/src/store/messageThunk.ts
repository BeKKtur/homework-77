import {createAsyncThunk} from "@reduxjs/toolkit";
import {Message, MessageMutation} from "../types";
import axiosApi from "../axiosApi";

export const fetchMessage = createAsyncThunk<Message[]>(
    'message/fetchMessage',
    async () => {
        const response = await axiosApi.get<Message[]>('/message');
        return response.data
    }
);

export const sendMessage = createAsyncThunk<void, MessageMutation>(
    'message/sendMessage',
    (messageMutation,) => {
        const serialized = {
            ...messageMutation,
        }

        return axiosApi.post('/message', serialized);
    });

export const sendMessageById = createAsyncThunk<string, MessageMutation>(
    'message/sendMessageById',
    (messageMutation) => {
        const {message_id, ...data} = messageMutation
        return axiosApi.post(`/message/${message_id}`, data);
    });