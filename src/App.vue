<template>
  <v-app>
    <v-app-bar
      app
      color="dark"
      elevation="0"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="@/assets/monkey.svg"
          transition="scale-transition"
          width="55"
        />
      </div>
      <v-spacer></v-spacer>
      <div class="d-none d-lg-block">
        <v-btn text router to="/">HOME</v-btn>
        <v-btn text router to="/world">WORLD</v-btn>
        <v-btn text router to="/sports">SPORTS</v-btn>
        <v-btn text router to="/arts">ARTS</v-btn>
        <v-btn text router to="/food">FOOD</v-btn>
        <v-btn text router to="/movies">MOVIES</v-btn>
        <v-btn text router to="/politics">POLITICS</v-btn>
        <v-btn text router to="/technology">TECHNOLOGY</v-btn>
        <v-btn text router to="/travel">TRAVEL</v-btn>
        <v-btn text router to="/health">HEALTH</v-btn>
      </div>
      <v-switch
        inset
        class="mt-5 ml-3"
        v-model="$vuetify.theme.dark"
      ></v-switch>
      <v-app-bar-nav-icon class="d-lg-none" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer
      class="d-lg-none"
      v-model="drawer"
      fixed
      dark
      bottom
      temporary
    >
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item router to="/">
            <v-list-item-title>HOME</v-list-item-title>
          </v-list-item>
          <v-list-item router to="/world">
            <v-list-item-title>WORLD</v-list-item-title>
          </v-list-item>
          <v-list-item router to="/sports">
            <v-list-item-title>SPORTS</v-list-item-title>
          </v-list-item>
          <v-list-item router to="/arts">
            <v-list-item-title>ARTS</v-list-item-title>
          </v-list-item>
          <v-list-item router to="/food">
            <v-list-item-title>FOOD</v-list-item-title>
          </v-list-item>
          <v-list-item router to="/movies">
            <v-list-item-title>MOVIES</v-list-item-title>
          </v-list-item>
          <v-list-item router to="/politics">
            <v-list-item-title>POLITICS</v-list-item-title>
          </v-list-item>
          <v-list-item router to="/technology">
            <v-list-item-title>TECHNOLOGY</v-list-item-title>
          </v-list-item>
          <v-list-item router to="/travel">
            <v-list-item-title>TRAVEL</v-list-item-title>
          </v-list-item>
          <v-list-item router to="/health">
            <v-list-item-title>HEALTH</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main class="grey">
      <router-view />
    </v-main>
    <v-footer padless dark>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>Monkey</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      drawer: false
    }
  }
}
</script>
