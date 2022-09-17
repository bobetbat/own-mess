import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { Page } from '../App';
import Header from './Header';
import Menu from './Menu';


type Props = {
  children?: React.ReactNode;
  dialogs: any[];//Dialog[]
};

export const DialogList: React.FC<Props> = ({ dialogs }) => {
  return (
    <Grid item xs={12} md={5} sx={{ background: 'red', height: '100vh' }}>
      <Header pages={[]} />
      <Menu pages={[]} />
      {dialogs.map((d) => {
        return (
          <Container>
            {d.content}
          </Container>
        )
      })}
    </Grid>
  );
}
