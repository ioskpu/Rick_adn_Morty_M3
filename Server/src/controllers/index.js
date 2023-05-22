const login=require('./login.js');
const getCharById=require('./getCharById.js');
const {postFav,deleteFav}=require('./handleFavorites.js');

module.exports={login,getCharById,postFav,deleteFav}