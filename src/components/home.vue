<template>
    <section>
        <v-img
            :src="require('@/assets/images/home-blurred.jpg')"
            :lazy-src="require('@/assets/images/place-holder.jpg')"
            :height="innerHeight"
            alt="home"
            v-resize="onResize">
            
            <web-gl></web-gl>
            <v-layout column align-center justify-center fill-height class="has-elevation">
                <img :src="require('@/assets/images/jio.png')" alt="jio" class="mb-4">

                <h1 class="display-1 white--text has-elevation mb-3">
                    {{ message }}
                </h1>

                <div class="headline" v-if="!isMobile">
                    <vue-typer :repeat="0" :text="description"></vue-typer>
                </div>

                <p class="headline white--text" v-else>
                    {{ description }}
                </p>
            </v-layout>
        </v-img>
    </section>
</template>

<script>
import WebGl from './web-gl'
import isMobile from 'ismobilejs'

export default {
    components: {
        WebGl
    },

    data () {
        return {
            innerHeight: window.innerHeight,
            message: 'Hi, I\'m Jio.',
            description: 'A Software Developer that writes clean, elegant, and efficient code.'
        }
    },

    computed: {
        isMobile () {
            return isMobile.any
        }
    },

    methods: {
        onResize () {
            this.innerHeight = window.innerHeight
        }
    }
}   
</script>
