<template>
    <div class = "header">
            <div class="navbar">
                <div class="container">
                <div class="nav-logo">
                    ELZ<span class = 'span'>ERO</span>
                </div>
                <div class="nav-menu">
                    <ul class="menu">
                        <router-link to ='/' tag = 'li'>Home</router-link>
                        <router-link to = '/about' tag = 'li' >About Us</router-link>
                        <router-link to = '/contact' tag = 'li'>Contact</router-link>
                    </ul>
                    
                </div>
            </div>
            
        </div>

    </div>
</template>


<script>
import './style.scss';
export default {
    name:'Header'
}
</script>


