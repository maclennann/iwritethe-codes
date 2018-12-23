<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <span class="display-1 font-weight-thin">
          Skills
        </span><br/><br/>
            <v-card v-for="(skill,index) in skills" :key="index">
              <v-card-text>
                <span class="title font-weight-light">
                  <span>{{skill.name}}</span>
                  <span>
                    <v-chip v-for="(tech,index) in skill.keywords" :key="index">{{tech}}</v-chip>
                  </span>
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
      skills: Array
    },
    data: () => ({
    })
  }
</script>

<style>

</style>
