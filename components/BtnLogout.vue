<template>
  <button @click="click">ログアウト</button>
</template>

<script>
export default {
  methods: {
    click() {
      this.$router.push('/');
    }
  }
}
</script>