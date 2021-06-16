<template>
    <div class = "contact">
        <div class="container">
            <div class="contact-content">
                <h2 class="title">NETEL</h2>
                <p class="decs">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Odit illo eligendi maxime eos et minima id in atque</p>
                    <ul class="list-icon">
                        <li><i class="fas fa-phone"></i><span>010-020-0340</span></li>
                        <li><i class="far fa-envelope"></i><span>senko735099956@gmail.com</span></li>
                        <li><i class="fas fa-globe-asia"></i><span>www.elzeroacademy.com</span></li>
                    </ul>
            </div>
             <div class="contact-content">
                <h2 class="title">Useful Link</h2>
                    <ul class = "list-icon">
                        <li>HTML5 Templates</li>
                        <li>CSS3 Tricks</li>
                        <li>Desian Blogs</li>
                        <li>Animations</li>
                    </ul>
            </div>
             <div class="contact-content">
                <h2 class="title">Newsletter</h2>
                <p class="decs">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Odit illo eligendi maxime eos et minima id in atque</p>
                    <button  class="btn-details">Enter Your Email</button>
                    <button  class="btn-submit">Submit</button>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name:'Contact',
    
}
</script>
<style lang="scss" scoped>
.contact{
    width:100%;
    height:500px;
    background:#1d1d1d;
    display:flex;
    align-items: center;
    overflow:hidden;
    .container{
       
        .contact-content{
        width:29.333%;
        
        float:left;
        margin:0px 2%;
        color:#707070;
        text-align:left;
        .title{
            color:#fff;
            margin:20px 0;
        }
        .decs{
            margin:0 0 20px 0;
            width:90%;
            line-height:22px;
            
        }
        .list-icon{
            li{
                margin-bottom:20px;
                font-family:Arial, Helvetica, sans-serif;
                font-weight: bold;
                i{
                    margin-right: 10px;
                }
            }
        }
        .btn-details,.btn-submit{
            display:block;
            margin-bottom:20px;
            background: none;
            text-align: left;
            padding:10px;
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
        .btn-details{
            width:200px;
        }

    }
    }
    
}
</style>