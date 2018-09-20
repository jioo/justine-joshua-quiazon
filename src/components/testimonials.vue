<template>
    <section>
        <v-container grid-list-xl>
            <v-layout row wrap justify-center my-5 class="text-xs-center">

                <v-flex xs12 my-5>
                    <h2 class="headline orange--text text--darken-3">Testimonials</h2>
                </v-flex>

                <v-flex xl6 lg6 md8 offset-xs-3 mb-5>
                    <v-card flat class="transparent">
                        <v-card-text>
                            <blockquote class="subheading mb-4">
                                <v-icon>format_quote</v-icon>
                                {{ testimonial }}
                                <v-icon>format_quote</v-icon>
                            </blockquote>
                        </v-card-text>

                        <v-card-text>
                            <v-avatar color="indigo" :size="70" class="mb-3">
                                <v-icon dark>account_circle</v-icon>
                            </v-avatar>
                            <h4 class="subheading orange--text text--darken-3">{{ name }}</h4>
                            
                            <h4 v-for="(item) in titles" :key="item.key">
                                {{ item.name }}
                            </h4>

                            <v-tooltip top v-for="(item, index) in externalUrl" :key="index">
                                <v-btn flat small icon :color="item.color" slot="activator" 
                                @click="redirectTo(item.url)" :aria-label="item.tooltip">
                                    <v-icon :small="item.smallIcon" >{{ item.icon }}</v-icon>
                                </v-btn>
                                <span>{{ item.tooltip }}</span>
                            </v-tooltip>

                        </v-card-text>
                    </v-card>
                </v-flex>

            </v-layout>
        </v-container>
    </section>
</template>

<script>
    export default {
        data () {
            return {
                name: 'Harold Javier',
                position: 'General Manager, BDF Corporation',
                titles: [
                    { key:'t-1', name: 'General Manager, BDF Corporation' },
                    { key:'t-2', name: '.NET Trainer and Developer' }
                ],
                testimonial: 'Lorem ipsum sit amet, his saepe ubique inermis et, in eam stet possim. Ex liber ' +
                'iisque mediocrem vix. Vix mollis omnesque ex. Duo ne duis eius, his ex atqui soluta ' + 
                'insolens. Meis habemus cum an.',
                externalUrl: [
                    { 
                        tooltip: 'Website', 
                        icon: 'fas fa-globe',
                        smallIcon: true, 
                        color: 'grey darken-2', 
                        url: 'http://www.haroldjavier.com/'
                    },
                    { 
                        tooltip: 'Blog', 
                        icon: 'fab fa-blogger', 
                        color: 'orange darken-2', 
                        url: 'http://dotnetfrommanila.blogspot.com/'
                    },
                    { 
                        tooltip: 'Linkedin', 
                        icon: 'fab fa-linkedin', 
                        color: 'blue darken-1', 
                        url: 'https://www.linkedin.com/in/harold-javier-096b126/'
                    }
                ]
            }
        },

        methods: {
            redirectTo (url) {
                window.open(url, '_blank')
            }
        }
    }
</script>