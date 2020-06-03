<template>
<b-container fluid="sm" class="justify-content-center" id="about">
  <b-row class="p-3">
    
      <div id="quote">
      <p >"The programmer, like the poet, works only slightly removed from pure thought-stuff. He builds his castles in the air, from air, creating by exertion of the imagination. [...] Yet the program construct, unlike the poet's words, is real in the sense that it moves and works, producing visible outputs separate from the construct itself. It prints results, draws pictures, produces sounds, moves arms."</p>
      <p id="author"> - Frederick P. Brooks, Jr, "The Mythical Man-Month"</p>
      </div>

      <p>In Greece, approximately 2400 years ago, there lived and taught a philosopher by the name of Plato. The question that chiefly interested Plato was that of ideal forms; what are the intangible qualities that underlay seemingly disparate things. What is the essence of Beauty that all beautiful things reflect and share, what is the nature of the Good, divorced from the material world?</p>

      <p>Modern enterprise programming is about creating a reflection of the business domain, stripped away of the limitations of the material world, in order to model and solve problems.</p>

      <p>Platonic Ideal is named in honor of this philosophy. Our foremost concern is to deeply understand the nature of a problem, in order to provide the right tool for solving it. We create custom solutions for each unique circumstance, using artisanal, hand-crafted code.</p>

  </b-row>
</b-container>
</template>

<script>


export default {
  name: 'About',
}
</script>

<style>

  #about {
    padding: 0% 3% 0% 3%;

    font-size: 1.4rem;
    color: #1480ac;
    text-align: left;
    text-indent: 5em;
  }

  #author  {text-align: right;}

  #quote {
    text-indent:5em;
    font-size: 1rem;
    padding: 0% 5% 0% 5%;
    margin: 5%;
    font-style: italic;
  }

</style>
