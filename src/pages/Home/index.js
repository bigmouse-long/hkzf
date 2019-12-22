import React from 'react'
import { Route } from 'react-router-dom'
import News from '../News'
import Index from '../Index'
import List from '../List'
import Proify from '../Proify'

// 导入antd组件
import { TabBar } from 'antd-mobile'
import './index.css'
const tabItems=[
    {
        title:"首页",
        icon:"icon-ind",
        path:"/home"
    },
    {
        title:"找房",
        icon:"icon-findHouse",
        path:"/home/list"
    },
    {
        title:"资讯",
        icon:"icon-infom",
        path:"/home/news"
    },
    {
        title:"我的",
        icon:"icon-my",
        path:"/home/proify"
    }
]
export default class Home extends React.Component {
    state = {
        // 控制默认选中的
        selectedTab: this.props.location.pathname,
    }
    // 将导航栏公共部分进行抽取，进行封装展示
    returnTabItems=()=>{
        return tabItems.map(item=>
            <TabBar.Item
            icon={<i className={`iconfont ${item.icon}`} />}
            selectedIcon={<i className={`iconfont ${item.icon}`}  />}
            title={item.title}
            key={item.title}
            selected={this.state.selectedTab === item.path}
            onPress={() => {
                this.setState({
                    selectedTab: item.path,
                });
                // 编程式导航切换路由
                this.props.history.push(item.path)
            }}
        />
            )
    }
     // 页面路由切换执行
     componentDidUpdate(preProps){
        // console.log(preProps)  切换之前的路由
        // this.props.location.pathname 切换之后，当前页面路由
        if(preProps.location.pathname !==this.props.location.pathname){
            // 更新路由
            this.setState({
                // 页面切换之后的路由
                selectedTab: this.props.location.pathname,
            })
        }

    }
    render() {
        return (
            <div className="home">
                <Route path="/home/news" component={News}></Route>
                <Route  exact path="/home" component={Index}></Route>
                <Route path="/home/list" component={List}></Route>
                <Route path="/home/proify" component={Proify}></Route>
               
                <TabBar
                    tintColor="#21b97a"
                    barTintColor="white"
                    noRenderContent>
                        {this.returnTabItems()}
                </TabBar>
            </div>
        )
    }
}