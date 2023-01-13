<template>
  <button @click="click">地図へ</button>
</template>

<script>
export default {
  methods: {
    click() {
      this.$router.push('/map');
    }
  }
}
</script>