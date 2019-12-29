import React from 'react'
import {withRouter} from 'react-router-dom'
import { NavBar } from 'antd-mobile';
import './index.scss'
import propTypes from 'prop-types'
 class Bar extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        // console.log(this.props)
        return (
                <NavBar
                    className="navBar"
                    mode="light"
                    icon={<i className="iconfont icon-back"/>}
                    onLeftClick={() => this.props.history.go(-1)}
                >{this.props.title}</NavBar>
          
        )
    }
}
Bar.propTypes={
    title:propTypes.string.isRequired
}
export default withRouter(Bar)