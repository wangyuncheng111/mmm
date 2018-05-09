import React from 'react';

import './index.less';
import {connect} from 'react-redux';
import actions from "src/store/actions/home";
import HomeSwiper from './HomeSwiper'
// import {loadMore,pullRefresh} from '../../common/util'
// import Loading from '../../components/Loading/Loading';
// import {Link} from 'react-router-dom';
class Home extends React.Component {
    constructor(){
        super();
        this.content = React.createRef()
    }
    chooseLesson = (val) => {
        //将当前的课程存入到redux中
        this.props.setLesson(val)
    };

    componentDidMount() {
        if (this.props.setSlider.length === 0) {
            this.props.setSlider();
        }
        this.props.setFruitsList();

        // pullRefresh(this.content.current,this.props.refresh)
    }

    render() {
        console.log(this.props.fruits.lists,'qqq');
        return (
            <div className='home full'>
                <div className="title">
                    <div className="address">
                        <img src="https://j-image.missfresh.cn/img_20161026155900764.png" alt=""/>
                        昌宁大厦
                    </div>
                    <i className="iconfont icon-suosou sousuo"></i>
                </div>
                <div className="nav">
                    <ul>
                        <li><a href="">热卖</a></li>
                        <li><a href="">水果</a></li>
                        <li><a href="">蔬菜</a></li>
                        <li><a href="">乳品</a></li>
                        <li><a href="">肉蛋</a></li>
                        <li><a href="">零食</a></li>
                        <li><a href="">酒饮</a></li>
                        <li><a href="">热卖</a></li>
                        <li><a href="">水果</a></li>
                        <li><a href="">蔬菜</a></li>
                        <li><a href="">乳品</a></li>
                        <li><a href="">肉蛋</a></li>
                        <li><a href="">零食</a></li>
                        <li><a href="">酒饮</a></li>
                    </ul>
                </div>
                <div className='content' ref={this.content}>
                    {this.props.slider.lists.length > 0 ?
                        <HomeSwiper
                            lists={this.props.slider.lists}
                        /> : <div>正在加载中...</div>}
                    <div className='home-list'>
                    </div>
                </div>

            </div>
        )
    }
}

export default connect(state => state.home, actions)(Home)

