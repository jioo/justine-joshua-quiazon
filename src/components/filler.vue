<template>
    <section>
        <v-img
            :src="require('@/assets/images/filler-blurred.jpg')"
            :lazy-src="require('@/assets/images/place-holder.jpg')"
            height="450"
            alt="filler"
        >
            <v-layout
                class="has-elevation" 
                row wrap 
                align-center 
                justify-center 
                fill-height 
            >
                <v-flex xl6 lg6 md8 offset-xs-3>
                    <blockquote class="title white--text mb-3 text-xs-center">
                        <v-icon class="white--text">format_quote</v-icon>
                        {{ quote }}
                        <v-icon class="white--text">format_quote</v-icon>
                    </blockquote>
                    <h4 class="subheading orange--text text--lighten-1 text-xs-center">- {{ quoteBy }}</h4>
                    <div class="text-xs-center white--text" v-for="(item, index) in titles" :key="index">
                        {{ item.name }}
                    </div>
                </v-flex>
            </v-layout>
        </v-img>
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
    }
}
</script>



