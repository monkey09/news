<template>
  <v-container fluid class="grey">
    <v-row v-if="!loaded" no-gutters>
      <v-col cols="12" sm="8" md="5" lg="3" class="mx-auto px-0 px-sm-3" v-for="index in 8" :key="index">
        <v-skeleton-loader
          class="mb-5"
          type="image, article"
        ></v-skeleton-loader>
      </v-col>
    </v-row>
    <v-row v-if="loaded">
      <v-col cols="12" sm="8" md="5" lg="3" class="mx-auto pt-0 px-0 px-sm-3" v-for="(article, index) in ordered_articles" :key="index">
        <Article :article="article" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Article from '../components/Article'

export default {
  name: 'Politics',
  data () {
    return {
      loaded: false,
      ordered_articles: null
    }
  },
  computed: {
    ...mapGetters(['articles'])
  },
  created () {
  this.getPolitics().then(() => {
    this.ordered_articles = this.articles.sort((a, b) => new Date(b.created_date) - new Date(a.created_date))
    this.loaded = true
  })
  },
  components: {
    Article,
  },
  methods: {
    ...mapActions(['getPolitics'])
  }
}
</script>
