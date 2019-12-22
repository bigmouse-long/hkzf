import React from 'react'
// 导入axios请求数据
import axios from '../axios'
// 导入组件
import { Carousel, Flex, Toast, Grid ,WingBlank } from 'antd-mobile';
// 导入图片
import Nav1 from '../../assets/images/nav-1.png'
import Nav2 from '../../assets/images/nav-2.png'
import Nav3 from '../../assets/images/nav-3.png'
import Nav4 from '../../assets/images/nav-4.png'
// 导入样式
import './index.scss'

// 导航栏数据
const navData = [
    {
        id: 1,
        img: Nav1,
        title: '整租',
        path: '/home/list'
    },
    {
        id: 2,
        img: Nav2,
        title: '合租',
        path: '/home/list'
    },
    {
        id: 3,
        img: Nav3,
        title: '地图找房',
        path: 'map'
    },
    {
        id: 4,
        img: Nav4,
        title: '出租',
        path: 'rent'
    },
]

export default class Index extends React.Component {
    state = {
        // 轮播图数据
        swipers: [],
        // 轮播图是否加载完成
        isSwiperLoad: false,
        // 租房小组数据
        groups: [],
            // 最新资讯
    news: []

    }
    //   请求轮播图方法
    async getSwiperData() {
        const res = await axios.get("/home/swiper")
        // console.log(res)
        this.setState({
            swipers: res.body,
            isSwiperLoad: true
        })
    }
    // 获取租房小组信息
    async getGroupsData() {
        const res = await axios.get('/home/groups', { params: { area: 'AREA%7C88cff55c-aaa4-e2e0' } })
        // console.log(res)
        if (res.status !== 200) {
            Toast.fail('获取租房小组数据失败')
        }
        this.setState({
            groups: res.body
        })
    }
     // 获取最新资讯
  async getNews() {
    const res = await axios.get(
      '/home/news?area=AREA%7C88cff55c-aaa4-e2e0'
    )
    if (res.status !== 200) {
        Toast.fail('获取最新资讯数据失败')
    }
    this.setState({
      news: res.body
    })
  }
    // 循环渲染导航栏数据
    renderNav = () => {
        return navData.map((item) =>
            <Flex.Item key={item.id} onClick={() => this.props.history.push(item.path)}>
                <img src={item.img} alt="" />
                <h2>{item.title}</h2>
            </Flex.Item>
        )
    }
     // 渲染最新资讯
  renderNews() {
    return this.state.news.map(item => (
      <div className="news-item" key={item.id}>
        <div className="imgwrap">
          <img
            className="img"
            src={`http://localhost:8080${item.imgSrc}`}
            alt=""
          />
        </div>
        <Flex className="content" direction="column" justify="between">
          <p className="title">{item.title}</p>
          <Flex className="info" justify="between">
            <span>{item.from}</span>
            <span>{item.date}</span>
          </Flex>
        </Flex>
      </div>
    ))
  }
    // 页面dom元素加载完成调用
    componentDidMount() {
        this.getSwiperData()
        this.getGroupsData()
        this.getNews()
    }

    render() {
        return (
            <div className="index">
                {/* 轮播图菜单 */}
                <div className="swiper">
                    {this.state.isSwiperLoad ? <Carousel
                        autoplay
                        infinite>
                        {this.state.swipers.map(item => (
                            <img
                                key={item.id}
                                src={`http://localhost:8080${item.imgSrc}`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                            />
                        ))}
                    </Carousel> : ''

                    }
                     {/* 搜索框 */}
          <Flex className="search-box">
            {/* 左侧白色区域 */}
            <Flex className="search">
              {/* 位置 */}
              <div
                className="location"
                onClick={() => this.props.history.push('/citylist')}
              >
                <span className="name">上海</span>
                <i className="iconfont icon-arrow" />
              </div>

              {/* 搜索表单 */}
              <div
                className="form"
                onClick={() => this.props.history.push('/search')}
              >
                <i className="iconfont icon-seach" />
                <span className="text">请输入小区或地址</span>
              </div>
            </Flex>
            {/* 右侧地图图标 */}
            <i
              className="iconfont icon-map"
              onClick={() => this.props.history.push('/map')}
            />
          </Flex>
                </div>

                {/* 导航菜单 */}
                <Flex className="nav">
                    {this.renderNav()}
                </Flex>
                <div className="group">
                    <h3>租房小组 <span className="more">更多</span></h3>
                </div>
                <Grid
                    data={this.state.groups}
                    columnNum={2}
                    square={false}
                    hasLine={false}
                    renderItem={item => (
                        <Flex className="group-item" justify="around" key={item.id}>
                            <div className="desc">
                                <p className="title">{item.title}</p>
                                <span className="info">{item.desc}</span>
                            </div>
                            <img src={`http://localhost:8080${item.imgSrc}`} alt="" />
                        </Flex>
                    )}
                />
                  {/* 最新资讯 */}
        <div className="news">
          <h3 className="group-title">最新资讯</h3>
          <WingBlank size="md">{this.renderNews()}</WingBlank>
        </div>
            </div>
        )
    }
}