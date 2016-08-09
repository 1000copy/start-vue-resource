<template>
  <div id="app">
    <hello></hello>
    
    <ul>
      <li v-for="user in users">
        <input type="text" value="{{user.name}}"> </input><a v-on:click="remove($index)">X</a>
      </li>
    </ul>
</template>

<script>
import Hello from './components/Hello'

export default {
  components: {
    Hello
  },
  data:{
    users:[{name:"1"}]
  },
  ready: function() {
      var url = '/users'
      this.$http.get(url).then(
        (res) => {
          // var json = JSON.stringify(res.data)
          console.log(res.data)
          // 特别小心：如果json是字符串形式，那么做v-for的时候是什么也看不到的
          this.$set('users',JSON.parse(res.data))
        }, 
        (err) => {console.log(err)});
  },
  methods: {
    remove: function (index) {
      console.log(index)
      var url = '/user/'+index
       this.$http.delete(url).then(
        (res) => {
          // 特别小心：如果json是字符串形式，那么做v-for的时候是什么也看不到的
          this.$set('users',JSON.parse(res.data))
        }, 
        (err) => {console.log(err)});
    }
  }
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
