<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  // ready: function() {

  //     // GET request
  //     this.$http.get('http://httpbin.org/ip', function (data) {
  //         // set data on vm
  //         this.$set('msg', data)

  //     }).error(function (data, status, request) {
  //         // handle error
  //     })

  // },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
