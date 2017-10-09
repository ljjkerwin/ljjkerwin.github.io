import React from 'react';
import './index.scss';

import { Button } from 'antd-mobile';


export default class Header extends React.Component {
  render() {
    return (
      <div className="common-header">
        <div className="header-entity">
          <div className="header-left">ljjkerwin's page</div>
          <div className="header-right">
            <Button inline size="small">登录</Button>
          </div>
        </div>
        <div className="header-placeholder"></div>
      </div>
    );
  }
}