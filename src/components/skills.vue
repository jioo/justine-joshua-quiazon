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
                            { name: 'HTML', src: require('@/assets/images/icons/html5.png') },  
                            { name: 'CSS', src: require('@/assets/images/icons/css3.png') }, 
                            { name: 'Javascript', src: require('@/assets/images/icons/javascript.jpg') },  
                            { name: 'C#', src: require('@/assets/images/icons/csharp.jpg') }, 
                            { name: 'PHP', src: require('@/assets/images/icons/php.png') },  
                            { name: 'SQL', src: require('@/assets/images/icons/sql.png') }, 
                            { name: 'LINQ', src: require('@/assets/images/icons/dotnet.png') }, 
                            { name: 'jQuery', src: require('@/assets/images/icons/jquery.jpg') }, 
                            { name: 'JWT', src: require('@/assets/images/icons/jwt.png') }, 
                            { name: 'Vuex', src: require('@/assets/images/icons/vue.png') }, 
                            { name: 'AutoMapper', src: require('@/assets/images/icons/automapper.png') }, 
                            { name: 'Axios', src: require('@/assets/images/icons/axios.png') }
                        ]
                    },
                    { 
                        title: 'Frameworks',
                        description: 'Partial list of my favorite frameworks.',
                        icon: 'apps',
                        list: [
                            { name: 'Asp.Net MVC', src: require('@/assets/images/icons/dotnet.png') }, 
                            { name: '.Net Core', src: require('@/assets/images/icons/dotnet.png') }, 
                            { name: 'Identity', src: require('@/assets/images/icons/dotnet.png') },
                            { name: 'Entity', src: require('@/assets/images/icons/dotnet.png') },
                            { name: 'Vue', src: require('@/assets/images/icons/vue.png') },
                            { name: 'Nuxt', src: require('@/assets/images/icons/nuxt.png') },
                            { name: 'Vuetify', src: require('@/assets/images/icons/vuetify.png') },
                            { name: 'Bootstrap', src: require('@/assets/images/icons/bootstrap.png') },
                            { name: 'Laravel', src: require('@/assets/images/icons/laravel.png') }, 
                            { name: 'CodeIgniter', src: require('@/assets/images/icons/codeigniter.png') }
                        ]
                    },
                    { 
                        title: 'Tools',
                        description: 'Tools that make my works efficient.',
                        icon: 'build',
                        list: [
                            { name: 'VS Code', src: require('@/assets/images/icons/vscode.png') },
                            { name: 'Visual Studio', src: require('@/assets/images/icons/visualstudio.png') },
                            { name: 'Github', src: require('@/assets/images/icons/github.png') },
                            { name: 'VS Team Services', src: require('@/assets/images/icons/vsteamservices.jpg') },
                            { name: 'npm', src: require('@/assets/images/icons/npm.png') },
                            { name: 'vue-cli', src: require('@/assets/images/icons/vue.png') },
                            { name: 'webpack', src: require('@/assets/images/icons/webpack.png') },
                            { name: 'xampp ', src: require('@/assets/images/icons/xampp.png') },
                            { name: 'IIS', src: require('@/assets/images/icons/microsoft.png') }
                        ]
                    }
                ],
            }
        }
    }
</script>

