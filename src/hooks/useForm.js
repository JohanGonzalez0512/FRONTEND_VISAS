import { useState } from "react";

export const useForm = (initialState) => {
    
    const [values, setvalues] = useState(initialState);

    const reset = () => {
      setvalues(initialState)
    }

    const changeValue = (valueName, value) => {
      console.log(values);
      setvalues({
        ...values,
        [valueName]: value,
      });
      console.log(values);
    }

    const handleInputChange = ({ target }) => {

      const value = target.value === 'false' ? false : target.value === 'true' ? true : target.value;

        setvalues({
          ...values,
          [target.name]: value,
        });
        
      };

      return [ values, handleInputChange, reset, changeValue ]

}
