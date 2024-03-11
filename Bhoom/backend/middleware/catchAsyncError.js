module.exports = handlingOtherErrors => (req,res,next)=>{
    Promise.resolve(handlingOtherErrors(req,res,next)).catch(next);
}