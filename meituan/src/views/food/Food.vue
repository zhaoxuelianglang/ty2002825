<template>
     <div >
         <img src="@/assets/images/file.png" alt="">
          <div class="box1">
            <span @click="back()" class="tubiao">
                
                    <van-icon name="arrow-left" />
               
                </span>
                <div class="box2">
                    <router-link tag="li" to="/search" class="search">
                        <span class="search_1" >
                            <van-icon  name="search" />
                        </span>
                        <span  class="search_2" > 
	                        请输入商家名、品类或者商圈...          	
                        </span>
                    </router-link>
                </div>
            <span @click="go()" class="tubiao_1"><van-icon name="manager-o" /></span>
         </div>
        


        <Menutwo></Menutwo>
        <div class="kong"></div> 
        <Fenlei></Fenlei>
        <Menuthree v-for="item in menulist" :caiping="item" :key="item.id"></Menuthree>
     </div>

</template>

<script>
import Menutwo from './Menu_1'
import Fenlei from './Fenlei'
import Menuthree from './Menu_2'
import {get} from '@/api/http'

export default{

    data(){
        return{
            menulist:[]
        }
    },
    async created(){
        let rs =await get('/menulist')
        console.log(rs)
        this.menulist = rs.data;
    },
    components:{
        Menutwo,
        Fenlei,
        Menuthree
    },
    methods:{
        back(){
            this.$router.go(-1)
        },
        go(){
            this.$router.push({path:'/my'})
        }
    }
}    



</script>





<style lang="scss" scoped>
    img{
        position: relative;
        width:750px;
        height:220px;
        border-bottom:1px solid gray;
    }
    .box1{
        display:flex;
        width:780px;
        height:90px;
        // border:1px solid black;
        justify-content: space-around;
        align-items: center;
        position: fixed;
        top:0;
        .tubiao{
            font-size:45px;
            color:white;
        }
        .tubiao_1{
            font-size:45px;
            color:white;
        }
        .box2{
            
            display:flex;
            width:540px;
            height:60px;
            // border:1px solid red;
            border-radius: 25px;
            justify-content: center;
            align-items: center;
            background: white;
            .search_1{
                font-size:37px;
                color:#8e8e94;
                margin-right:15px;
            }
            .search_2{
                font-size:25px;
                color:#999999;
            }
            
        }
    }

    .kong{
            width:100%;
            margin-top:30px;
            width:100%;
            height:20px;
            background: #f0efed;
        }
    
</style>