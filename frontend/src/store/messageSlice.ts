import {Message} from "../types";
import {createSlice} from "@reduxjs/toolkit";
import {fetchMessage, sendMessage, sendMessageById} from "./messageThunk";

interface MessageState {
    messages: Message[];
    fetchLoading: boolean;
    createLoading:boolean;
    sendLoading: boolean;
}

const initialState:MessageState = {
    messages: [],
    fetchLoading: false,
    createLoading: false,
    sendLoading: false
}

export const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchMessage.pending, (state) => {
            state.fetchLoading = true;
        }).addCase(fetchMessage.fulfilled, (state,{payload: message}) => {
            state.fetchLoading = false;
            state.messages = message;
        }).addCase(fetchMessage.rejected, (state) => {
            state.fetchLoading = false;
        });

        builder.addCase(sendMessage.pending, (state) => {
            state.createLoading = true;
        }).addCase(sendMessage.fulfilled, (state) => {
            state.createLoading = false;
        }).addCase(sendMessage.rejected, (state) => {
            state.createLoading = false;
        });

        builder.addCase(sendMessageById.pending,(state) => {
            state.sendLoading = true
        }).addCase(sendMessageById.fulfilled,(state) => {
            state.sendLoading = false
        }).addCase(sendMessageById.rejected,(state) => {
            state.sendLoading = false
        })
    }
});

export const messageReducer = messageSlice.reducer