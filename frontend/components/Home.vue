<template>
  <div id="app" style = "height: 500px">
    <v-app id="inspire">
      <v-card
        max-width="650"
        class="mx-auto"
      >
        <v-list-item>
          <v-list-item-content class="headline">
            {{news.title}}
          </v-list-item-content>
        </v-list-item>
  
        <v-img
          v-bind:src = add
          height="194"
        ></v-img>
  
        <v-card-text>
          {{news.description}}
        </v-card-text>
  
        <v-card-actions>
          <v-btn
            text
            color="deep-purple accent-4"
            v-bind:href='news.url'
          >
            Перейти к источнику
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
         </v-card-actions>
       </v-card>
    </v-app>
  </div>
</template>

<script lang="ts">
export default ({
  data: () => ({
      show: false,
  }),

  props: ['news'],
  computed:
  {
    add()
    {
      if(this.news.urlToImage != null)
      {
        return this.news.urlToImage
      }
      else
      {
        return "/v.png"
      }
    }
  }
})
</script>