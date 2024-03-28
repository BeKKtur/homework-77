import {Message} from "../types";
import {createSlice} from "@reduxjs/toolkit";
import {fetchMessage, sendMessage} from "./messageThunk";

interface MessageState {
    messages: Message[];
    fetchLoading: boolean;
    createLoading:boolean;
}

const initialState:MessageState = {
    messages: [],
    fetchLoading: false,
    createLoading: false
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
        })
    }
});

export const messageReducer = messageSlice.reducer