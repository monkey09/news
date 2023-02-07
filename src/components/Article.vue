<template>
  <v-card elevation="0" style="border-radius: 0">
    <template v-if="article.multimedia">
      <v-img :src="article.multimedia[0].url" min-height="200" max-height="400" class="grey lighten-2">
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </template>
    <v-card-title style="word-break: inherit">{{ article.title }}</v-card-title>
    <v-card-subtitle>
      <span class="clock--text caption">{{ article.created_date | moment("from") }}</span>
    </v-card-subtitle>
    <v-card-text>
      <p class="mt-3">{{article.abstract}}</p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'MainArticle',
  props: ['article']
}
</script>
