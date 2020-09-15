<template>
    <div class="nav">   
        <ul class="nav_1">
            <router-link tag="li" to="/food">
                <div class="box">
                    <span class="iconfont">&#xe61c;</span> 
                </div> 
                <p>美食</p>  
            </router-link>
            <router-link tag="li" to="">
                <div class="box">
                    <span class="iconfont">&#xe619;</span>
                </div>    
                <p>猫眼电影</p>
            </router-link>
            <router-link tag="li" to="">
                <div class="box">
                    <span class="iconfont">&#xe6a0;</span>
                </div>    
                <p>酒店</p>
            </router-link>
            <router-link tag="li" to="">
                <div class="box">
                    <span class="iconfont">&#xe64f;</span>
                </div>
                <p>休闲娱乐</p>
            </router-link>
            <router-link tag="li" to="">
                <div class="box">
                    <span class="iconfont">&#xe607;</span>
                </div>
                <p>外卖</p>
            </router-link>
            <router-link tag="li" to="">
                <div class="box">
                    <span class="iconfont">&#xe602;</span>
                </div>
               <p> KTV</p>
            </router-link>
            <router-link tag="li" to="">
                <div class="box">
                    <span class="iconfont">&#xe61a;</span>
                </div>
                <p>周边游</p>
            </router-link>
            <router-link tag="li" to="">
                <div class="box">
                    <span class="iconfont">&#xe62b;</span>
                </div>
               <p> 丽人</p>
            </router-link>
            <router-link tag="li" to="">
                <div class="box">
                    <span class="iconfont">&#xe613;</span>
                </div>
                <p>小吃快餐</p>
            </router-link>
            <router-link tag="li" to="">
                <div class="box">
                    <span class="iconfont">&#xe69e;</span>
                </div>
                <p>全部分类</p>
            </router-link>
           
        </ul>
         <router-view></router-view>
    </div> 
    
</template>


<style lang="scss" scoped>
    .nav{
        height:330px;
        .nav_1{
            width:100%;
            height: 200px;
            display:flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: center;
            // margin-top:25px;
            li{ 
                width:150px;
                height:140px;
                margin-top:30px;
                .box{
                    width:80px;
                    height:80px;
                    border-radius: 50%;
                    background:#fd9d21;
                    display:flex;
                    justify-content: center;
                    align-items: center;
                    margin:0 auto;
                    span{
                    display:flex;
                    flex-direction: column;
                    font-size:50px;   
                } 
                }
              p{  
                    font-size:24px;
                    text-align: center;
                }    
            }   
        }
    }
</style>