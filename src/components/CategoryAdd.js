import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const CategoryAdd = ({setCategories}) => {

    const [inputValue, setinputValue] = useState('');

    //Función para que cambie el estado del input 
    
    const handleInputChange = (e) => {
        setinputValue(e.target.value);
    }
    //Función cuando hay submit 

    const handleSubmit = (e) => {
    
       e.preventDefault();
       //Validar el input 
       if(inputValue.trim().length >= 2){
        setCategories( cats => [ inputValue,...cats ]);
        setinputValue('');
       }
     
    }
    return (
        <div>
            
         <form onSubmit={handleSubmit}>
             <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
             
             
             />
         </form>
         
         
        </div>
    )

   
}
CategoryAdd.propTypes = {
        
    setCategories: PropTypes.func.isRequired
}
