<template>
  <div
    :class="`block ${color}`"
    @mouseover="mouseOver"
    @mouseleave="mouseLeave">
    <Box :pose="isVisible ? 'visible' : 'hidden'">
      <Item
        v-for="(item, key) in text"
        :key="key"
        class="letters"
        v-html="item" />
    </Box>
    <Content
      :pose="isFullscreen ? 'fullscreen' : 'thumbnail'"
      :class="`content ${color} full-${isFullscreen}`"
      @click.native="fullScreen">
      <div :class="`container container${color}`">
        <slot />
      </div>
    </Content>
  </div>
</template>

<script>
import posed from 'vue-pose'
export default {
  components: {
    Box: posed.div({
      visible: {
        staggerChildren: 25,
      },
      hidden: {
        staggerChildren: 0,
      },
    }),
    Content: posed.div({
      fullscreen: {
        width: '100vw',
        height: '100vh',
        transition: {
          ease: [0.86, 0.0, 0.07, 1.0],
        },
        flip: true,
        opacity: 1,
        scale: 1,
        zIndex: 10,
      },
      thumbnail: {
        width: '100%',
        height: '100%',
        transition: {
          ease: [0.86, 0.0, 0.07, 1.0],
        },
        flip: true,
        opacity: 0,
        scale: 1,
        zIndex: 1,
      },
    }),
    Item: posed.div({
      visible: {
        opacity: 1,
        y: 0,
      },
      hidden: {
        opacity: 0,
        y: 50,
      },
    }),
  },
  props: {
    text: {
      type: Array,
      default: null,
    },
    color: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      isVisible: false,
      isFullscreen: false,
    }
  },
  methods: {
    mouseOver() {
      this.isVisible = true
    },
    mouseLeave() {
      this.isVisible = false
    },
    fullScreen() {
      this.isVisible = false
      this.isFullscreen = !this.isFullscreen
      this.$store.dispatch('showLogo')
      console.log
    },
  },
}
</script>

<style>
:root {
  --block-blue: #2ab7ca;
  --block-red: #e01a4f;
  --block-yellow: #2a2d34;
  --block-green: #16db93;
}
.blockBlue {
  background: var(--block-blue);
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 50%;
}
.blockRed {
  background: var(--block-red);
  color: #fff;
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 50%;
}
.blockYellow {
  background: var(--block-yellow);
  color: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50%;
  height: 50%;
}
.blockGreen {
  background: var(--block-green);
  color: #fff;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 50%;
  height: 50%;
}
.letters {
  display: inline-block;
  font-size: 24px;
  font-weight: bold;
  position: relative;
  z-index: 2;
}
.block:hover {
  cursor: pointer;
}
.block {
  display: flex;
  align-items: center;
  justify-content: center;
}
.content {
  position: absolute;
  display: flex;
  align-items: center;
}
.full-true {
  z-index: 10;
}
.full-false {
  overflow: hidden;
}
.container {
  max-width: 990px;
  margin: auto;
  padding: 40px 20px;
  background: var(--block-blue);
}
.containerblockBlue {
  background: var(--block-blue);
}
.containerblockRed {
  background: var(--block-red);
}
.containerblockYellow {
  background: var(--block-yellow);
}
.containerblockGreen {
  background: var(--block-green);
}
</style>
