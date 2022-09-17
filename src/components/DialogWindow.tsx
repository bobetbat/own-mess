import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { Page } from '../App';


type Props = {
  children?: React.ReactNode;
  messages: any[];//Dialog[]
};

export const DialogWindow: React.FC<Props> = ({ messages }) => {
  return (
    <Grid item xs={12} md={7} sx={{ background: 'black' }}>
      {messages.map((d) => {
        return (
          <Container>
            {d.content}
          </Container>
        )
      })}
    </Grid>
  );
}

