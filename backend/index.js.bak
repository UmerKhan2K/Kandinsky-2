const Replicate=require("replicate");
const express = require('express');
const fs=require('fs');;
const app = express();
const port = 3000;


const replicate = new Replicate({
  auth: 'r8_erkG4hLcEw7e1qYskk5haqUHZYUJtuR3MLnf8',
});

async function output (){ 
     await replicate.run(
  "ai-forever/kandinsky-2:601eea49d49003e6ea75a11527209c4f510a93e2112c969d548fbb45b9c4f19f",
  {
    input: {
      prompt: "red cat, 4k photo"
    }
  }
);
}


app.post('/',async(req,res)=>{


    const result=await replicate.run(
        "ai-forever/kandinsky-2:601eea49d49003e6ea75a11527209c4f510a93e2112c969d548fbb45b9c4f19f",
        {
          input: {
            prompt: "red dog, 4k photo"
          }
        }
      );
      console.log(result);
  

    res.send('hello');

}

)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })