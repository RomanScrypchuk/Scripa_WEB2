var mongoose=require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://admin:admin123@mydb.lq9ia.mongodb.net/mydb?retryWrites=true&w=majority');
console.log("mongodb connect...")
module.exports=mongoose;