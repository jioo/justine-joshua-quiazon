<template>
    <section>
        <v-img
            :src="require('@/assets/images/home-blurred.jpg')"
            :lazy-src="require('@/assets/images/place-holder.jpg')"
            :height="innerHeight"
            alt="home"
        >
            
            <v-layout
                class="has-elevation" 
                column 
                align-center 
                justify-center 
                fill-height
                px-4 
            >
                <img :src="require('@/assets/images/jio.png')" alt="jio" class="mb-4">
                <h1 class="display-1 white--text has-elevation mb-3" v-text="message"></h1>
                <p class="headline white--text text-xs-center" v-text="description"></p>
            </v-layout>
        </v-img>
    </section>
</template>

<script>
export default {
    data () {
        return {
            innerHeight: window.innerHeight,
            message: 'Hi, I\'m Jio.',
            description: 'A Software Developer that writes clean, elegant, and efficient code.'
        }
    }
}   
</script>
