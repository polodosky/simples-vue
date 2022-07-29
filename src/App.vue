<template>
  <div id="app">To do</div>
  <Button />
  <p>seu texto aqui : {{ text }}</p>

  <text-box />
</template>

<script>
import Button from "./components/Button.vue";
import textBox from "./components/text-box.vue";
import cardText from "./components/card-text.vue";

export default {
  components: {
    Button,
    textBox,
    //cardText,
  },
};
</script>
