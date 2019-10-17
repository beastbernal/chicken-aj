<template>
  <v-app>
    <v-toolbar color="yellow" dense style="max-height: 50px;">
      <v-toolbar-title>
        <v-avatar>
          <img src="./assets/Chicken.png">
        </v-avatar>
      Los Huevos de AJ
      </v-toolbar-title>

      <div class="flex-grow-1"></div>


      <!-- <template>
        <v-btn icon>
          <v-icon>mdi-export-variant</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-delete-circle</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-plus-circle</v-icon>
        </v-btn>
      </template> -->
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <!-- <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <HelloWorld/>
    </v-content> -->
    <v-footer
      padless
      fixed
      absolute
      
    >
      <v-bottom-navigation
        style="padding-top:10px;"
        v-model="bottomNav"
      >
        <v-btn @click="changePath('/')">
          <span>Huevos</span>
          <v-icon color="yellow">mdi-egg</v-icon>
        </v-btn>
        <v-divider
          class="divider-egg"
          vertical
        ></v-divider>
        <v-btn @click="changePath('/losses')" >
          <span>Perdida</span>
          <v-icon color="red">mdi-bandage</v-icon>
        </v-btn>

        <v-divider
          class="divider-egg"
          vertical
        ></v-divider>
        <v-btn @click="changePath('/inventory')" >
          <span>Inventario</span>
          <v-icon color="teal">mdi-basket-outline</v-icon>
        </v-btn>

        
        <!-- <v-divider
          class="divider-egg"
          vertical
        ></v-divider>

        <v-btn>
          <span>Mando</span>
          <v-icon color="cyan">mdi-chart-areaspline</v-icon>
        </v-btn> -->
      </v-bottom-navigation>

      <!-- <v-card
        flat
        tile
        width="100%"
        class="text-center"
      >
        <v-card-text>

          <div class="menu-box">
            <div  @click="change(icon.path)" v-for="(icon, i) in icons" :key="i">
              <div class="btn-main-box">
                <v-icon size="24px">{{ icon.icon }}</v-icon>
                {{icon.name}}
              </div>
            </div>
          </div>

        </v-card-text>
      </v-card> -->
    </v-footer>

    <!-- <v-bottom-navigation
      v-model="bottomNav"
      dark
      shift
    >
      <v-btn>
        <span>Video</span>
        <v-icon>mdi-television-play</v-icon>
      </v-btn>

      <v-btn>
        <span>Music</span>
        <v-icon>mdi-music-note</v-icon>
      </v-btn>

      <v-btn>
        <span>Book</span>
        <v-icon>mdi-book</v-icon>
      </v-btn>

      <v-btn>
        <span>Image</span>
        <v-icon>mdi-image</v-icon>
      </v-btn>
    </v-bottom-navigation> -->
  </v-app>
</template>

<script>
export default {
  name: 'App',
  methods: {
    changePath (route) {
      this.$router.push(route)
    }
  },
  data: () => ({
    icons: [
      {icon: 'mdi-home-variant-outline', path:'fine', name:'Inicio'},
      {icon: 'mdi-alert-decagram-outline', path:'dashboard', name:'Emergencia'},
      {icon: 'mdi-shield-alert-outline', path:'education', name:'Prevención'},
      {icon: 'mdi-settings-outline', path:'home', name:'Configuración'}
    ],
    bottomNav: 0,
    items: [
      'default',
      'absolute',
      'fixed',
    ],
    padless: false,
    variant: 'default',
  }),
  computed: {
    color () {
      switch (this.bottomNav) {
        case 0: return 'blue-grey'
        case 1: return 'teal'
        case 2: return 'brown'
        case 3: return 'indigo'
      }
      return 'indigo'
    },
    localAttrs () {
      const attrs = {}

      if (this.variant === 'default') {
        attrs.absolute = false
        attrs.fixed = false
      } else {
        attrs[this.variant] = true
      }
      return attrs
    },
  },
};
</script>
<style>
  .divider-egg {
    margin: 0!Important;
    padding: 0!Important;
  }

</style>