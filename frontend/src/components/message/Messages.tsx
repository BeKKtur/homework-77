import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {useEffect} from "react";
import {fetchMessage} from "../../store/messageThunk";
import {Button, Card, CardContent, Container, Grid, Link, Typography} from "@mui/material";
import {Link as NavLink} from "react-router-dom";

const Messages = () => {

    const messages = useAppSelector(state => state.message.messages);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchMessage())
    }, [dispatch]);

    console.log(messages)


    return (
        <Container maxWidth='md'>
            {messages.map(message => (
                <Card key={message.id} sx={{ minWidth: 275, mb: 2}}>
                    <CardContent>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {message.author}
                        </Typography>
                        <Typography variant="body2" sx={{mb: 2}}>
                            {message.message}
                        </Typography>

                        {message.image === '' ? false :
                            <Typography variant="body2" sx={{mb: 2}}>
                                <img src={message.image} alt="photo"/>
                            </Typography>
                        }
                        <Link component={NavLink} to={`/message/${message.id}`}>
                            <Button type="submit" color="primary" variant="contained" sx={{mb: 2}}>answers</Button>
                        </Link>
                        {message.array.map(array => (
                            <Card key={array.id} sx={{ minWidth: 275, mb: 2}}>
                                <CardContent>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        {array.author}
                                    </Typography>
                                    <Typography variant="body2" sx={{mb: 2}}>
                                        {array.message}
                                    </Typography>

                                    {array.image === '' ? false :
                                        <Typography variant="body2" sx={{mb: 2}}>
                                            <img src={array.image} alt="photo"/>
                                        </Typography>
                                    }
                                </CardContent>
                            </Card>
                        ))}
                    </CardContent>
                </Card>
            ))}
        </Container>
    );
};

export default Messages;