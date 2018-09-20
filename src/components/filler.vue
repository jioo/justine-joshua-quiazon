<template>
    <section>
        <v-parallax :src="require('@/assets/images/filler-blurred.jpg')" height="450" alt="filler">
            <v-layout row wrap align-center justify-center class="has-elevation">
                <v-flex xl6 lg6 md8 offset-xs-3>
                    <blockquote class="title white--text mb-3 text-xs-center">
                        <v-icon class="white--text">format_quote</v-icon>
                        {{ quote }}
                        <v-icon class="white--text">format_quote</v-icon>
                    </blockquote>
                    <p class="text-xs-right">{{ quoteBy }}</p>
                </v-flex>
            </v-layout>
            <vue-particles 
                v-if="currentBreakpoint != 'xs'"
                color="#FF9800"
                shapeType="polygon"
                :clickEffect="false" 
                :linesDistance=90 ></vue-particles>
        </v-parallax>
    </section>
</template>

<script>
    export default {
        data () {
            return {
                quote: 'Computer programming is an art, because it applies accumulated knowledge to the world, ' +
                'because it requires skill and ingenuity, and especially because it produces objects of beauty. ' +
                'A programmer who subconsciously views himself as an artist will enjoy what he does and will do it better.',
                quoteBy: 'Donald Knuth'
            }
        },

        computed: {
            currentBreakpoint () {
                return this.$vuetify.breakpoint.name
            }
        }
    }
</script>

<style scoped>
    #particles-js {
        position: absolute;
        width: 100%;
        height: 100vh;
        right: 3px;
    }
</style>



