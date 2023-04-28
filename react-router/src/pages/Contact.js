import React, { Component, Fragment } from 'react'


class Contact extends Component{
  constructor(){
    super()
    this.state = {
      bgcolor: 'blue'
    }
  }
  changeHandler = (e) => {    
    this.setState({
      bgcolor: e.target.value
    })
  }
    render(){
      console.log(this.state)
      const bgStyle = {
        background: this.state.bgcolor
      }
      return(
      <Fragment>          
          <div className='container' style={bgStyle}>
            <h2>{this.props.heading}</h2>
            <input type='text' value={this.state.bgcolor} 
            onChange={this.changeHandler} />
          </div>
      </Fragment>
      )
    }
  }

export default Contact;

