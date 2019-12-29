import React from 'react'
// import { NavBar,  } from 'antd-mobile';
// 导入axios请求数据
// import axios from '../axios'
import Bar from '../../component/NavBar'
import './index.scss'
export default class CityList extends React.Component {
    state={
        // 城市列表数据
        cityList:[]
    }
    // 获取城市列表数据
    async getCityList(){
        // const res=await axios.get("​/area/city?level=1")
        // console.log(res)
    }
    componentDidMount(){
        this.getCityList()
    }
    render() {
        return (
            <div className="cityList">
    <Bar title="城市列表" />
            </div>
        
            // <div className="cityList">
            //     <NavBar
            //         className="navBar"
            //         mode="light"
            //         icon={<i className="iconfont icon-back"/>}
            //         onLeftClick={() => this.props.history.go(-1)}
            //     >城市列表</NavBar>
            // </div>
        )
    }
}