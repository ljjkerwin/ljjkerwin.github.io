import 'modules/base-style';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import Header from './components/Header';
import { Flex, Button } from 'antd-mobile';


class View extends React.Component {
  render() {
    return (
      <div>
        <Header />
        building...
      </div>
    )
  }
}


ReactDOM.render(<View />, document.getElementById('root'))
``