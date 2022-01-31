const express = require('express');//installs whole express library

const app = express();//first api build right here <

app.get('/', (request, response) => {
    response.send('My first Express API... works!');
}); //any request to this address were going to send it something


app.listen(3000, () => console.log('listening on port 3000...'));  //listens to port 3000
