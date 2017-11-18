<template>
    <router-linkrticle>
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in lunbo" v-bind:key="item.url">
        <router-link v-bind:to="item.url">
        <img v-bind:src="item.img">
        </router-link>
        </mt-swipe-item>
    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">首页</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/news/list">
		                    <span class="mui-icon mui-icon-chat"></span>
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/photo/list">
		                    <span class="mui-icon mui-icon-image"></span>
		                    <div class="mui-media-body">分享图片</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">搜索</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">手机</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/">
		                    <span class="mui-icon mui-icon-info"></span>
		                    <div class="mui-media-body">关于我们</div></router-link></li>
		        </ul>
    </article> 
</template>
<script>
export default {
    data(){
        return {
            lunbo:[]
        }
    },
    methods:{
        lunbotu(){
            this.axios.get('http://vue.studyit.io/api/getlunbo')
            .then(req=>this.lunbo=req.data.message);
        }
    },
    created(){
        this.lunbotu();
    }
}

</script>
<style scoped>
    article{
        height:200px;
        background-color:skyblue
    }
</style>