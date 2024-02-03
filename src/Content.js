import { FaTrash} from "react-icons/fa";
const Content = ({error,loading,value,changeval,Delete}) =>{
    return(

        <>
            {(value.length<=0) && !error &&!loading ?<p  id="no_tems">No Items </p>:<ul >
                {value.map((val)=>(
                    <li className= "list" key={val.id}>
                        <input onChange={()=>changeval(val.id)} type="checkbox" checked={val.checked}/>
                        <label style={(val.checked)? {textDecoration:'line-through'}:null}>{val.content}</label>
                        <FaTrash onClick={()=>Delete(val.id)}/>
                    </li>
                ))}
            </ul>}
        </>
    )
}
export default Content 
