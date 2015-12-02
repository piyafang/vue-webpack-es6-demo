export default {
  fetch(){
    return JSON.parse(localStorage.getItem('todos') || '[]');
  },
  save(todos){
    localStorage.setItem('todos',JSON.stringify(todos));
  }
}
