import React from 'react'
import './Footer.css'
const Footer= ({value,changeVal,Delete}) =>{
    let count=0;
    value.map((item)=>
        (item.checked) ? null :count++
    )
    return(
        <div className="Footer">
            <p className='footerp'> Need to complete {count} tasks </p>
            <p className='items_remain'>{value.length} {(value.length <=1  )?"item remaining" : "items remaining"}</p>
        </div>
    )
}
export default Footer