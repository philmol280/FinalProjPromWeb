<template>
  <div id="app">
    <v-navigation-drawer color="dark"
                         dark
                         expand-on-hover
                         hide-overlay
                         permanent
                         right
                         app>
      <v-list nav shaped dense>
        <v-list-item two-line>
          <v-list-item-avatar>
          </v-list-item-avatar>
          <v-list-item-content class="text-left">
            <v-list-item-title class="font-weight-black">News Aggregator</v-list-item-title>
            <v-list-item-subtitle></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider class="my-3"></v-divider>

        <v-list-item link to="/">
          <v-list-item-icon>
            <v-icon>mdi-home-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-left">Актуально</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/profile">
          <v-list-item-icon>
            <v-icon>mdi-account-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-left">Мой профиль</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/login">
          <v-list-item-icon>
            <v-icon>mdi-account-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-left">Войти</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider class="my-3"></v-divider>

        <v-list-item>
          <v-list-item-content class="text-left">
            <v-list-item-title class="font-weight-black">Фильтры</v-list-item-title>
            <v-list-item-subtitle></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/business">
          <v-list-item-icon>
            <v-icon>mdi-currency-usd</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-left">Бизнес</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
        <v-list-item link to="/entertainment">
          <v-list-item-icon>
            <v-icon>mdi-emoticon-happy-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-left">Развлечения</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/health">
          <v-list-item-icon>
            <v-icon>mdi-cards-heart</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-left">Здоровье</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/science">
          <v-list-item-icon>
            <v-icon>mdi-flask-empty</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-left">Наука</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/sports">
          <v-list-item-icon>
            <v-icon>mdi-ski-cross-country</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-left">Спорт</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/technology">
          <v-list-item-icon>
            <v-icon>mdi-head-question</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-left">Технологии</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <Home v-for="post in news" 
          :key="post.url"
          :news="post"/>
  </div>
</template>

<script>
import Home from '@/components/Home'
export default ({
  data(){
    return{
      news: null
    }
  },
  components: {
    Home
  },
  mounted(){
    this.$axios.get('https://newsapi.org/v2/top-headlines?country=ru&category=science&apiKey=d7f41a32c26b4bbfb596d58b1a54c766').then((response)=>{
      console.log('response', response)
      this.news = response.data.articles
    }).catch(err =>{
      console.log('errr', err)
    })
  }
})
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>