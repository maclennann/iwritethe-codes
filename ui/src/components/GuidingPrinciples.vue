<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <span class="display-1 font-weight-thin">
          Guiding Principles
        </span><br/><br/>
            <v-card v-for="(principle,index) in principles" :key="index">
              <v-card-text>
                <span class="title font-weight-light">
                  <span>{{principle.summary}}</span>
                </span>
              </v-card-text>
            </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: {
      principles: Array
    },
    data: () => ({
    })
  }
</script>

<style>

</style>
