
<template>
    <div class="box">
          <ul class="all">
            <li @click="allClick()">全部类目</li>
            <li>附近商家</li>
            <li>智能排序</li>
            <li>筛选</li>  
          </ul>


            <div class="box5" v-show="$store.state.showMenu">
                 <div class="box1">
                    <span @click="back()" class="tubiao" >
                
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



                 <ul class="all">
                    <li @click="allClick()">全部类目</li>
                    <li>附近商家</li>
                    <li>智能排序</li>
                    <li>筛选</li>  
                </ul>    



            <ul class="all_1" >
                <li>
                    <p>全部美食</p> 
                    <span>5944</span>
                 </li>
                <li>
                    <p>小吃快餐</p>
                    <span>5944</span>
                </li>
                <li>
                    <p>面包甜点</p>
                    <span>5944</span>
                </li>
                <li>
                    <p>火锅</p>
                    <span>5944</span>
                </li>
                <li>
                 <p>生日蛋糕</p>
                 <span>5944</span>
                </li>
                <li>
                    <p>其他美食</p>
                    <span>5944</span>
                </li>
                <li>
                 <p>聚餐宴请</p>
                 <span>5944</span>
                </li>
                <li>
                    <p>烧烤烤串</p>
                    <span>5944</span>
                </li>
                <li>
                    <p>更多地方菜</p>
                    <span>5944</span>
                </li>
                <li>
                    <p>川湘菜</p>
                    <span>5944</span>
                </li>
            </ul> 
         


        </div>


    </div>
</template>>



<script>
export default {
    methods:{
        allClick(){
            this.$store.commit('setMenu',true)    
        },
        back(){
            this.$router.go(-1)
            this.$store.commit('setMenu',false)
        },
        go(){
            this.$router.push({path:'/my'})
        }
    }
}
</script>    








<style lang="scss" scoped>
    .box{  
          position: relative;
          height:84px;



        .all{ 
            
            width:750px;
            
            border-bottom: 1px solid #666;
            display: flex;
            li{ 
                position: relative;
                width:187px;
                height:84px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 28px;
                color:#666;
                &::before{
                    position: absolute;
                    content: '';
                    border-width:12px; 
                    border-color:#666 transparent transparent transparent;
                    top:38px;
                    right:0;
                    border-style: solid;
                }
            }
            li:last-child{
                width: 130px;
            }
        }
        .box5{  
                height:700px;
                position: fixed;
                top:0;
                left:0;
                background:white;
                overflow: scroll;
                z-index: 1;
            .box1{
                display:flex;
                width:750px;
                height:90px;
                border-bottom:1px solid gray;
                justify-content: space-around;
                align-items: center;
                top:0;
                
            .tubiao{
                font-size:45px;
                color:#06c1ae;
                }
            .tubiao_1{
            font-size:45px;
            color:#06c1ae;
            }
            .box2{
            
                display:flex;
                width:540px;
                height:60px;
            // border:1px solid red;
                border-radius: 25px;
                justify-content: center;
                align-items: center;
                background: #ebeced;
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
        }
        


        .all_1{
            // position:fixed;
            width:750px;
            height:88px;
            display:flex;
            flex-wrap: wrap;
            
            top:0;
            left:0;
            li{
                display:flex;
                
                p{  
                    margin-left:50px;
                    width:612px;
                    height:86px;
                    line-height: 86px;
                }
                span{
                     height:86px;
                     line-height: 86px;
                     font-size: 24px;
                }
            }
        }
    }
</style>