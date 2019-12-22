import React from 'react';
import ReactDOM from 'react-dom';
// 导入字体图标
import './assets/fonts/iconfont.css'
import App from './App';
// 导入样式
import 'antd-mobile/dist/antd-mobile.css'
// 在引入antd样式之后在进行引入全局样式，后面的会覆盖前面的
import './index.css';
ReactDOM.render(<App />, document.getElementById('root'));


