<template>
  <b-container fluid>
    <div class="d-flex justify-content-center">
      <div class="Contact border">
        <form class="contact-form" @submit.prevent="sendEmail">
          <div class='form--inputContainer is-field-withEmailSuggestion' @submit.prevent="sendEmail">
            <label>Name</label>
            <br>
            <input type="text" name="user_name">
            <br>
            <label>Email</label>
            <br>
            <input v-model="email" @blur="verifyEmail" placeholder="Email address" type='email' name="user_email">
            <br>
            <span v-if="mailCheckedEmail" class='form--notice form--suggestEmail'>
              Did you mean <span @click="setEmail">{{ mailCheckedEmail }}</span>?
            </span>
            <br>
            <label>Message</label>
            <br>
            <textarea name="message"></textarea>
            <br>
            <input type="submit" value="Send">
          </div>
        </form>
        <div v-if="somethingWrong" ><b-alert show dismissible variant="warning">Something went wrong</b-alert></div>
      </div>
    </div>
  </b-container>
</template>

<script>
import Mailcheck from 'mailcheck';
import emailjs from 'emailjs-com';

export default {

  data: function() {
    return {
      somethingWrong: false,
      email: "",
      mailCheckedEmail: undefined
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

    sendEmail: function(e) {
      emailjs.sendForm('mailgun', 'template_dUULqIMp', e.target, 'user_jF0ezZNlOfFk5vAfsGG9b')
        .then((result) => {
            this.$router.push('Success')
            console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
            this.somethingWrong = true;
            console.log('FAILED...', error);
        });

    },
  }
}
</script>

<style>
.Contact {
  background-image: url("/img/dark_dust_scratch_@2X.png");
  background-repeat: repeat;
  color: #000000
}
.form--inputContainer {
  margin: 15px;
}

</style>
