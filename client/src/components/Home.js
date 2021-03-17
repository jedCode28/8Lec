import {useEffect} from 'react';
import axios from 'axios';
import FormVal from '../FormVal';


export default ()=>{
    useEffect(()=>{
        apiDemoCall()
    },[])

   const apiDemoCall = async() => {
        try {
          let res = await axios.get('api/static/test_api')
          alert(`api test call work data received: ${res.data}`)
        } catch(err){
            alert('api test call did not work, check console and rails server')
        }
   
    }
    return(
        <>
          <h1>Home</h1>
          <FormVal />
        </>
    )
}