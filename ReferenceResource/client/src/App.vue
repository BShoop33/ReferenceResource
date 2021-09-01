<template>
  <div id="app">
      <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link> |
          <router-link to="/sql">SQL</router-link> |
          <router-link to="/.net">.NET</router-link> |
          <router-link to="/csharp">C#</router-link> |
          <router-link to="/vb">VB</router-link> |
          <router-link to="/linq">LINQ</router-link> |
          <router-link to="/regex">RegEx</router-link> |
          <router-link to="/vue">Vue</router-link> |
          <router-link to="/training">Training</router-link> |
          <router-link to="/continuingeducation">Continuing Education</router-link> |
          <router-link to="/glossary">Glossary</router-link> |
          <router-link to="/organization">Organization</router-link>
      </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
