const express = require('express');
const app = express();

app.get('/',(request,response)=>{
    response.send("welcome")
})

require('./routes/route.student.js')(app);

app.listen(3000,()=>{
    console.log('server running:3000')
});





