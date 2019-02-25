import React from 'react';
import { Card } from "semantic-ui-react";

const UserInfo=(props) => (
  <Card 
  header ={props.children}
  meta='Male'
  description = { 'Age :' + props.age}
  />
  );

export default UserInfo;
