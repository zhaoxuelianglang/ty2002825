<template>
    <div class="item" >
        <div >
            <img @click="handleClick(menu)" :src="menu.img" alt="">
        </div>

        <div >
            <h4>{{menu.nm}}</h4>
            <p>{{menu.wish}}</p>
            <div class="box">
                <span class="price">{{menu.price}}</span> 
                <span class="price_1">元</span>
                <span class="price_2">门市价:{{menu.price_1}}</span>
                <span class="price_3">已售{{menu.comingTitle}}</span>    
            </div>
        </div>
    </div>
</template>

<script>
export default{
    props:['menu'],
    methods:{
        handleClick(menu){
            this.$router.push("/detail")
        }
    } 
}
</script>





<style lang="scss" scoped>
    .item{
        display:flex;
        margin-left:20px;
        width:730px;
        height:220px;
        border-bottom: 1px solid #DDD8CE;
        img{
            margin-top:20px;
            width:180px;
            height:180px;
            line-height: 220px;
            text-align: center;
        }
        h4{
            font-size:30px;
            color:#333;
            font-weight: 400;
            margin-top:20px;
            margin-left:20px;
        }
        p{  
            margin-top:10px;
            margin-left:20px;
            font-size:24px;
        }
        .box{
            width:510px;
            margin-top:50px;
            margin-left:20px;
        .price{
           font-size:36px;
           color: #F60;
        }
        .price_1{
            margin-right:10px;
            font-size:24px;
            color: #F60;  
        }
        .price_2{
            font-size:24px;
            margin-right: 160px;      
        }
        .price_3{
            font-size:24px;
            float:right;  
        }
      }
        
    }
</style>