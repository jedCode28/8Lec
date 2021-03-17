import React from 'react';
import { useForm} from 'react-hook-form';
// import {  Message } from 'semantic-ui-react'; //Button, Form,
import Formy from './FormStyle';
import Button from "./Button" ;
import ErrMsg from './components/ErrMsg';

const FormVal = () => {
  const { errors, handleSubmit, register } = useForm();

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
    <Formy onSubmit={handleSubmit(onSubmit)}> {/*warning*/}
      <h3>Sign In</h3>
      <label>Username</label>
      <input name='userName' label='Username' placeholder='LemonJohn99' />
      <label>Passphrase</label>
      {errors.passphrase && (<ErrMsg noBackground type='purple'>{errorHelp()}</ErrMsg>)}
      <input name='passphrase' label='Passphrase' placeholder='******' ref={
        register({required: true, validate:(val)=>val.split('').filter((word) => word.length >=8 )})}/>
      <Button>Submit</Button>
      {/* <Message
        // warning
        header='Could you check something!'
        list={[
          'Your shits all fucked, yo',
        ]}
      /> */}
    </Formy> 
  );
}

export default FormVal