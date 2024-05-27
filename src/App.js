import React, { Component } from 'react'
import Login from './Components/Login'
import Regiter from './Components/Regiter'
import { getAuth, createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import app from './Firebase';

const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       pagechange:false,
       errMessage:""
    }
  }

  pageChangeHandler = (e) => {
    e.preventDefault();
    
    this.setState({
      pagechange:!this.state.pagechange
    })
  } 

  registerSubmitHandler = (e) => {
    e.preventDefault();
     const email = e.target.email.value
     const password = e.target.password.value
     const repassword = e.target.repassword.value
    console.log(email,password,repassword);


    if(password !== repassword){
        this.setState({
          errMessage:"password not match........"
        })
    }else{
        this.setState({
          errMessage:"account created........",
          pagechange:true
        })
    }


  createUserWithEmailAndPassword(auth,email,password)
  .then((res) => {
      console.log(res);
  }).catch((err) => {
      console.log(err);
  })     

  }

  GoogleHandler = () => {
    signInWithPopup(auth,provider)
    .then((res) => {
      console.log(res);
  }).catch((err) => {
      console.log(err);
  })   
  }
  render() {

  
    return (
      <div>
      {
        this.state.pagechange === false ?   <Regiter  pagechange={this.pageChangeHandler} submit={this.registerSubmitHandler}
        errMessage={this.state.errMessage} google={this.GoogleHandler}></Regiter>:<Login  pagechange={this.pageChangeHandler}></Login>
  }
      </div>
    )
  }
}

export default App