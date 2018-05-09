import React,{Component} from 'react';
import './index.less'
import {connect} from "react-redux"
import actions from '../../store/actions/home'
class VipList extends Component{
    constructor(){
        super()

    }
    render(){
        return(
            <div>
                console.log(this.props.getState())
            </div>
//             <section className='product-item-container product-list-item'>
// <div className='product-item'>
// <div className='item-image'>
//     <div className='promotion'>
// <div className='product-item-promotion'>
//     <img src={} alt="" className='vux-x-img b-loaded'/>
// </div>
//     </div>
// </div>
// </div>
//             </section>
        )
    }
}
export default connect(state => state.home, actions)(VipList)