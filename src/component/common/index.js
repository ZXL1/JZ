// 先导入公共的头部
import HeaderComponent from './header.vue'
import FooterComponent from './footer.vue'

// 然后对外暴露一个对象，对象的有一个install方法
export default {
    install(Vue){
        Vue.component('app-header',HeaderComponent);
        Vue.component('app-footer',FooterComponent);
    }
}