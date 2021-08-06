/**
 * Tom Bielawski
 * Lambda School WEB45 
 * Advanced React Sprint Challenge
 * 8/6/2021
 */

//Imports
import { useState } from 'react';

// write your custom hook here to control your checkout form

//Custom hook 
const useForm = (initialValue)=> 
{
    //Declare and init state
    const [values, setValues] = useState(initialValue);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  
    //change handler
    const handleChanges = e => 
    {
        //Set values
        setValues
        ({
            //Copy (spread) existing values, target value
            ...values,
            [e.target.name]:e.target.value
        });
    };
  
    //Submit handler
    const handleSubmit = e => 
    {
        //Prevent default behavior
        e.preventDefault();
        //Set the success message flag to true
        setShowSuccessMessage(true);
    };
  
    //Return the array
    return [values, handleChanges, handleSubmit, showSuccessMessage];
}

//Export statement
export default useForm;