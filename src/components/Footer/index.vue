<template>
    <div class="footer">
        <div class="container">
        <div class="copy-r">
           Copyright 2084 Company Name
        </div>
        <div class="footer-icon">
        <div class="icons"><i class="fab fa-facebook-f"></i></div>
         <div class="icons"><i class="fab fa-twitter"></i></div>
          <div class="icons"><i class="fab fa-youtube"></i></div>
           <div class="icons"><i class="fab fa-instagram"></i></div>
            <div class="icons"><i class="fab fa-github"></i></div>
            <div class="icons"><i class="far fa-envelope"></i></div>
        </div>
     </div>
    </div>
</template>

<script>
export default {
    name:'Footer'
}
</script>

<style lang="scss" scoped>
 .footer{
       width:100%;
       height:70px;
       overflow:hidden;
       background:#0f0f0f;
       .copy-r{
           color:#707070;
           font-family:Arial, Helvetica, sans-serif;
           
           width:50%;
           float:left;
           line-height:70px;
           font-size:16px;
           font-weight:bold;
           text-align:left;
       }
       .footer-icon{
           float:right;
           width:50%;
           height:70px;
           overflow: hidden;
           display:flex;
           align-items: center;
           .icons{
               width:30px;
               height:30px;
               background:#2c2c2c;
               float:left;
               margin:0px 2px;
               line-height:30px;
               color:#707070;
               cursor:pointer;
               &:hover{
                   color:#fff;
                   background: #111111;
               }

           }

       }


     }
</style>