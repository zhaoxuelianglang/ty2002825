<template>
    <div class="box" >
        <div class="box2">
            <img class="img_1" :src="caiping.img" alt="">
            <div class="box3">
                <div>
                    <h4>{{caiping.nm}}</h4>
                </div>
                
                <div class="box4">
                    <span class="img">
                        <img src="../../../src/assets/images/xing_1.png" alt="">
                        <img src="../../../src/assets/images/xing_1.png" alt="">
                        <img src="../../../src/assets/images/xing_1.png" alt="">
                        <img src="../../../src/assets/images/xing_1.png" alt="">
                        <img src="../../../src/assets/images/xing_1.png" alt="">
                        <img src="../../../src/assets/images/xing_2.png" alt="">
                    </span>
                    
                    <span class="money">￥63/人</span>
                    <span class="dizhi">长风街</span>
                </div>
                <div class="box5">
                    <span class="small">自助烧烤</span>
                    <span class="small_1">长风街烧烤龙虾人气榜第1名</span>
                    <span class="small_2">回头客多</span>
                </div>

                <div class="box6">
                    <span>支持外卖</span> 
                </div>
            </div>
        </div>

        <div class="two-box">
            <img src="../../../src/assets/images/tuan.png" alt="">
            <span>单人自助66.8元起</span>
        </div>
    </div>
</template>

<script>
export default {
    props:['caiping']
}
</script>





<style lang="scss" scoped>
    .box{
        display:column;
        width:750px;
        height:293px;
        border-bottom:1px solid #e5e5e5;
        .box2{
            height:188px;
            box-sizing: border-box;
            padding:24px 0 0 24px;
            display: flex;
            
          .img_1{
            width:160px;
            height:160px;
        }
          .box3{
              height:188px;
              margin-left:20px;
              width:542px;
              height:48px;
              
              h4{
                  font-size: 34px;
                  color:#333;
                  line-height: 48px;
                  font-weight: 400;
                  margin-top:5px;
              }
              .box4{
                  width:524px;
                  height:36px;
                  img{
                      width:24px;
                      height:24px;
                  }
                  .money{
                      width:87px;
                      height:32px;
                      font-size:24px ;
                      color:#666;
                  }
                  .dizhi{
                      width:72px;
                      height:32px;
                      font-size: 24px;
                      color:#666;
                      margin-left:165px;
                  }  
              }
              .box5{
                  width:524px;
                  height:33px;
                  .small{
                      font-size: 24px;
                      width:96px;
                      height:28px;
                      color:#666;
                      
                  }
                  .small_1{
                      font-size: 24px;
                      width:284px;
                      height:28px;
                      color:rgb(190, 158, 77);
                      background:rgb(251, 244, 228) ;
                      margin-left:10px;
                  }
                  .small_2{
                      font-size: 24px;
                      width:96px;
                      height:28px;
                      color:rgb(190, 158, 77);
                      background:rgb(251, 244, 228) ;
                      margin-left:10px;
                  }  
              }
              .box6{
                  margin-top:14px;
                  width:524px;
                  height:33px;
                  span{
                      width:96px;
                      height:32px;
                      font-size: 24px;
                      color:rgb(108, 186, 178);
                  }
              }
          }  
        }
       
       .two-box{
        //    box-sizing: border-box;
           display: flex;
           margin-left:24px;
           margin-top:30px;
           width:720px;
           height: 80px;
           justify-self:center;
           align-items: center; 
           img{
               width: 30px;
               height: 30px;
               margin-left:178px;
           }
           span{
               font-size: 22px;
               color:#666;
               margin-left:10px;
           }
       }
    }
</style>