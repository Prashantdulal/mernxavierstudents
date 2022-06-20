const express = require("express");
// const app = express();
const router = express.Router();
const User = require("../models/userSchema");
// const authenticate = require("../middleware/authentication");







router.post("/register", async (req, res) => {
  const { name, email, id, sec, intrest, address, phone } = req.body;
  
  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "Record already exist" });
    }

    const user = new User({ name, email, id, sec, intrest, address, phone });
    await user.save();

   res.status(201).json({ message: "Record added successfully" });
  } catch (err) {
    console.log(err);
  }

});

router.post('/login', async(req, res) => {
  try{
    const {id} = req.body;
    console.log(id)

    if(!id){
      return res.status(400).json({error: 'Please enter your id'});
    }
    const userLogin =await User.findOne({id: id});
    console.log(userLogin);
    globalString=userLogin;
  

    // console.log(globalString);

    if(!userLogin){
      return res.status(400).json({error: 'User not found'});
    }
    res.status(200).json({message: 'Login success'});
   


  }catch(err){
    console.log(err);
  }

})


router.get('/getusers',(req, res) => {
  res.send(globalString);
})


// router.get('/about',authenticate,(req, res) => {
//   console.log("about");
//   res.send(req.rootUser);
// })
module.exports = router;
