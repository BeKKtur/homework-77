import React, { useState } from 'react';
import {Button, Container, Grid, TextField} from '@mui/material';
import {MessageMutation} from "../../types";


interface Props {
    onSubmit: (mutation:MessageMutation) => void
}
const SendMessage:React.FC<Props> = ({onSubmit}) => {
    const [state, setState] = useState<MessageMutation>({
        author: '',
        message: '',
        image: ''
    });

    const submitFormHandler = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(state)
    };

    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setState(prevState => {
            return {...prevState, [name]: value};
        });
    };

    return (
        <Container maxWidth='md'>
            <form
                autoComplete="off"
                onSubmit={submitFormHandler}
            >
                <Grid container direction="column" spacing={2}>
                    <Grid item xs>
                        <TextField
                            id="author" label="Author"
                            value={state.author}
                            onChange={inputChangeHandler}
                            name="author"
                        />
                    </Grid>
                    <Grid item xs>
                        <TextField
                            id="message" label="Message"
                            value={state.message}
                            onChange={inputChangeHandler}
                            name="message"
                        />
                    </Grid>
                    {/*<Grid item xs>*/}
                    {/*    <TextField*/}
                    {/*        multiline rows={3}*/}
                    {/*        id="description" label="Description"*/}
                    {/*        value={state.image}*/}
                    {/*        onChange={inputChangeHandler}*/}
                    {/*        name="description"*/}
                    {/*    />*/}
                    {/*</Grid>*/}
                    <Grid item xs>
                        <Button type="submit" color="primary" variant="contained">Create</Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};
export default SendMessage;