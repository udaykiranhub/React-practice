
import Use from "./use.js";

import MyContext from "./pages/createContext.js";

function Create(){

const data={
    name:"uday",age:20
}
    return (
        <>
       <MyContext.Provider value={data}>
        <Use/>
       </MyContext.Provider>
       </>
    )

}

export default Create;