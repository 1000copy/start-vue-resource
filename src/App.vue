<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <hello></hello>
    <p>
      Welcome user from {{msg}}
    </p>
    
</template>

<script>
import Hello from './components/Hello'

export default {
  components: {
    Hello
  },
  ready: function() {
      // console.log(this.$http.get)
      // this.$http.get('http://httpbin.org/ip', function (data) {
      //     console.log(JSON.stringify(data))
      //     this.$set('msg', data)
      // })
      var url = '/users'
      this.$http.get(url).then(
        (res) => {
          var json = JSON.stringify(res.data)
          this.$set('msg',json)
        }, 
        (err) => {console.log(err)});


  },
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
