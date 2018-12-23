<template>
  <v-container fluid class="secondary">
    <v-layout row wrap>
      <v-flex xs12 sm12 md4 lg3 xl2 class="text-xs-center">
        <v-avatar size=256>
          <img :src="info.picture"/>
        </v-avatar>
      </v-flex>
      <v-flex xs12 sm12 md7 lg8>
        <v-layout row wrap>
          <v-flex>
            <v-layout row wrap>
              <v-flex class="display-3 font-weight-thin">
                Hi, I'm Norm!
              </v-flex>
              <v-flex class="subheading">
                <span v-html="info.summary"/>
              </v-flex>
              <v-flex class="subheading">
                <contact-form></contact-form>
                <a :href="profile.url" target="_blank" v-for="profile in info.profiles" :key="profile.network">
                  <v-btn raised>
                <v-icon>mdi-{{profile.network}}</v-icon>
                </v-btn>
                </a>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ContactForm from './ContactForm.vue'

  export default {
    components: {
      ContactForm
    },
    props: {
      info: Object
    },
    data: () => ({
    })
  }
</script>

<style>

</style>
