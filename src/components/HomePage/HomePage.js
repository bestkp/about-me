import React, {PureComponent} from 'react';
// 使用 react-router 的 Link 當做超連結，傳送 userId 當作 query
import { Link } from 'react-router-dom';
import {Input, Button} from 'antd'

class HomePage extends PureComponent {
  render() {
    const {userId, loading, onChangeUserId, onSubmitUserId} = this.props
    return <div>
        <Input placeholder="Please Key in your Github User Id." onChange={onChangeUserId} />
        <Link to={{ pathname: "/result", query: { userId: userId } }}>
          <Button onClick={onSubmitUserId(userId)} type="primary">
            Submit
          </Button>
        </Link>
      </div>;
  }
}

export default HomePage;