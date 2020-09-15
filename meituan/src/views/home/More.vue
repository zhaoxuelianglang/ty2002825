<template>
    <div class="more">
        <router-link class="more_3" to="/classify">
            <span class="more_1">查看全面团购</span>
            <span class="more_2">
                <van-icon  name="arrow" />
            </span>
        </router-link>
    </div>

</template>


 <style lang="scss" scoped>
    .more{
        box-sizing: border-box;
        width:730px;
        height:80px;
        border-bottom: 5px solid  #DDD8CE;
        margin-left:20px;
        padding-right:20px;
        .more_3{
            display:flex;
            justify-content: space-between;
            line-height: 80px;
            .more_1{
            
            
            color:#FE8C00
        }
        .more_2{
            display: block;
            width:20px;
            height:80px;
            color:#FE8C00
        }
        }
        
    }
</style>