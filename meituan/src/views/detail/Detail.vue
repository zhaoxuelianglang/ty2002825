<template>
    <div class="handerBar">
       <div class="detail">
           <div @click="handClick()" class="box">
                <span><van-icon name="arrow-left" /></span>
           </div>
           <div class="box2">团购详情</div>
           <div class="box3">
               <span><van-icon name="star-o" /></span>
               <p>收藏</p>
           </div>
           <div class="box4">
               <span><van-icon name="orders-o" /></span>
               <p>导航</p>
           </div>
       </div>
       <img src="@/assets/images/file.png" alt="">

       <Imgs></Imgs>
    </div>    
</template>


<script>
import Imgs from './Img'
export default {
    methods: {
        handClick(){
            this.$router.go(-1)
        }
    },
    components:{
        Imgs
    }
}
</script>



<style lang="scss" scoped>
    .handerBar{

        img{
    
            width:750px;
            height:220px;
        }
        .detail{
            
            top:0;
            left:0;
            display: flex;
            width:750px;
            height:102px;
            background: #06c1ae;
            justify-self: center;
            align-items: center;
            .box{
                width:100px;
                height:102px;
                text-align: center;
                margin-top:30px;
                span{
                    font-size: 70px;
                    font-weight: 100px;
                    color:white;
                    
                }
            }
            .box2{
                width:453px;
                height:102px;
                font-size: 36; 
                color:white;
                font-weight: 400;
                text-align: center;
                line-height: 102px;
            }
            .box3{
               width:94px;
                height:102px;
                text-align: center;
                margin-top:20px;
                span{
                    font-size: 48px;
                    color: white;
                    
                }
                p{
                    font-size: 20px;
                    color: white;
                    margin-top:-5px;
                }
            }
            .box4{
                width:94px;
                height:102px;
                text-align: center;
                margin-top:20px;
                span{
                    font-size: 48px;
                    color: white;
                    
                }
                p{
                    font-size: 20px;
                    color: white;
                    margin-top:-5px;
                }
            }
        }
    }
</style>