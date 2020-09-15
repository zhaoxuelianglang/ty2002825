<template>
    <div class="box">
        <Header></Header>
        <Ad></Ad>
        <Nav></Nav>
        <div class="kong"></div>
        <Like></Like>
        <Menus v-for="item in expectlist" :menu="item" :key="item.id"></Menus>
        <More></More>    
        <Bottom></Bottom>    
         
    </div>

</template>

<script>
import Header from './Header'
import Nav from './Nav'
import Like from './Like'
import Ad from '../Ad/Ad'
import "@/assets/iconfont/iconfont.css"
import Menus from './Menus'
import {get} from '@/api/http'
import More from './More'
import Bottom from '@/components/Bottom'


export default{
    data(){
        return{
          expectlist:[]  
        }
    },
    components:{
        Header,
        Nav,
        Like,
        Ad,
        Menus,
        More,
        Bottom
    },
    async created(){
        let rs =await get('/expectlist')
    
        this.expectlist = rs.data;
    }
}
</script>



<style lang="scss" scoped>
    .box{
        width:100%;
        .kong{
            margin-top:30px;
            width:750px;
            height:20px;
            background: #f0efed;
        }
    }
</style>