
async function LOGIN(request, response) {
   response .send({message: "Success"});
   try {
    let body = request.body;
    
      const userName = body.user_name.toUpperCase();
      let password = body.password;
     if(
      (userName === 'S12' && password === "P@123")
      (userName === 'S23' && password === "p@123")
      (userName === 'S34' && password === "p@123")
      (userName === 'S45' && password === "P@123")
      (userName === 'S56' && password === "P@123")
      (userName === 'S67' && password === "P@123")
      (userName === 'S78' && password === "P@123")
      (userName === 'S89' && password === "P@123")
      (userName === 'S90' && password === "P@123")
      (userName === 'S01' && password === "P@123")
     ){
       return reply.code(200).send({success:true, mesage: "login success"}); 
       }
      else{
       return reply.code(400).send({status: "error", message: 'Invalid User Name or Password' });
       }
       return;
    }

catch (error){
    return reply.code(400).send(error)
}
}



module.exports ={
    LOGIN
};