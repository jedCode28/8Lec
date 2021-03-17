import React from 'react';
import { useForm} from 'react-hook-form';
import {  Message } from 'semantic-ui-react'; //Button, Form,
import Formy from './FormStyle';
import Button from "./Button" ;

const FormVal = () => {
  const { errors } = useForm();

  const onSubmit = (data) => {
    console.log('data:', data)
  };

  const errorHelp = () => {
    if (errors.passphrase.type === "required"){
      return "Hey, this is required, Dummy!";
    } else if (errors.passphrase.type === "validate"){
      return 'It needs at least 8 characters containing one number and one symbol!';
    } else {
      return "IT FAILED... MISERABLY";
    }
  };

  console.log(errors);

  return(
    <form > {/*warning*/}
      <input label='Username' placeholder='LemonJohn99' />
      <input label='Password' placeholder='******' />
      <Button>Submit</Button>
      <Message
        // warning
        header='Could you check something!'
        list={[
          'Your shits all fucked, yo',
        ]}
      />
    </form> 
  );
}

export default FormVal