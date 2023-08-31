const advinhe = async (req,res)=>{
    try {
        const cpu =  Math.floor(Math.random() * (2 - 0 + 1)) + 0.
        const chute = Number(req.params.chute)
    
        if(!chute){
            return res.status(400).json({menssagem: 'é necessario digitar um chute valido. número entre 0 e 2'})
        }
        
        if(chute !== cpu){
            return res.status(400).json({mensagem: 'que pena você errou. tente outra vez'})
        }

        return res.status(200).json('VOCÊ ACERTOU!!');
        
    } catch (error) {
        return res.send(error.message)
    }
}

module.exports = advinhe;