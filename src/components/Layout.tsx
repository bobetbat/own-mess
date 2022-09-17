import { Grid } from '@mui/material';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <Grid container sx={{ minHeight: 1 }}>
      <Grid item xs={6} md={8}>
       {children}
      </Grid>
    </Grid>
  );
}
