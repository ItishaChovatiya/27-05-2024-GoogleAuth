import React, { Component } from 'react'

export class Login extends Component {
  render() {
    return (
    
        <div className='container d-flex justify-content-center mt-5'>
            <div className='w-50'>
                <h3 className='text-center'>Login</h3>
                <button className='btn btn-primary w-100 r-btng'>Login with facebook</button>
                <p className='text-center'>or</p>
                <form>
  <div class="form-group">
  
    <input type="email" class="form-control"  placeholder="Enter email"></input>
 </div>
  <div class="form-group">
    <input type="password" class="form-control"  placeholder="Password"></input>
  </div>
  
  <button type="submit" class="btn btn-primary w-100">Login</button>
</form>
<p className='text-center mt-4'><a className='text-primary' href='/' onClick={this.props.pagechange}>create </a>an account</p>
      </div>
      </div>
    )
  }
}

export default Login