import { createStore } from "vuex";
import todos from "./todos";

export const store = createStore({
  modules: { todos },
});
