<template>
    <section class="orange lighten-5">
        <v-container grid-list-xl>
            <v-layout row wrap justify-center class="my-5 text-xs-center">
                <v-flex xs12>
                    <div class="my-5">
                        <h2 class="headline orange--text text--darken-3">Need a Freelance Software Developer?</h2>
                        <p>Tap the icons to:</p>
                    </div>
                </v-flex>
                <v-flex md4 xs12 v-for="(contact, index) in contacts" :key="index">
                    <v-tooltip top>
                        <v-btn flat large icon :color="contact.color" slot="activator" 
                        @click="redirectTo(contact.url)" :aria-label="contact.tooltip">
                            <v-icon large>{{ contact.icon }}</v-icon>
                        </v-btn>
                        <span>{{ contact.tooltip }}</span>
                    </v-tooltip>
                    <br />
                    <span class="subheading">{{ contact.description }}</span>
                </v-flex>
            </v-layout>
        </v-container>
    </section>
</template>

<script>
    export default {
        data () {
            return {
                contacts: [
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
                        description: 'Email me with your Gmail account,',
                        url: 'https://mail.google.com/mail/?view=cm&fs=1&to=jio.qzn@gmail.com'
                    },
                    { 
                        tooltip: 'Yahoo', 
                        icon: 'fab icon fa-yahoo', 
                        color: 'purple', 
                        description: 'Or Yahoo account.',
                        url: 'http://compose.mail.yahoo.com/?to=jio.qzn@gmail.com'
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