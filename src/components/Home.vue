<template>
  <div class="home">
    <body class="text-center">
      <nav class="navbar navbar-expand-lg navbar-dark">
        <a class="navbar-brand" href="#"><img src="img/Platonic Logo Cropped.png" width="100" height="40"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="#About">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#Team">Team</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#Contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <div class="hero" id="home">
        <div class="d-flex justify-content-center" >
            <img class="img-fluid w-100" src="img/atlanta.jpg">
        </div>
        <div class="d-flex justify-content-center">
        <br>
          <h5>Handcrafted Artisinal Bits</h5>
        </div>
      </div>
      <br>
      <div class="container-fluid justify-content-center">
        <h3 id="About"><strong>About</strong></h3>

        <div>
          <p><b>At Platonic Ideal we focus on providing the highest quality in services.</b></p>
        </div>
        <div>
          <div><b>Some of the services we offer are:</b><br>
            <p><b> Custom Software Solutions</b></p>
            <p><b> Software Architecture Advisory Services</b></p>
            <p><b> Deliverability Consultation</b></p>
            <p><b> Web Development and Custom Templating</b></p>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <h3 id="Team"><strong>The Team</strong></h3>
        <div class="row text-center">
          <div class="col-sm-4">
            <div class="thumbnail lightgreen">
              <p><strong>Zack</strong></p>
              <p>CFO</p>
              <img src="img/z.png" class="avatar" width="150" height="150"><br>
              <a href="https://www.linkedin.com/in/zack-saunders-aa750146/"><button type="button" class="btn-info bnt-medium"><span class="glyphicon glyphicon-envelope"></span> LinkedIn</button></a>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="thumbnail lightgreen">
              <p><strong>LB</strong></p>
              <p>Founder</p>
              <img src="img/LoriBethHS_Option1-min.png" class="avatar" width="150" height="150"><br>
              <a href="https://www.linkedin.com/in/loribethblair/"><button type="button" class="btn-info bnt-medium"> <span class="glyphicon glyphicon-envelope"></span> LinkedIn</button></a>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="thumbnail lightgreen">
              <p><strong>Drew</strong></p>
              <p>Programmer</p>
              <img src="img/drew.png" class="avatar" width="150" height="150"><br>
              <a href="https://www.linkedin.com/in/drew-stevens-55262a5/"><button type="button" class="btn-info btn-medium"><span class="glyphicon glyphicon-envelope"></span> LinkedIn</button></a>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid" id="Contact" style="padding:30px 0px; margin:0px;">
        <div class="d-flex justify-content-center">
          <!-- <div class="col-4"></div>
          <div class="col-4"> -->
            <div class="lightgreen border">
              <div class="card-body">
                <form method="post" name="contact_form" action="contact-form-handler.php">
                  <h3>Contact Form</h3>
                  <h5 class="d-flex justify-content-start">Name</h5>
                  <input id="name" name="name" type="text" required=true class="d-flex-fill"><br>
                  <h5 class="d-flex justify-content-start">Email address</h5>
                  <input id="email" name="email" type="email" required=true class="d-flex-fill"><br>
                  <p id="suggestion"></p>
                  <h5 class="d-flex justify-content-start">How can we help you?</h5>
                  <textarea id="message" name="message" rows="10" cols="30"></textarea><br>
                  <!-- <div class="g-recaptcha" data-sitekey="6LewHd8UAAAAAAXmDjb3uQ1kt1Nnam5-MQZSbasw"></div><br> -->
                  <input name="Submit" class="btn btn-light" type="submit">
                </form>
              </div>
            <!-- <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeK9vno2eCnGHOFc8iWm9lZkkvvMydk1ghtav2J3NhAeovpNQ/viewform?embedded=true" width="420" height="751" frameborder="0" marginheight="0" marginwidth="0" align="auto">Loading...</iframe> -->
            </div>
          <!-- </div> -->
          <!-- <div class="col-4"></div> -->
        </div>

      </div>
      <footer class="container-fluid text-center">
        <a href="#home"><img src="img/Platonic Logo Cropped.png" width="100" height="40"></a>
        <a class="btn btn-social-icon btn-linkedin">
          <a href="https://www.linkedin.com/company/28658058"><span class="fa fa-linkedin"></span></a>
        </a>
      </footer>
    </body>
  </div>
</template>

<script>
export default {
  name: 'Homepage',

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
