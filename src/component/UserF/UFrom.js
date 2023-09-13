import React, { Component } from 'react'
import './UFrom.css';

class UFrom extends Component {
  render() {
    return (
      
        <div className='uf'>
            <h3>User From</h3>
            <input type='text' placeholder='User Name'/>
            <br></br>
            <input type='password' placeholder='Password'/>
        </div>
      
    )
  }
}

export default UFrom;