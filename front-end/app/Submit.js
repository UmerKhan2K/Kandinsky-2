const submitPrompt = async (prompt) => {
    // You can replace this with your API endpoint or any custom function to handle the prompt
    const response = await fetch(`/api/submitPrompt?prompt=${prompt}`);
    const data = await response.json();
    return data;
  };
  
  export default submitPrompt;
  