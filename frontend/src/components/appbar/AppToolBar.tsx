import {AppBar, Toolbar, Typography, Link, Grid, styled, Container} from "@mui/material";
import {Link as NavLink} from "react-router-dom";

const Links = styled(Grid)({
    color: 'inherit',
    display: 'flex',
    gap: 10

})

const AppToolBar = () => {
    return (
        <AppBar position="sticky" sx={{mb: 2}}>
            <Container maxWidth='md'>
                <Toolbar>
                    <Typography component='div'>
                        <Links>
                            <Link to='/' component={NavLink} sx={{color: 'inherit'}}>Home</Link>
                            <Link to='send' component={NavLink} sx={{color: 'inherit'}}>Send message</Link>
                        </Links>
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default AppToolBar;