import Content from "./Content"
import Header from "./Header"
import Footer from "./Footer"
import Forms from "./Forms"
import React, { useEffect,  useState } from 'react';
import "./Header.css"
import "./Footer.css"       
import "./Content.css"
import Apirequest from "./Apirequest.js";
function App() {

    const [addValue, setaddValue]= useState('')
    const [search ,setSearch] = useState('')
    const [loading, setLoading] =useState(true)
    const [value , setValue]=useState([]);
    const [error , setError]=useState(null)
    const API_URL='http://localhost:3500/value'
    function Delete(key){ 
        const afterdel= value.filter((val)=>(
            val.id!==key
        ))
        setValue(afterdel)
        //CRUD DELETION
        const delOption={
            method:"DELETE"
        }
        const API_UPDATE=`${API_URL}/${key}`
         Apirequest(API_UPDATE,delOption)
    }
    function changeval(key){
        const newVal=value.map((val)=>(
            val.id===key ? {...val,checked:!val.checked} : val
            
        ))
        console.log(typeof(key))
        console.log(typeof(id))
        setValue(newVal)

            const update= newVal.filter((val)=>(
                val.id===key
            ))
            //CRUD UPDATE
            const PatchOptions={
                method:'PATCH',
               headers:{
                   'content-type':'application/json'
               },
               body:JSON.stringify({checked:update[0].checked})
              }
              const API_UPDATE=`${API_URL}/${key}`
                Apirequest(API_UPDATE,PatchOptions)
    }   

    // API REQUEST -------------------------------------------------------------
    useEffect(()=>{
       const Apifunc= async ()=>{
        try{
            const response= await fetch(API_URL)
            if(!response.ok) throw Error("ERROR in collecting data")
            const output= await response.json()
            setValue(output)
        }
        catch (err){
            setError(err.message)
        }
        finally{
            setLoading(false)
        }
       }
      setTimeout(()=>{
        Apifunc();
      },1000)
    },[])

    //API ------------------------------------------------------------------
  

    return (
      <div className="App">
      <Header/>
      <Forms
      search={search}
      setError={setError    }
      setSearch={setSearch}
      setValue={setValue}
      value ={value}
      changeval= {changeval}
      addValue={addValue}
      setaddValue={setaddValue}
      Delete= {Delete} />
    <div className="Content">
        {loading && <p id="no_tems">Loading..</p>}
        {error && <p id="no_tems">{error}</p> }
        <Content 
        error = {error}
        loading={loading}
            setValue={setValue}
            value ={value.filter(value=>(
                    (value.content).toLowerCase().includes(search.toLowerCase())
                     ))}
             changeval= {changeval}
             Delete= {Delete} /> 
   
        
     </div>
     
      <Footer  value ={value}
      changeval= {changeval}
      Delete= {Delete} />
      </div>
    );
}

export default App;
