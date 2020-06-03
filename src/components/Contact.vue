<template>
  <b-container fluid>
    <div class="d-flex justify-content-center">
        <div class="Contact border">
          <b-card-body>
            <form id="contact_form" name="contact_form" @submit.prevent="sendEmail">
              <div class='form--inputContainer is-field-withEmailSuggestion'>
                <h3>Contact Form</h3>
                <h5 class="d-flex justify-content-start">Name</h5>
                <input id="name" name="name" type="text" required=true class="input" v-model="name"><br>
                <h5 class="d-flex justify-content-start">Email address</h5>
                <input v-model="email" @bluer="verifyEmail" id="email" name="email" type="email" required=true class="input"><br>
                <span v-if="mailCheckedEmail" class='form--notice form--suggestEmail'>
                  Did you mean <span>{{ mailCheckedEmail }}</span>?
                </span>
                <span @click="setEmail">{{ mailCheckedEmail }}</span>
                <h5 class="d-flex justify-content-start">How can we help you?</h5>
                <textarea id="message" name="message" rows="5" cols="30" v-model="message"></textarea><br>
                <input name="Submit" class="btn btn-light" type="submit" value="Send">
              </div>
            </form>
          </b-card-body>
        </div>
      </div>
  </b-container>
</template>


<script>
import Mailcheck from 'mailcheck'
import emailjs from 'emailjs-com'

export default {
  name: 'Contact',

  data: function() {
    return {
      name: "",
      email: "",
      mailCheckedEmail: undefined,
      message: "",
    }
  },

  methods: {
    verifyEmail: function () {

      let self = this;

      Mailcheck.run({
        email: self.email,
        suggested: function (suggestion) {
          self.mailCheckedEmail = suggestion.full;
        },
        empty: function () {
          // nothing wrong with the email
        }
      });

    },

    setEmail: function () {
      this.email = this.mailCheckedEmail;
      this.mailCheckedEmail = undefined;
    },

    sendEmail: (e) => {
      emailjs.sendForm('mailgun', 'template_dUULqIMp', e.target, 'user_jF0ezZNlOfFk5vAfsGG9b')
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
            console.log('FAILED...', error);
        });
    }
  }
}
</script>

<style>
.Contact {
  background-image: url("/img/dark_dust_scratch_@2X.png");
  background-repeat: repeat;
  color: #000000
}
</style>
