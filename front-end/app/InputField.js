'use client';
import React from 'react';
import submitPrompt from './Submit';


const InputField = () => {
    const handleSubmit = async (event) => {
        event.preventDefault(); 
        const prompt = event.target.elements.prompt.value; 
        const result = await submitPrompt(prompt); 
        console.log(result); 
      };
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input type="text" name="prompt" placeholder="Enter prompt" />
      <button type="submit">Submit</button>
    </form>
  </div>
  );
};

export default InputField;
