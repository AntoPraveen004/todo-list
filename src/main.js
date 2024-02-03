import React from 'react'
function Main(){
    const callvalue= (a) =>
    {
        console.log(a.target);
    }

    return(
    <main>
        <p id="ant">click the button to subscribe my channel</p>

        <button onClick={(a)=>callvalue(a)}>subscribe</button>
    </main>
    )
}
export  default Main