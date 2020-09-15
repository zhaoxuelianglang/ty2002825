<template>
    <div class="header">
        <router-link class="city" tag="li" to="/city">太原</router-link>
        <router-link tag="li" to="/search" class="search">
            <span class="search_1">
                <van-icon  name="search" />
            </span>
            <span class="search_2"> 
	             请输入商家名、品类或者商圈...          	
            </span>
        </router-link>
        <router-link tag="li" to="/my" class="btn">
            <van-icon name="contact" />
        </router-link>
        

        
    </div>
</template> 

<style lang="scss" scoped>
    .header{
        width:100%;
        display:flex;
        flex: 1;
        justify-content: space-around;
        align-items: center;
        height:101px;
        background: #FE8C00;
        
        .city{
            width:100px;
            position: relative;
            &::before{
                position: absolute;
                content:'';
                border-width:12px; 
                border-color:#666 transparent transparent transparent;
                top:18px;
                left:70px;
                border-style: solid;
            }
            li{
            font-size:32px;
            color:#222222
            }
        }
        .search{
            display:flex;
            width:501px;
            border-radius:10px;
            height:64px;
            background:white;
            .search_1{
                display:flex;
                width:64px;
                height:60px;
                color:gray;
                justify-content: space-around;
                align-items: center;
                font-size:38px;
            }
            .search_2{
                display:flex ;
                font-size:27px;
                justify-content: space-around;
                align-items: center;
                color:gray;
            }
        }
        .btn{
            display: flex;
            width:50px;
            font-size:48px;
            justify-content: space-around;
            align-items: center;
        }
        

    }
</style>