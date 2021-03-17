import React from 'react';
import { useForm} from 'react-hook-form';
// import {  Message } from 'semantic-ui-react'; //Button, Form,
import Formy from './FormStyle';
import Button from "./Button" ;
import ErrMsg from './components/ErrMsg';
import { MARGIN_LEFT } from './styles';

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
      <label>Username:</label>
      <input style={{ marginLeft: MARGIN_LEFT }} name='userName' label='Username' placeholder='LemonJohn99' />
      <label style={{ marginLeft: MARGIN_LEFT }}>Passphrase:</label>
      {errors.passphrase && (
      <ErrMsg noBackground type='purple'>{errorHelp()}</ErrMsg>
      )}
      <input 
        style={{ marginLeft: MARGIN_LEFT }}
        name='passphrase'
        label='Passphrase'
        placeholder='******'
        ref={register({required: true, validate:(val) => 'yo'  } ) }     
      />
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