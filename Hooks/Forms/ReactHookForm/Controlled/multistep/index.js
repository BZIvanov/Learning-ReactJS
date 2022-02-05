import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StepperForm from './components/StepperForm';
import reportWebVitals from './reportWebVitals';
import { CssBaseline, Container, Paper, Box } from '@material-ui/core';

ReactDOM.render(
  <>
    <CssBaseline />
    <Container component={Box} p={4}>
      <Paper component={Box} p={3}>
        <StepperForm />
      </Paper>
    </Container>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
