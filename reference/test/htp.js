const http = require('http')

http.createServer((req,res)=>{res.write('JAI SRI RAM');
res.end()}
).listen(5000,()=>console.log("Server is running ....."))