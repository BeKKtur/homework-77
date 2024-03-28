import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {useEffect} from "react";
import {fetchMessage} from "../../store/messageThunk";
import {Card, CardContent, Container, Typography} from "@mui/material";

const Messages = () => {

    const messages = useAppSelector(state => state.message.messages);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchMessage())
    }, [dispatch]);


    return (
        <Container maxWidth='md'>
            {messages.map(message => (
                <Card key={message.id} sx={{ minWidth: 275, mb: 2}}>
                    <CardContent>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {message.author}
                        </Typography>
                        <Typography variant="body2">
                            {message.message}
                        </Typography>
                        <Typography variant="body2">
                            <img src={message.image} alt="photo"/>
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Container>
    );
};

export default Messages;