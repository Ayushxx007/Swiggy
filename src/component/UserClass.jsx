import React from "react";



class UserClass extends React.Component{

    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            count:0,
            userInfo:{
                name:"Dummy",
                public_repos:"default",
                avatar_url:"default"
                

            }


        }
  
    }

   async componentDidMount(){

    const data =await fetch(" https://api.github.com/users/Ayushxx007");
    const response = await data.json();
 
    this.setState({
        userInfo:response

    })

   
       
      }

      componentDidUpdate(){

        console.log("called after updationg")

    

        
      }

      componentWillUnmount(){
        console.log("callef just before the component is unmounted")

      }
     
    


    render(){

   

        const {name,public_repos,avatar_url}=this.props;
        const {count}=this.state;
        const{userInfo}=this.state;

      return ( 
        
        <div className="ClassUser-card">

            <button onClick={()=>{
                this.setState({
                    count:count+1

                })

            }}>click me class based component</button>

            <img src={avatar_url}></img>

            <h2>{count}</h2>

        <h2>{userInfo.name}</h2>
        <h3>{userInfo.public_repos}</h3>
        <h4>contact</h4>

    </div>);

    }

}


export default UserClass;


//! constructor==>render()==>componentDidMount=>apicall (change in state variable)==>render()=>componentDidUpdaterender()=>componentDidUpdaterender()=>componentDidUpdate
//& before unmounting ==> componentWillUnmount