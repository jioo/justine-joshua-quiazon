<template>
    <v-footer dark height="auto">
        <v-card class="flex" flat tile>
            <v-card-title class="orange justify-center">
                <v-btn dark icon v-for="(item, index) in socialPlugins" :key="index" 
                class="mx-3" :aria-label="item.label">
                    <v-icon size="24px" @click="redirectTo(item.url)">{{ item.icon }}</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <strong class="subheading">{{ currentVersion }} &nbsp;</strong>
                <v-icon size="24px" @click="redirectTo(repository)">fab fa-github</v-icon>
            </v-card-title>

            <v-card-actions class="grey darken-3 justify-center">
                <div class="white--text body-2">
                    <v-icon small class="white--text">code</v-icon>
                    with
                    <v-icon small class="red--text">favorite</v-icon>
                    by me
                    <v-icon small class="white--text">copyright</v-icon>
                     2018
                </div>
            </v-card-actions>
        </v-card>
    </v-footer>
</template>

<script>
    export default {
        data() {
            return {
                currentVersion: `v${process.env.VERSION}`,
                repository: 'https://github.com/jioo/justine-joshua-quiazon',
                socialPlugins: [
                    {
                        label: 'Facebook',
                        icon: 'fab fa-facebook',
                        url: 'https://www.facebook.com/jio.quiazon'
                    },
                    {
                        label: 'Github',
                        icon: 'fab fa-github',
                        url: 'https://github.com/jioo'
                    },
                    {
                        label: 'Linkedin',
                        icon: 'fab fa-linkedin',
                        url: 'https://www.linkedin.com/in/justine-joshua-quiazon-13a000145/'
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

