// import user Model
const users = require('../Models/userSchema');
// register
exports.register= async(req,res)=>{
    // status code
    // res.status(200).json({
    //     message: "Registered Request Received Successfully"
    //     })

    console.log("Inside Register Function");
    const {username,email,password}= req.body
    console.log(`username: ${username},Email: ${email}, Password: ${password}`);
    try{
        const existingUser = await users.findOne({ email })
        if(existingUser){
            res.status(406).json("user Already Exists... Please Login!!!")
            }else{
        // register user
                const newUser=new users ({
                 username,email,password,immage:"",github:"",linkedin:""
            })
            await newUser.save()
            res.status(200).json(newUser)
        }}catch(err){
            res.status(401).json(`Error!!! Registraction failed: ${err}`)
    }
    // check already existing user
}

// login
exports.login = async (req,res)=>{
    console.log("inside login function");
    const {email, password} = req.body;
    try{
        // check user exist
        const existingUser = await users.find({email,password})
        if(existingUser){
            res.status(200).json({existingUser})
        }else{
            res.status(404).json("Incorrect email / Password")
        }
    }catch(err){
        res.status(401).json(`Error!!! Transaction Failed: ${err}`)
    }
}
