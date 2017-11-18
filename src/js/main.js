// 导入第三方包
import Vue from 'vue';
import mintUi from 'mint-ui';
// 引入第三方包的样式
import 'mint-ui/lib/style.css';
import Common from '../component/common';
import 'mui/dist/css/mui.css';
import 'mui/examples/hello-mui/css/icons-extra.css';
import axios from 'axios';

// 启用插件
Vue.use(mintUi);
Vue.use(Common);

// 导入组件
import Appcomponent from '../component/App.vue';

Vue.prototype.axios=axios;



new Vue({
    el:"#app",
    render(createNode){
        return createNode(Appcomponent);
    }
})