import React,{createContext} from "react";

import Component from "./component.js";
export let context=createContext(null);
function Provider(){
    let data={name:'uday',sal:5000};

    return (
        <context.Provider value={data}>
<Component/>
        
        </context.Provider>
    )

    
}

export default Provider;