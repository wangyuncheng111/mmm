import axios from './index';

export function getSlider() {
    //获取轮播图的方法
   return axios.get('/slider');
}
export function getFruits(offset,limit) {
    return axios.get(`/list?offset=${offset}&limit=${limit}`)
}
export function getFruitsDetail(id) {
    return axios.get('/detail?id='+id)
}