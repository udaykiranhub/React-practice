
import 'bootstrap/dist/css/bootstrap.min.css';


import "./grid.css";

function Grid(){



    return (

      <div className='row'>
        <div className='col-xs-8 col-sm-10 col-lg-12'>
        <div className="grid-container">
        <div className="item1"> 
        <span>Home</span> <span>Login</span> <span>SingUp</span> <span>My account</span></div>
        <div className="item2">
            <h1>menu</h1>
            <h1>menu</h1>
            <h1>menu</h1>
            <h1>menu</h1>
            <h1>menu</h1>
            <h1>menu</h1>
            <h1>menu</h1>
            <h1>menu</h1>
            <h1>menu</h1>

        </div>
        <div className="item3">
            
        Please keep in mind that detecting device orientation is currently experimental technology.
Check the browser compatibility before using this in production.
A few takeaways when using device orientation event:

always use secure origins (such as https)
if you're using VS Code, then you can
use the in-built port-forwarding feature to expose your localhost to the internet and optionally change the protocol to https
alternatively, use microsoft's live-share extension which supports sharing server through a tunnel.
it doesn't work in all browsers when using it in cross-origin  element
Using device orientation on iOS 13+
            
            </div>  
        <div className="item4">
            <h1>
                Adding
            </h1>
            <h1>
                Adding
            </h1>
            <h1>
                Adding
            </h1>
            <h1>
                Adding
            </h1>
            <h1>
                Adding
            </h1>
            <h1>
                Adding
            </h1>

        </div>
        <div className="item5">Footer</div>
      </div>
        </div>
      </div>
    )
}
export default Grid;