import { useRef } from "react";
//by using the useRef we can change the values without the re-renderig the component
 
function Dom() {
  const ele = useRef();
  const ele2=useRef();
  const count=useRef(0);

  const focusInput = () => {
ele.current.innerHTML="uday kiran";
ele2.current.innerHTML="kingooo";
console.log(count.current)
count.current++;

  };

  return (
    <>

       <h1 ref={ele} >i am dom element!</h1>
       <h2 ref={ele2} style={{"color":"red"}}>i am second dom element!</h2>

      <button onClick={focusInput}>change</button>
    </>
  );
}
export default Dom;