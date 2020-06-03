<template>
  <b-container fluid>
    <h3 id="Team"><strong>The Team</strong></h3>
    <b-row>
      <b-col sm="4">
        <b-card title="Zack" class="teamCard">
          <b-card-text>CFO</b-card-text>
          <b-avatar src="img/z.png" size="8rem"></b-avatar>
          <b-card-text>
            <a href="https://www.linkedin.com/in/zack-saunders-aa750146/"><button type="button" class="btn-info bnt-medium"><span class="glyphicon glyphicon-envelope"></span> LinkedIn</button></a>
          </b-card-text>
        </b-card>
      </b-col>
      <b-col sm="4">
        <b-card title="LB" class="teamCard">
          <b-card-text>Founder</b-card-text>
          <b-avatar src="img/LoriBethHS_Option1-min.png" size="8rem"></b-avatar>
          <b-card-text>
            <a href="https://www.linkedin.com/in/loribethblair/"><button type="button" class="btn-info bnt-medium"> <span class="glyphicon glyphicon-envelope"></span> LinkedIn</button></a>
          </b-card-text>
        </b-card>
      </b-col>
      <b-col sm="4">
        <b-card title="Drew" class="teamCard">
          <b-card-text>Programmer</b-card-text>
          <b-avatar src="img/drew.png" size="8rem"></b-avatar>
          <b-card-text>
            <a href="https://www.linkedin.com/in/drew-stevens-55262a5/"><button type="button" class="btn-info btn-medium"><span class="glyphicon glyphicon-envelope"></span> LinkedIn</button></a>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Teams',
}
</script>

<style>
  .teamCard {
    background-image: url("/img/dark_dust_scratch_@2X.png");
    background-repeat: repeat;
    color: #000000;
  }
  b-avatar {
  padding: 10px;
  margin: 10px;
  }

</style>
