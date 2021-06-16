<template>
    <div class = "father" :style="{backgroundImage:'url(${ imageHeader })'}" >
        <div class="about">
        <div class="container">
        <div class="about-img">
            <img :src="image">
        </div>
        <div class="about-content">
            <h2 class="title">Starting Business</h2>
            <p class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, corporis. Non pariatur distinctio error perspiciatis id ex eligendi, 
                laboriosam voluptas voluptate fugiat esse praesentium veniam voluptatibus velit nulla? Error, cum!</p>
            <button class="btn">learn more</button>
        </div>
    </div>
    </div>
</div>

</template>

<script>
export default {
    name:'About',
    data(){
        return{
        image:require('@/assets/images/about-img.jpg'),
        imageHeader:require('@/assets/images/about-header.jpg')
        }
    }
}
</script>

<style lang="scss" scoped>
.father{
    width:85%;
    margin:5px auto;
    height:90vh;
    position:relative;
    .about{
    width:80%;
    padding:0px;
    overflow: hidden;
    background: #1f1f1f;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%) ;
    .about-img{
        width:48%;
        float:left;
        height:300px;
        margin:0px;
        position: relative;
        left: -69px;
        img{
            width: 100%;
            height:100%;
        }

    }
    .about-content{
        width:48%;
        float:right;
        height:300px;
        padding:20px;
        
        
        .title{
            text-align: left;
            margin:10px 0;
            color:#d02d9e;
        }
        .desc{
            text-align: left;
            line-height: 22px;
            font-size:14px;

        }
        .btn{
            margin:20px 0px;
            background: none;
            width:300px;
            outline: none;
            padding:10px 20px;
             color:#707070;
            border:1px solid #707070;
            font-size:14px;
            font-weight:bold;
            cursor:pointer;
            &:hover{
                color:#fff;
                border:1px solid #fff;
            }
        }

        
    }
  } 

}

</style>