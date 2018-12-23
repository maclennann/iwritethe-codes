<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <span class="display-1 font-weight-thin">
          Interests
        </span><br/><br/>
        <v-expansion-panel>
        <v-expansion-panel-content v-for="(interest,index) in interests" :key="index">
          <div slot="header">
            <span class="title font-weight-light">{{interest.name}}</span>
          </div>
          <v-card>
            <v-card-text>
              <span style="white-space:pre-wrap">{{interest.summary}}</span><br/>
              <ul><li v-for="(link, index) in interest.links" :key="index"><a :href="link.url">{{link.name}}</a></li></ul>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: {
      interests: Array
    },
    data: () => ({
    })
  }
</script>

<style>

</style>
