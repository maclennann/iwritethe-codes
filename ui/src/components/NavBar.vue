<template>
  <v-toolbar app color="primary" dark>
    <v-toolbar-title class="headline text-uppercase">
      <span>iwritethe</span>
      <span class="font-weight-light">.codes</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-xs-only">
      <v-btn flat href="https://github.com/maclennann/iwritethe-codes" target="_blank">
        <v-icon>mdi-github-circle</v-icon> See on Github
      </v-btn>
      <v-btn flat @click="openDialog">
        <v-icon>mdi-comment</v-icon> Contact me
      </v-btn>
    </v-toolbar-items>
    <v-menu class="hidden-sm-and-up">
      <v-toolbar-side-icon slot="activator" dark></v-toolbar-side-icon>
      <v-list>
        <v-list-tile href="https://github.com/maclennann/iwritethe-codes" target="_blank">
          <v-list-tile-avatar>
            <v-icon>mdi-github-circle</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>See on GitHub</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="openDialog">
          <v-list-tile-avatar>
            <v-icon>mdi-comment</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Contact Me</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile> 
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>
import {EventBus} from '../eventbus.js'

  export default {
    methods: {
      openDialog() {
        EventBus.$emit('openDialog');
      }
    }
  }
</script>
