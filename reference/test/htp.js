const http = require('http')
//creating a basicserver 
http.createServer((req,res)=>{res.write('JAI SRI RAM');
res.end()}
).listen(5000,()=>console.log("Server is running ....."))