import { FC } from 'react';
import {   BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';

const App: FC = () => (
  <Router>
    <Layout/>
  </Router>
);

export default App;