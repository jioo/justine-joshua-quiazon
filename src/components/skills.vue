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
                        { name: 'HTML', src: require('@/assets/images/icons/html5.jpg'), url: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5' },  
                        { name: 'CSS', src: require('@/assets/images/icons/css3.jpg'), url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3' }, 
                        { name: 'Javascript', src: require('@/assets/images/icons/javascript.jpg'), url: 'https://developer.mozilla.org/bm/docs/Web/JavaScript' },  
                        { name: 'C#', src: require('@/assets/images/icons/csharp.jpg'), url: 'https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/' }, 
                        { name: 'PHP', src: require('@/assets/images/icons/php.jpg'), url: 'http://php.net/' },  
                        { name: 'SQL', src: require('@/assets/images/icons/sql.jpg'), url: 'https://www.w3schools.com/sql/' }, 
                        { name: 'LINQ', src: require('@/assets/images/icons/dotnet.jpg'), url: 'https://msdn.microsoft.com/en-us/library/bb308959.aspx' }, 
                        { name: 'jQuery', src: require('@/assets/images/icons/jquery.jpg'), url: 'https://jquery.com/' }, 
                        { name: 'JWT', src: require('@/assets/images/icons/jwt.jpg'), url: 'https://jwt.io/' }, 
                        { name: 'Vuex', src: require('@/assets/images/icons/vue.jpg'), url: 'https://vuex.vuejs.org/' }, 
                        { name: 'AutoMapper', src: require('@/assets/images/icons/automapper.jpg'), url: 'https://automapper.org/' }, 
                        { name: 'Axios', src: require('@/assets/images/icons/axios.jpg'), url: 'https://github.com/axios/axios' }
                    ]
                },
                { 
                    title: 'Frameworks',
                    description: 'Partial list of my favorite frameworks.',
                    icon: 'apps',
                    list: [
                        { name: '.Net MVC 5', src: require('@/assets/images/icons/dotnet.jpg'), url: 'https://docs.microsoft.com/en-us/aspnet/mvc/overview/getting-started/introduction/getting-started' }, 
                        { name: '.Net Core', src: require('@/assets/images/icons/dotnetcore.jpg'), url: 'https://docs.microsoft.com/en-us/aspnet/core' }, 
                        { name: 'Identity', src: require('@/assets/images/icons/dotnet.jpg'), url: 'https://docs.microsoft.com/en-us/aspnet/core/security/authentication/identity' },
                        { name: 'Entity', src: require('@/assets/images/icons/dotnet.jpg'), url: 'https://msdn.microsoft.com/en-us/library/gg696172(v=vs.103).aspx' },
                        { name: 'Vue', src: require('@/assets/images/icons/vue.jpg'), url: 'https://vuejs.org/' },
                        { name: 'Nuxt', src: require('@/assets/images/icons/nuxt.jpg'), url: 'https://nuxtjs.org/' },
                        { name: 'Vuetify', src: require('@/assets/images/icons/vuetify.jpg'), url: 'https://vuetifyjs.com' },
                        { name: 'Bootstrap', src: require('@/assets/images/icons/bootstrap.jpg'), url: 'http://getbootstrap.com/' },
                        { name: 'Laravel', src: require('@/assets/images/icons/laravel.jpg'), url: 'https://laravel.com/' }, 
                        { name: 'CI', src: require('@/assets/images/icons/codeigniter.jpg'), url: 'https://www.codeigniter.com/' },
                        { name: 'Storyblok', src: require('@/assets/images/icons/storyblok.jpg'), url: 'https://www.storyblok.com/' }
                    ]
                },
                { 
                    title: 'Tools',
                    description: 'Tools that make my works efficient.',
                    icon: 'build',
                    list: [
                        { name: 'VS Code', src: require('@/assets/images/icons/vscode.jpg'), url: 'https://code.visualstudio.com/' },
                        { name: 'Visual Studio', src: require('@/assets/images/icons/visualstudio.jpg'), url: 'https://visualstudio.microsoft.com/' },
                        { name: 'Github', src: require('@/assets/images/icons/github.jpg'), url: 'https://github.com/' },
                        { name: 'VS Team Services', src: require('@/assets/images/icons/vsteamservices.jpg'), url: 'https://visualstudio.microsoft.com/team-services/' },
                        { name: 'npm', src: require('@/assets/images/icons/npm.jpg'), url: 'https://www.npmjs.com/' },
                        { name: 'vue-cli', src: require('@/assets/images/icons/vue.jpg'), url: 'https://cli.vuejs.org/' },
                        { name: 'webpack', src: require('@/assets/images/icons/webpack.jpg'), url: 'https://webpack.js.org' },
                        { name: 'xampp ', src: require('@/assets/images/icons/xampp.jpg'), url: 'https://www.apachefriends.org' },
                        { name: 'IIS', src: require('@/assets/images/icons/microsoft.jpg'), url: 'https://www.iis.net/' }
                    ]
                }
            ],
        }
    }
}
</script>

