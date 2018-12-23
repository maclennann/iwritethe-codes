<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <span class="display-1 font-weight-thin">
          Recent Projects
        </span><br/><br/>
        <a :href="proj.url" target="_blank" v-for="(proj, index) in projects" raised hover 
                :key="index">
        <v-card  class="clickable" style="">
          <v-card-text>
            <span class="title font-weight-light">{{proj.name}}</span><br/>
            <span class="font-weight-light" style="white-space:pre-wrap">{{proj.summary}}</span>
          </v-card-text>
        </v-card>
        </a>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: {
      projects: Array
    },
    data: () => ({
    })
  }
</script>

<style>

</style>
