import {useAppDispatch} from "../../app/hooks";
import {useNavigate, useParams} from "react-router-dom";
import {MessageMutation} from "../../types";
import {sendMessage, sendMessageById} from "../../store/messageThunk";
import {Container, Typography} from "@mui/material";
import SendMessageForm from "./SendMessageForm";

const NewMessage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {id} = useParams();

    const onFormSubmit =  async (messageMutation:MessageMutation) => {
        await dispatch(sendMessage(messageMutation));
        navigate('/');
    }

    const onSubmit = async (messageMutation:MessageMutation) => {
        await dispatch(sendMessageById({...messageMutation, message_id: id }));
        navigate('/');
    }

    console.log(id);

    return (
        <>
            <Container maxWidth='md'>
                <Typography variant='h4'>{id ? 'Answer message' : 'Send message'}</Typography>
                <SendMessageForm onSubmit={id ? onSubmit : onFormSubmit}/>
            </Container>
        </>
    );
};

export default NewMessage;