<template>
  <section :class="`${$style.mask} ${animate ? $style.maskAnimation : ''}`">
    <div
      :class="$style.enter"
      @click="animate = !animate">
      Enter
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      animate: false,
    }
  },
}
</script>

<style module>
@keyframes scale-in {
  0% {
    transform: scale(1);
  }
  99% {
    transform: scale(100) translate(-50px, 0);
  }
  100% {
    opacity: 0;
  }
}
.mask {
  background: url('@/static/mask.svg') no-repeat center center;
  background-size: cover;
  flex: 100%;
  transform: scale(1);
  position: absolute;
  width: 100%;
  height: 100vh;
}
.maskAnimation {
  animation: scale-in 2000ms ease-out forwards;
}
.enter {
  color: #fff;
}
</style>
