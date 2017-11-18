<template>
    <main>
    <app-header></app-header>
    <app-home></app-home>
    <app-footer></app-footer>
    </main>
</template>
<script>
 import HomeComponent from './home/home.vue'; 
 export default {
    //  子组件
    components:{
        'app-home':HomeComponent
    }
}

</script>
<style>
    
</style>