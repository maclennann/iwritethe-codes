<template>
  <v-app>
    <nav-bar></nav-bar>
    <v-content>
      <basic-info :info="resume.basics"></basic-info>
      <work-history :work="resume.work"></work-history>
      <recent-projects :projects="resume.projects"></recent-projects>
      <skills :skills="resume.skills"></skills>
      <guiding-principles :principles="resume.guidingPrinciples"></guiding-principles>
      <interests :interests="resume.interests"></interests>
    </v-content>
    <v-footer class="pa-3">
      <v-spacer></v-spacer>
      <div>iwritethe.codes - {{version}}</div>
    </v-footer>
  </v-app>
</template>

<script>
import resume from 'js-yaml-loader!./assets/resume.yaml'
import BasicInfo from './components/BasicInfo.vue'
import WorkHistory from './components/WorkHistory.vue'
import RecentProjects from './components/RecentProjects.vue'
import Skills from './components/Skills.vue'
import GuidingPrinciples from './components/GuidingPrinciples.vue'
import NavBar from './components/NavBar.vue'
import Interests from './components/Interests.vue'

export default {
  name: 'App',
  components: {
    BasicInfo,
    WorkHistory,
    RecentProjects,
    Skills,
    GuidingPrinciples,
    NavBar,
    Interests
  },
  data () {
    return {
      resume,
      version: process.env.IWTC_VERSION
    }
  }
}
</script>

<style>
  .clickable {
    cursor: pointer;
  }

  a { 
    text-decoration: none
  }
</style>
