import {useAppDispatch} from "../../app/hooks";
import {useNavigate} from "react-router-dom";
import {MessageMutation} from "../../types";
import {sendMessage} from "../../store/messageThunk";
import {Container, Typography} from "@mui/material";
import SendMessage from "./SendMessage";

const NewMessage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const onFormSubmit =  async (messageMutation:MessageMutation) => {
        await dispatch(sendMessage(messageMutation));
        navigate('/')
    }

    return (
        <>
            <Container maxWidth='md'>
                <Typography variant='h4'>Send message</Typography>
                <SendMessage onSubmit={onFormSubmit}/>
            </Container>
        </>
    );
};

export default NewMessage;