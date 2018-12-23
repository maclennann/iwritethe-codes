<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <span class="display-1 font-weight-thin">
          Work History
        </span><br/><br/>
        <v-expansion-panel>
        <v-expansion-panel-content v-for="(job,index) in work" :key="index">
          <div slot="header">
            <span style="float:left" class="title font-weight-light">{{job.position}} - {{job.company}}</span>
            <span style="float:right;margin-right:10px">{{job.startDate}} - {{job.endDate}}</span>
          </div>
          <v-card>
            <v-card-text>
              <span style="white-space:pre-wrap">{{job.summary}}</span><br/>
              <ul><li v-for="(hl, index) in job.highlights" :key="index">{{hl}}</li></ul><br/>
              <v-chip v-for="(tech,index) in job.technologies" :key="index">{{tech}}</v-chip>
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
      work: Array
    },
    data: () => ({
    })
  }
</script>

<style>

</style>
