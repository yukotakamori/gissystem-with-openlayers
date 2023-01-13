<template>
    <button @click="click">データ登録</button>
  </template>
  
  <script>
  export default {
    methods: {
      click() {
        this.$router.push('/pgtest');
      }
    }
  }
  </script>