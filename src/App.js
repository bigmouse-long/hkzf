import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Home from './pages/Home'
import CityList from './pages/CityList'
// 导入要使用的组件
import { Button } from 'antd-mobile'
function App() {
  return (
    <Router>
    <div className="App">
     {/* 1223<Button type="warning"/> */}
     <Link to="/home">首页</Link>
     <Link to="/citylist">城市列表</Link>
     <Route path="/home" component={Home}></Route>
     <Route path="/citylist" component={CityList}></Route>
    </div>
    </Router>
  );
}

export default App;
