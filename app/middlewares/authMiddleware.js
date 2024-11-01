export default (req,res,next) =>{
    console.log("I am Middleware");
    next();
}