import React from 'react';
// 导入路由模块
import { BrowserRouter as Router, Route, Link,Redirect } from 'react-router-dom'
// 导入要展示的组件页面
import Home from './pages/Home'
import CityList from './pages/CityList'
import Search from './pages/Search'
import Map from './pages/Map'
function App() {
  return (
    <Router>
      <div className="App">
    {/* 默认路由,匹配时跳转到/home  实现路由重定向*/}
    <Route exact path="/" render={()=><Redirect to="/home" />}></Route>
        {/* 配置路由 */}
        <Route path="/home" component={Home}></Route>
        <Route path="/citylist" component={CityList}></Route>
        <Route path="/search" component={Search}></Route>
        <Route path="/map" component={Map}></Route>
      </div>
    </Router>
  );
}

export default App;
