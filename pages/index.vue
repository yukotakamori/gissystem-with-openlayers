

<template >
  <!-- <BtnLogin/> -->
  <BackDisp/>
</template>

<script>
export default {
  head(){
     return {
      script: [
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/particlesjs/2.2.2/particles.min.js',
          body: true,
          defer: true,
          hid: 'example',
          callback: () => {
            console.log('example js loaded');
          },
        },
      ],
    };
  },
}
</script>