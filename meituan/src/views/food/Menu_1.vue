<template>
     <div class="menu">
        <ul>
        <router-link tag="li" to="">
            <div class="box">
                <span class="iconfont">&#xe601;</span>
            </div>
            <p>火锅</p>
        </router-link>

        <router-link tag="li" to="">
            <div class="box">
                 <span class="iconfont">&#xe603;</span>
            </div>
            <p>甜点饮品</p>  
        </router-link>
        <router-link tag="li" to="">
            <div class="box">
                 <span class="iconfont">&#xe6cd;</span>
            </div>
            <p>自助餐</p> 
        </router-link>
        <router-link tag="li" to="">
            <div class="box">
                 <span class="iconfont">&#xe613;</span>
            </div>
            <p>小吃快餐</p>  
        </router-link>
        <router-link tag="li" to="">
            <div class="box">
                 <span class="iconfont">&#xe67d;</span>
            </div>
            <p>西餐</p>  
        </router-link>
        <router-link tag="li" to="">
            <div class="box">
                 <span class="iconfont">&#xe806;</span>
            </div>
            <p>烧烤烤肉</p>  
        </router-link>
        <router-link tag="li" to="">
            <div class="box">
                 <span class="iconfont">&#xe635;</span>
            </div>
            <p>香锅烤鱼</p>  
        </router-link>
        <router-link tag="li" to="">
            <div class="box">
                 <span class="iconfont">&#xe809;</span>
            </div>
            <p>海鲜</p>  
        </router-link>
        </ul> 
        <router-view></router-view>


         
    </div>   
</template>

<script>
// import "@/assets/iconfont/iconfont.css"
export default {
    
}
</script>


<style lang="scss" scoped>
    .menu{
        width:750px;
        height:310px;
        ul{ 
            display: flex;
            flex-wrap: wrap;
            
            justify-content: space-around;
            align-items: center;
            li{ 
                // border: 1px solid black;
                width:182px;
                height:134px;
                margin-top:30px;
                .box{
                    width:80px;
                    height:80px;
                    border-radius: 50%;
                    background:#e9b81a;
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