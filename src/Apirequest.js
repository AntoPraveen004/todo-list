const Apirequest= async (URL='',postOptions=null,error=null)=>{
    try{
        const response= await fetch(URL,postOptions);
        if(!response.ok) throw Error("unexpected error-please reload")
    }
    catch(err){
        const error =err.Message
    }
    finally{
        return error
    }
}

export default Apirequest;