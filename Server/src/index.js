const express=require('express');
const getCharById=require('./controllers/getCharById.js');
const router=require('./routes/index.js');
const server=express();

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});
server.use(express.json());
server.use('/rickandmorty',router)

const PORT=3001;
server.listen(PORT,()=>{
    console.log('Server raised in port: ' + PORT);
})

/*const http=require('http');
const getCharById=require('./controllers/getCharById');
const axios=require('axios')

 const PORT=3001;
 http.createServer((req,res)=>{
     res.setHeader('Access-Control-Allow-Origin', '*');
     try {
         const{url}=req;
         if(url.includes('/rickandmorty/character')){
             const id=Number(url.split('/').pop());
             getCharById(res,id);
         }
     } catch (error) {
         console.log(error);
         throw new Error(error);
     }
 }).listen(PORT,'localhost');*/
