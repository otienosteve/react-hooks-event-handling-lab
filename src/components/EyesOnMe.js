// Code EyesOnMe Component Here
export default function EyesOnMe (){
    return (<>
    <button onClick={()=>console.log("Eyes on me")} onBlur={(e)=>(console.log("Hey! Eyes on me!"))} onFocus={(e)=>(console.log("Good!"))} id="btn">Eyes on me</button>
    </>)
}
