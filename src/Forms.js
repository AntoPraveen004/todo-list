import { FaPlus } from "react-icons/fa";
import { useRef } from "react";
import './forms.css'
import './Apirequest.js'
import Apirequest from "./Apirequest.js";
const Forms = ({ setaddValue, addValue, value, setValue,search,setSearch}) => {
  const API_URL='http://localhost:3500/value'
  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!addValue) return null;
     const newitem={
      id:`${value.length+2}`,
      checked:false,
      content:addValue,
     }
     const finaladd =[...value,newitem]
     setValue(finaladd);
    setaddValue('');


    //REST-API CALL
     //CRUD OPERATIONS----------------------------------
    const postOptions={
      method:'POST',
     headers:{
         'content-type':'application/json'
     },
     body:JSON.stringify(newitem)
    }
       Apirequest(API_URL,postOptions)
 
    //-------------------------------------------------------------------------------------------

  };

  const handleChange = (e) => {
    setaddValue(e.target.value);
  };

  const handlesearch=(e)=>{
    setSearch(e.target.value)
    console.log(search)
  }
  const useref= useRef()

  return (
    <div className="container">
    <form className="forms" onSubmit={handleSubmit}>
      <div className="wrapper">
      <input
        ref={useref}
        onChange={handleChange}
        type="text"
        placeholder="Add Items"
        value={addValue}
        required
        autoFocus
      />
      <button  onClick={()=>{useref.current.focus()}} type="submit"><FaPlus /></button>
      </div>
      <div className="wrappers" >
      <input
        onChange={handlesearch}
        id="textfield"
        type="text"
        placeholder="Search Items"
        value={search} 
        className="box"
      />
      </div>
    </form>
    </div>
  );
}

export default Forms;
