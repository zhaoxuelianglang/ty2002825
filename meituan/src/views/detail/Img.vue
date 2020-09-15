<template>
    <div class="nav">
        <img src="@/assets/images/1.jpg" alt="">
        <div class="box">
            <h1>金绣源粥品</h1>
            <span>50元代金券1张，可叠加</span>
        </div>

        <div class="qianggou">
            <div class="num">45</div>
            <span class="price">元</span>
            <span class="price_1">门市价:50元</span>
            <div class="qianggou_2">立即抢购</div>
        </div>
        
        <div class="tuihuo">
            <div class="tuikuan">
                <span class="iconfont">&#xe700;</span>
                <p>支持随时退款</p>
            </div>
            <div class="zhifu">
                <span class="iconfont">&#xe61b;</span>
                <p>支持过期自动退</p>
            </div>
            <div class="yishou">
                <span class="iconfont">&#xe652;</span>
                <p>已售43781</p>
            </div>
        </div>

        <div class="kong"></div>

        <div class="taocan">套餐</div>
    </div>
</template>



<style lang="scss" scoped>
    .nav{
        img{
            position: relative;
            width:750px;
            height:453px;
      }
      .box{
          position: absolute;
          width:690px;
          height:123px;
          left:20px;
          bottom:540px;
           h1{
                display:block;
                width:690px;
                height:42px;
                font-size: 35px;
                color:white;
                margin-bottom:15px;
            }
            span{
                font-size: 28px;
                color: white;
                font-weight: 400;
            }
      }
      .qianggou{
          box-sizing: border-box;
          width:750px;
          height:122px;
          border-bottom:1px solid  #ddd8ce;
          display:flex;
          align-items: center;
          padding:28px 20px; 
          .num{
              width:74px;
              height:74px;
              font-size: 66px;
              text-align: center;
              color: #06c1ae;

          }
          .price{
              margin-top:20px;
              color: #06c1ae;
              margin-right: 8px;
              font-size: 28px;
          }
          .price_1{
              margin-top:20px;
              margin-right:146px;
              font-size: 28px;
              color:#999;
          }
          .qianggou_2{
              width:300px;
              height:80px;
              border-radius:5px;
              text-align: center;
              line-height: 80px;
              background:  #f90;
          }
      }
      .tuihuo{
          display: flex;
          box-sizing: border-box;
          width:750px;
          height:186px;
        //   border:1px solid black;
          padding: 28px 20px;
          flex-wrap: wrap;
          .tuikuan{
              display: flex;
              width:350px;
              height:56px;
              line-height: 56px;
              span{
                  font-size: 50px;
                  color:#6bbd00;
                  margin-right: 5px;
              }
              p{
                    font-size: 28px;
                    color:#6bbd00; 
              }
          }
          .zhifu{
              display:flex;
              width:355px;
              height:56px;
              line-height: 56px;
                span{
                  font-size: 40px;
                  color:#6bbd00;
                  margin-right: 10px;
              }
              p{
                    font-size: 28px;
                    color:#6bbd00; 
              }
          }
          .yishou{
              display:flex;
              width:355px;
              height:56px;
              line-height: 56px;
              margin-left:5px;
                span{
                  font-size: 38px;
                  color:#666;
                  margin-right: 10px;
              }
              p{
                    font-size: 28px;
                    color:#666; 
              }
          }
      }
      .kong{
          width:750px;
          height:20px;
          background: #f0efed;
      }
      .taocan{
          box-sizing: border-box;;
          width:750px;
          height:87px;
          padding:22px 20px 14px;
          font-size: 34px;
          color: #333;
          border-bottom:1px solid #ddd8ce;
      }  
    }
    
</style>