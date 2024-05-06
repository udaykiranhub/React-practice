import { useContext } from "react";
import MyContext from "./pages/createContext.js";
function Use(){
const user=useContext(MyContext);
    return(

        <>
        
        <h1>use me!</h1>
        <h1>name is :{user.name} and age is:{user.age}</h1>
        </>
    )
}

export default Use;