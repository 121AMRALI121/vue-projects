<template>
    <div class = "home">
         
        <div class="container">
            <img :src ="image">
        <div class = "home-title">
            <h1 class="title">Welcome To<br><span class ="span">Ontel</span> Design Studio</h1>
        </div>

        <div class="home-content">
            <div class="items c3"  v-for ="detail in details" :key ="detail.id">
                <div class="logo"><i :class="detail.icon_name"></i></div>
                <h1 class = 'title'>{{detail.title}}</h1>
                <p class ='desc'>lorem10 JDKSJKJNKDLNKDKLNFKLNDKNKN</p>
                
            </div>

        </div>

      </div>
    </div>

</template>

<script>
import './style.scss';
import jsons from './data.json';
export default {
    name:'Home',
    data(){
        return{
            image:require('@/assets/images/portfolio-img10.jpg'),
            details:jsons
        }
    }
   
}
</script>