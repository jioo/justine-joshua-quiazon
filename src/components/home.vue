<template>
    <section>
        <v-parallax :src="require('@/assets/images/home-blurred.jpg')" v-resize="onResize" :height="innerHeight" alt="home">
            <web-gl></web-gl>
            <v-layout column align-center justify-center class="has-elevation">
                <img :src="require('@/assets/images/jio.png')" alt="jio" class="mb-4">

                <h1 class="display-1 mb-3">
                    {{ message }}
                </h1>

                <div class="headline" v-if="currentBreakpoint != 'xs'">
                    <vue-typer :repeat="0" :text="description"></vue-typer>
                </div>

                <p class="headline" v-else>
                    {{ description }}
                </p>
            </v-layout>
        </v-parallax>
    </section>
</template>

<script>
    import WebGl from './web-gl'

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
            currentBreakpoint () {
                return this.$vuetify.breakpoint.name
            }
        },

        methods: {
            onResize () {
                this.innerHeight = window.innerHeight
            }
        }
    }   
</script>
