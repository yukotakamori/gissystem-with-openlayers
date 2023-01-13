<template>
  <ClientOnly>

    <body class="Toppage">
      <div class="container">
        <div class="box">
          <h1>GIS system</h1>
          <p>
            <nuxt-link to="/map">Map Page</nuxt-link>
          </p>
        </div>
      </div>

    </body>
  </ClientOnly>
</template>

<script>

</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Merienda");

.background {
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  z-index: 0;
}

/* Default Styling */
.Toppage {
  font-family: "Merienda", cursive;
  background: #000;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.box {
  background: #fff;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
  position: absolute;
  z-index: 1;
}

a {
  color: rgb(90, 196, 113);
}
</style>