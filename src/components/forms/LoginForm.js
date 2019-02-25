import React, { Component } from 'react'
import {Form,Button, Card,Input, Message} from 'semantic-ui-react';
import UserInfo from './UserInfo';
import Validator from 'validator';
import InlineError from '../errors/InlineError';
import Proptypes from 'prop-types';
 

export default class LoginForm extends Component {
  state={
    num:5,
    data :{email: '',
            password: ''},
    loading:false,
    errors:{}
  };

 changeAge = (num)=>{
    const newState = this.state.users.map(user => user.age -= num);
    this.setState({newState});
  }
changeAgeNum=(event) => this.setState({num :event.target.value});

onChange =(e) => this.setState({data : {...this.state.data, [e.target.name]: e.target.value}});

onSubmit = () =>{
  const errors = this.validateError(this.state.data);
  this.setState({errors});
  if(Object.keys(errors).length ===0){
    this.setState({loading:true})
    this.props.submit(this.state.data).catch(err=>{this.setState({errors:err.response.data.errors, loading: false})});
  }
}

validateError =(data) => {
  const errors={};
  if(!Validator.isEmail(data.email)) errors.email ="invaild email";
  if(!data.password) errors.password ='can not be empty';
  return errors;
}
  render() {
    const {data, errors, loading}= this.state;
    return (
      <div>
        <Form className="ui form" onSubmit ={this.onSubmit} loading ={loading}>
        <Form.Field error ={!!errors.email}>
        {errors.global && <Message negative><Message.Header>
          </Message.Header>
          <p>{errors.global}</p></Message>}
            <label htmlfor="email">Email</label>
            <input type="email" value={data.email} onChange={this.onChange} name="email" placeholder="example@emple.com"/>
            { errors.email && <InlineError text ={errors.email}></InlineError> }
            </Form.Field>
            <Form.Field error ={!!errors.password}>
            <label htmlfor="password">Password</label>
            <input type="password" value ={data.password} onChange={this.onChange}  name="password" />
            { errors.password && <InlineError text ={errors.password}></InlineError> }
            </Form.Field>
            <Button primary type="submit" >Submit</Button>
        </Form>
        <br />
        </div>
    )
  }

}
LoginForm.propTypes = {
  submit: Proptypes.func.isRequired
}
