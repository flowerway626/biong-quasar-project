<template lang="pug">
#page404.fullscreen.text-white.text-center.q-pa-md.flex.flex-center
  div
    div.text404(style='font-size: 30vh') 404
    .text-h2(style='opacity:.4') Oops. 什麼都沒有...
    q-btn.q-mt-xl(color='white' text-color='black' unelevated to='/' label='Go Home' no-caps)

</template>

<style lang="scss">
#page404 {
  background: #111;
  .text-h2 {
    color: $warning;
  }
  .text404 {
    background: linear-gradient(135deg, #53C2BA 0%, #C0538A 100%);
    color: transparent;
    background-clip: text;
  }
}

</style>
