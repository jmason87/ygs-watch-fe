<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/hockey/sets/year">Sets</router-link> |
      <router-link to="/hockey/players/addPlayers">Add Player</router-link> |
      <router-link to="/hockey/seasons">Seasons</router-link> |

    </nav>
    <router-view/>
  </div>
</template>

<style lang='sass'>
@import './scss/custom.scss'
</style>

