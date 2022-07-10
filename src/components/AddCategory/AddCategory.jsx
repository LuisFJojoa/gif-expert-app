import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
  
  const [inputValue, setInputValue] = useState("");
  
  const onInputChange = ({target}) => {
    setInputValue(target.value)
  }

  const onSubmit = (evt) => {
    evt.preventDefault();
    const inputTrim = inputValue.trim()
    if (inputTrim.length <= 1) return;
    // setCategories( categories => [...categories, inputValue])
    onNewCategory(inputTrim);
    setInputValue("")
  }

  return (
    <form onSubmit={onSubmit}>
      <input 
      type='text' 
      placeholder='Buscar Gifs' 
      autoFocus
      value={inputValue}
      onChange={onInputChange}
      />
    </form>
    
  );
}


