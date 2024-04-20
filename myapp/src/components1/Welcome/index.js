import { Component } from "react";

class Welcome extends Component{
  state ={isLogged:true}

  rendrBtn =() =>{
    const {isLogged}=this.state
    if (isLogged === true){
        return <button type="button">LOGOUT</button>
    }
    return <button type="button">LOGIN</button>
  }

    render(){
        return(
            <div>
               <h1>user</h1>
               {this.rendrBtn()}
               
                 </div>  
        )
    }
}

export default Welcome
