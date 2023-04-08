<template>
  <div id="app">
    <nav>
      <router-link to="/hockey/sets/year">Hockey</router-link> | Admin Links: 
      <router-link to="/hockey/players/addPlayers">Add Player</router-link> |
      <router-link to="/hockey/sets/addSets">Add Set</router-link> |   
      <router-link to="/hockey/season/addSeasons">Add Season</router-link>      
    </nav>
    <router-view/>
  </div>
</template>

<style lang='sass'>
@import './scss/custom.scss'
</style>

