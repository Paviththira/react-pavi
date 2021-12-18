import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { Budget } from '../Budget';
import SwipeableTextMobileStepper from '../slider/Slider';
import FadeIn from 'react-fade-in';
import Divider from '@mui/material/Divider';

import './footer.css'

const Footer = () => (
    <>
        <Box
            component="main" className='footer-main'
            sx={{
                flexGrow: 1,
                py: 8,
            }}
        >
            <Container maxWidth={false}>
                <Grid
                    container
                    spacing={3}
                >
                    <Grid item lg={3} sm={6} xl={3} xs={12} className='text-align-center'>
                        details
                    </Grid>
                    <Grid item lg={3} sm={6} xl={3} xs={12} className='text-align-center'>
                        details
                    </Grid>
                    <Grid item lg={3} sm={6} xl={3} xs={12} className='text-align-center'>
                        details
                    </Grid>

                    <Grid item lg={3} sm={6} xl={3} xs={12} className='text-align-center'>
                        details
                    </Grid>
                </Grid>
                <Divider variant="inset"/>
            </Container>
        </Box>
    </>
);

export default Footer;