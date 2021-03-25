import React, { useContext, useEffect, useState } from 'react'
import { Button, Form, Header, Segment } from 'semantic-ui-react';
import { AuthContext } from '../providers/AuthProvider'
import { useFormInput } from './useFormInputHook';


const Register = ( {history} ) => {
  const { handleRegister, authLoading, authErrors, setAuthErrors } = useContext(AuthContext);
  const email = useFormInput("", "Email");
  const password = useFormInput("", "Password");
  const passwordConfirmation = useFormInput("", "Password Confirmation");

  useEffect(() =>{
    setAuthErrors([]);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(password.value === passwordConfirmation.value)
      handleRegister({
        email: email.value,
        password: password.value,
        passwordConfirmation: passwordConfirmation.value,
      },
      history
      );
      else alert("Passwords Don't Match!!!");
  };

  return (
    <Segment basic>
      <Header as="h1" textAlign="center">
        Register
      </Header>
      {authErrors && authErrors.map((err) => <p>{err}</p>)}
      <Form onSubmit={handleSubmit}>
        <Form.Input autoFocus {...email} />
        <Form.Input type="password" {...password} />
        <Form.Input type="password" {...passwordConfirmation} />
        <Segment textAlign="center" basic>
          <Button 
          loading={authLoading}
          disabled={authLoading}
          primary
          type="submit"
          >
            Submit
          </Button>
        </Segment>
      </Form>
    </Segment>
  );
};

export default Register;
