<template>
    <div class="ad">
        <img src="@/assets/images/meituan.png" alt="">
        <div class="content">
            <h4>省钱利器 购物超划算</h4>
            <p>吃喝玩乐尽在美团</p>
        </div>
        <div class="btn">
                <button>
                去APP
                </button>
        </div>

    </div>
</template>


<style lang="scss" scoped>
      .ad{
          display:flex;
          background:#000000;
          justify-content: center;
          align-items: center;
          padding:0 25px 0 25px;
          img{
              width:72px;
              height:72px;
              
          }
          .content{
              margin-left:20px;
              flex:1;
              h4{
                margin-top:20px;
                font-size:26px;
                font-weight: 600;
                color:white;
            }
             p{
                margin-top:5px;    
                font-size:22px;
                color:white;
            }
          }
          .btn{
              display: flex;
              button{
                  justify-content: center;
                  align-items: center;
                  width:110px;
                  height:60px;
                  font-size:24px;
                  background: #FFD000;
                  border:none;
                  border-radius: 5px;  
              }
          }
          
      }
      

</style>