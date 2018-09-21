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
                    <h4 class="subheading orange--text text--lighten-1 text-xs-center">- {{ quoteBy }}</h4>
                    <div class="text-xs-center" v-for="(item, index) in titles" :key="index">
                        {{ item.name }}
                    </div>
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
                quote: 'We like to think we spend our time power typing, ' +
                'but we actually spend most of our time staring into the abyss.',
                quoteBy: 'Douglas Crockford',
                titles: [
                    { name: 'principal discoverer of JSON, ' },
                    { name: 'creator of JSLint' }
                ]
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



