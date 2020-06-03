<template>
  <div id="app">
    <div id="nav">
      <b-navbar toggleable="lg" type="dark">
        <b-navbar-brand href="/"><img src="img/Platonic Logo Cropped.png" width="100" height="40"></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item><router-link v-bind:to="'/about'">About</router-link></b-nav-item>
            <b-nav-item href=""><router-link v-bind:to="'/team'">Team</router-link></b-nav-item>
            <b-nav-item href=""><router-link v-bind:to="'/contact'">Contact</router-link></b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view></router-view>
    <footer class="container-fluid text-center">
      <a href="#home"><img src="img/Platonic Logo Cropped.png"></a>
      <a class="btn btn-social-icon btn-linkedin">
        <a href="https://www.linkedin.com/company/28658058"><span class="fa fa-linkedin"></span></a>
      </a>
    </footer>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 1.4rem;
  color: #1480ac;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #4b94d4;
}

#nav a.router-link-exact-active {
  color: #4b94d4;
}

body {
  background-image: url("/img/Background-Tesselation.png");
  background-repeat: repeat;
  font-family: "Raleway", sans-serif;
  margin: 0px;
  padding: 0px;
  font: 14px "Lucida Grande", Helvetica, Arial, sans-serif;
  font-size: 1.4rem;
  color: #1480ac;
  }
</style>
