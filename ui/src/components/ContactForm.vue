<template>
  <v-dialog
    v-model="dialog"
    @keydown.esc="dialog=false"
    fullscreen hide-overlay transition="dialog-bottom-transition"
  >
    <v-btn
      slot="activator"
      color="blue lighten-2"
      dark
    >
      <v-icon>mdi-comment</v-icon>
    </v-btn>
    <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="dialog = false">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>Contact Me</v-toolbar-title>
      </v-toolbar>
      <v-container>
        <v-alert
          :value="showMessage"
          :type="messageColor"
        >
          {{message}}
        </v-alert>
        <v-form>
          <v-text-field
            v-model="name"
            label="Name"
            required
          ></v-text-field>
          <v-text-field
            v-model="email"
            label="E-mail"
            required
          ></v-text-field>
          <v-textarea
            v-model="body"
            label="What's up?"
            required
          ></v-textarea>

          <v-btn
            color="primary"
            @click="submit"
            :disabled="submitting"
          >
            submit
          </v-btn>
          <v-btn 
            @click="clear" 
            :disabled="submitting" 
            dark 
            color="red lighten-2"
          >
            clear
          </v-btn>
          <v-progress-circular indeterminate v-if="submitting"></v-progress-circular>
        </v-form>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import {EventBus} from '../eventbus.js'
import api from '../api.js'

  export default {
    props: {
      control: String
    },
    data: () => ({
      dialog: false,
      name: '',
      email: '',
      body: '',
      showMessage: false,
      messageColor: 'success',
      message: '',
      submitting: false
    }),
    methods: {
      async submit() {
        try {
          this.submitting = true
          await api.postContact(this.name, this.email, this.body)
          this.showMessage = true
          this.messageColor = "success"
          this.message = "Thanks for contacting me! I'll get back to you soon."
          this.name = ''
          this.email = ''
          this.body = ''
        } catch(err) {
          this.showMessage = true
          this.messageColor = "error"
          this.message = `Unable to submit contact form, sorry. If the issue persists, feel free to email me. -- ${err.message} -- ${err.response.data.message}`
        } finally {
          this.submitting = false
        }
      },
      clear() {
        this.name = ''
        this.email = ''
        this.body = ''
        this.showMessage = false
      }
    },
    created() {
      EventBus.$on('openDialog', () => {
        this.dialog = true;
      })
    }
  }
</script>

<style>

</style>
