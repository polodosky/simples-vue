export function saveTaskName({ commit }, taskName) {
  commit("saveTaskName", taskName);
}
export function addTaskName({commit}, taskName, taskList) {
  commit("addTaskName", taskList.push(taskName));
}
