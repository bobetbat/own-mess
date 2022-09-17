import React from 'react';
import { Container, Box, Dialog } from '@mui/material';

import logo from './logo.svg';
import './App.css';
import { Header } from './components';
import Layout from './components/Layout';
import Menu from './components/Menu';
import { DialogList } from './components/DialogList';
import { DialogWindow } from './components/DialogWindow';

export interface Page {
  title: string;
  content: React.ReactNode
}

const pages:Page[] = [
  {
    title: 'About Product',
    content: 'About',
  },
  {
    title: 'About us',
    content: 'About',
  },
  {
    title: 'Buy here',
    content: 'Product + Payment flow',
  },
  {
    title: 'Contact us',
    content: 'contact form',
  },
]

const App: React.FC = () => {
  return (
    <div className="App" >
      <Layout>
        <DialogList dialogs={[]} />
        <DialogWindow messages={[]} />
      </Layout>
    </div>
  );
}

export default App;
