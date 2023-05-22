const axios=require('axios');
const URL="https://rickandmortyapi.com/api/character/"

const getCharById=(req,res)=>{
    const{id}=req.params;
    axios.get(URL+id)
        .then(response=>{
            const character=response.data;
            if(character.error){
                res.status(404).json({ message: 'Not Found' });
            }else{
                const {id,status,name,species,origin,image,gender}=character;
                res.status(200).json({id,status,name,species,origin,image,gender});
            }
        })
        .catch(error=>{
            console.log(error)
            res.status(500).json({message:error.message})
        })
}


module.exports=getCharById;