<template>
  <button @click="add">save {{ text }}</button>
</template>

<script>
import { mapActions } from "vuex";
import textBoxVue from "./text-box.vue";
export default {
  data() {
    return {};
  },
  computed: {
    taskName() {
      return this.$index.state.taskName;
    },
  },
  methods: {
    ...mapActions("todos", ["addTaskName"]),

    add() {
      this.addTaskName(this.$index.state.taskName);
    },
  },
};
</script>
