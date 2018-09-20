<template>
    <section class="orange lighten-5">
        <v-container>
            <v-layout row wrap align-center my-5>
                <v-flex xs12 md4 sm4 v-for="(item, index) in items" :key="index" my-5>
                    <custom-card
                        :title="item.title" 
                        :description="item.description" 
                        :icon="item.icon" 
                        :items="item.list">
                    </custom-card>
                </v-flex>
            </v-layout>
        </v-container>
    </section>
</template>

<script>
    import CustomCard from './custom-card'

    export default {
        components: {
            CustomCard
        },

        data () {
            return {
                items: [
                    { 
                        title: 'Languages',
                        description: 'Languages & some libraries I frequently use.',
                        icon: 'library_books',
                        list: [
                            { name: 'HTML' }, 
                            { name: 'CSS' },
                            { name: 'Javascript' }, 
                            { name: 'C#' },
                            { name: 'PHP' }, 
                            { name: 'SQL' },
                            { name: 'LINQ' },
                            { name: 'jQuery' },
                            { name: 'JWT' },
                            { name: 'Vuex' },
                            { name: 'AutoMapper' },
                            { name: 'Axios' }
                        ]
                    },
                    { 
                        title: 'Frameworks',
                        description: 'Partial list of my favorite frameworks.',
                        icon: 'apps',
                        list: [
                            { name: 'Asp.Net MVC' }, 
                            { name: '.Net Core' }, 
                            { name: 'Identity' },
                            { name: 'Entity' },
                            { name: 'OAuth2' },
                            { name: 'Vue' },
                            { name: 'Nuxt' },
                            { name: 'Vuetify' },
                            { name: 'Bootstrap' },
                            { name: 'Laravel' }, 
                            { name: 'CodeIgniter' }
                        ]
                    },
                    { 
                        title: 'Tools',
                        description: 'Tools that make my works efficient.',
                        icon: 'build',
                        list: [
                            { name: 'VS Code' },
                            { name: 'Visual Studio' },
                            { name: 'VS Team Services' },
                            { name: 'Git' },
                            { name: 'Npm' },
                            { name: 'Vue-cli' },
                            { name: 'Webpack' },
                            { name: 'Xampp ' },
                            { name: 'IIS' }
                        ]
                    }
                ],
            }
        }
    }
</script>

