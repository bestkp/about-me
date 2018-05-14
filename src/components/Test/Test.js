import React from 'react';
import {Button} from 'antd';
const Test = ({
  msg,
  showMsg,
}) => (
  <div>
    msg: {msg}
    <p><Button type="primary" onClick={showMsg("hello")}>show</Button></p>
  </div>
);

export default Test