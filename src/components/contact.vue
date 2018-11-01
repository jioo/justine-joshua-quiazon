<template>
    <section class="orange lighten-5">
        <v-container grid-list-xl>
            <v-layout 
                row wrap 
                justify-center 
                class="my-5 text-xs-center"
            >
                <v-flex xs12>
                    <div class="my-3">
                        <h2 class="headline orange--text text--darken-3">Need a Freelance Software Developer?</h2>
                    </div>
                </v-flex>

                <v-flex 
                    md3 sm8 xs12 
                    v-for="(contact) in contacts" 
                    :key="contact.value" class="my-2"
                >
                    <v-card 
                        dark ripple hover 
                        @click.prevent.native="copyToClipboard(contact.value)" 
                        color="grey darken-2" 
                        class="pointer rounded-card"
                    >
                        <v-card-text>
                            <v-icon x-large color="orange">{{ contact.icon }}</v-icon> <br />
                            <h3 class="mt-2">{{ contact.value }}</h3>
                        </v-card-text>
                    </v-card>
                </v-flex>

                <v-flex class="mt-5">
                    <v-card flat class="transparent">
                        <v-card-text>
                            <h3 class="orange--text text--darken-3">Quick Actions</h3>
                            <span>Click the icons to:</span>
                        </v-card-text>
                        <v-card-actions>
                            <v-layout row wrap>
                                <v-flex 
                                    md3 sm3 xs12 offset-sm2 
                                    v-for="(action, index) in actions" 
                                    :key="index"
                                >
                                    <v-tooltip top>
                                        <v-btn 
                                            flat large icon 
                                            :color="action.color" 
                                            slot="activator" 
                                            @click.prevent="redirectTo(action.url)" 
                                            :aria-label="action.tooltip"
                                        >
                                            <v-icon large>{{ action.icon }}</v-icon>
                                        </v-btn>
                                        <span>{{ action.tooltip }}</span>
                                    </v-tooltip>
                                    <br />
                                    <span class="subheading">{{ action.description }}</span>
                                </v-flex>
                            </v-layout>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </section>
</template>

<script>
import { EventBus } from '@/event-bus.js'
import Common from '@/mixins/common.js'

export default {
    mixins: [ Common ],

    data () {
        return {
            contacts: [
                {
                    icon: 'email',
                    value: 'jio.qzn@gmail.com'
                },
                {
                    icon: 'phone',
                    value: '09454253187'
                },
                {
                    icon: 'location_on',
                    value: 'Las Piñas City, Philippines'
                },
            ],

            actions: [
                { 
                    tooltip: 'Messenger', 
                    icon: 'fab icon fa-facebook-messenger', 
                    color: 'blue', 
                    description: 'Send me a message request.',
                    url: 'https://m.me/jio.quiazon'
                },
                { 
                    tooltip: 'Gmail', 
                    icon: 'fab icon fa-google', 
                    color: 'red', 
                    description: 'Email me with your Gmail account.',
                    url: 'https://mail.google.com/mail/?view=cm&fs=1&to=jio.qzn@gmail.com'
                }
            ]
        }
    },

    methods: {
        copyToClipboard (text) {
            this.$copyText(text).then(function (e) {
                EventBus.$emit('toggle-snackbar', 'Copied to clipboard!')
            }, function (e) {
                console.log(e)
            })
        }
    }
}
</script>

<style scoped>
    .rounded-card {
        border-radius:40px;
    }
</style>
