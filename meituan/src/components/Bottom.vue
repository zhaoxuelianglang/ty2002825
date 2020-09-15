<template>
    <div class="big">
        <div class="city_1">
            <span class="city_2">城市:</span>
            <span class="img">
                <img src="https://p1.meituan.net/travelcube/c6c04160817d530ecddf9f86b158106e2032.png" alt="">
            </span>
            <span class="city_3">
                <router-link  tag="li" to="/city">太原</router-link>
            </span>
        </div>

        <ul class="nav">
            <router-link tag="li" to="">首页</router-link>
            <router-link tag="li" to="">我的</router-link>
            <router-link tag="li" to="">美团下载</router-link>
            <router-link tag="li" to="">电脑版</router-link>
            <router-link tag="li" to="">帮助</router-link>
        </ul>


    </div>
</template>


<style lang="scss" scoped>
    .big{
        width:750px;
        height:398px;
        // border:1px solid black;
        padding:0 20px 40px;
        margin-top:40px;
        .city_1{
            margin-left:30px;
            display:flex;
            width:680px;
            height:54px;
            .city_2{
                font-size:26px;
                margin-right:15px;
            }
            img{
                width:24px;
                height:27px;
                 margin-right:8px;
            }
            .city_3{
                font-size:26px;
            }
        }
    }

    .nav{
        display:flex;
        margin-left:30px;
        display:flex;
        width:710px;
        height:54px;
        li{
            display:flex;
            font-size: 26px;
            color:#FE8C00;
            
            flex:1;
        }
    }
</style>