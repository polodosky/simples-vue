<template>
  <input v-model="text" placeholder="digite aqui" />
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return { text: "" };
  },
  watch: {
    text(value) {
      console.log(value);
      this.save(value);
    },
  },
  methods: {
    ...mapActions("todos", ["saveTaskName"]), // puxando a funcao do actions

    save(text) {// nome novo qualquer
      this.saveTaskName(text); //chamando essa funcao, nome da funcao no actions
    },
  },
};
</script>
