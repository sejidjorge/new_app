import './App.css';
import { FormGroup, Input, Button, Container, Typography } from '@mui/material';
import React from 'react';

function App() {

const onSubmit = (e) => {
 const EValues = e.target.value
console.log(EValues);
};

  return (
    <div className="App">
      <Container className='container-input' maxWidth="lg">
        <Typography variant="h4" gutterBottom component="div">
          Login User
        </Typography>
        <form onSubmit={
      onSubmit
        }>
        <FormGroup>
          <Input type='email' name='email' placeholder='mail@mail.com' onSubmit={onSubmit}/>
        </FormGroup>
        <FormGroup>
          <Input type='password' name='password' placeholder='password' onSubmit={onSubmit}/>
        </FormGroup>
        <Button type='submit'>
          <Typography variant="button" display="block" gutterBottom>
          Entrar
          </Typography>
        </Button>
        </form>
      </Container>
    </div>
  );
}

export default App;
