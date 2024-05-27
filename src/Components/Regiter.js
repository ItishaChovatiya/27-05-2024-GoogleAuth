import React, { Component } from 'react'

export class Regiter extends Component {
    constructor(props) {
      super(props)
    
      this.props = props;
      }
    
  render() {
    return (
      <div className='container d-flex justify-content-center mt-5'>
            <div className='w-50'>
                <h3 className='text-center'>Greate Account</h3>
                <p className='text-center'>Get started with youre account</p>
                <button className='btn btn-primary w-100' onClick={this.props.google}>google</button>
                <button className='btn btn-primary w-100 mt-2' >signup with facebook</button>
                <p className='text-center'>or</p>
                <form onSubmit={this.props.submit}>
  <div className="form-group mb-3">
   
    <input type="email" name='email' className="form-control"   placeholder="Enter email"></input>
   </div>
  <div className="form-group mb-3">
  
    <input type="password" name='password'className="form-control"  placeholder="Password"></input>
  </div>
  <div className="form-group mb-3">
   
    <input type="password" name='repassword' className="form-control"  placeholder="Password"></input>
  </div>
  <button type="submit" className="btn btn-primary w-100">create account</button>
</form>
<p className='text-center mt-4'>have an account<a className='text-primary' href='/' onClick={this.props.pagechange}>create </a></p>
<p className='text-center'>{this.props.errMessage}</p>
            </div>
      </div>
    )
  }
}

export default Regiter