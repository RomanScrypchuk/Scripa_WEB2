var User=require('./user');
var user=new User('Roman','Skrypchuk');
console.log('firstname:'+user.first);
console.log('lastname:'+user.last);
user.fullName();
