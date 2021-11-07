<template>
  <div
    :class="`${$style.block} ${$style[color]}`"
    @mouseover="mouseOver"
    @mouseleave="mouseLeave"
  >
    <Content
      ref="content"
      :pose="isFullscreen ? 'fullscreen' : 'thumbnail'"
      :class="`${$style.content} ${$style[color]} full-${isFullscreen}`"
      @click.native="fullScreen"
    >
      <div :class="`${$style.container} container${color}`">
        <close />
        <slot name="content" />
      </div>
    </Content>
    <Box
      v-if="showLogo"
      :pose="isVisible ? 'visible' : 'hidden'"
      :class="$style.letter"
    >
      <Item
        v-for="(item, key) in text"
        :key="key"
        :class="$style.letters"
      >
        {{ item }}
      </Item>
    </Box>
  </div>
</template>

<script>
import posed from 'vue-pose'
import Close from '@/components/Close.vue'
export default {
  components: {
    Close,
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
        scale: 1,
        y: 0,
      },
      hidden: {
        opacity: 0,
        scale: 0,
        y: 50,
        transition: {
          duration: 100,
        },
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
  computed: {
    showLogo() {
      return this.$store.state.showLogo
    },
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
      window.scrollTop
    },
  },
}
</script>

<style lang="scss" module>
:root {
  --block-blue: #2ab7ca;
  --block-red: #e01a4f;
  --block-yellow: #2a2d34;
  --block-green: #02a167;
}
$block-blue: #2ab7ca;
$block-red: #e01a4f;
$block-yellow: #2a2d34;
$block-green: #02a167;

.blockBlue,
.blockRed,
.blockYellow,
.blockGreen {
  width: 50%;
  height: 50%;
  color: #fff;
  position: absolute;
  &:before {
    content:'';
    position:absolute;
    width:100%;
    height:100%;
    transition: all 250ms ease-out;
  }
  &:hover {
    &:before {
      opacity:0.5;
    }
  }
}
.blockBlue {
  background: var(--block-blue);
  top: 0;
  left: 0;
  &:before {
    background: radial-gradient(circle, var(--block-blue) 0%, darken($block-blue, 20%) 100%);
    opacity:0;
  }
}
.blockRed {
  background: var(--block-red);
  top: 0;
  right: 0;
    &:before {
    background: radial-gradient(circle, var(--block-red) 0%, darken($block-red, 20%) 100%);
    opacity:0;
  }
}
.blockYellow {
  background: var(--block-yellow);
  bottom: 0;
  left: 0;
    &:before {
    background: radial-gradient(circle, var(--block-yellow) 0%, darken($block-yellow, 20%) 100%);
    opacity:0;
  }
}
.blockGreen {
  background: var(--block-green);
  bottom: 0;
  right: 0;
    &:before {
    background: radial-gradient(circle, var(--block-green) 0%, darken($block-green, 20%) 100%);
    opacity:0;
  }
}
.letters {
  display: inline-block;
  font-size: 12px;
  font-weight: bold;
  position: relative;
  z-index: 2;
  pointer-events: none;
  opacity: 0;
  @media (min-width: 770px) {
    font-size: 24px;
  }
}
.block {
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
}
.content {
  position: absolute;
  display: flex;
  align-items: center;
  opacity: 0;
}
.container {
  max-width: 990px;
  margin: auto;
  padding: 40px 20px;
}
.letter {
  .letters {
    @media (max-width: 770px) {
      opacity: 1 !important;
      transform: none !important;
    }
  }
}
</style>
<style lang="scss">
.full-true {
  z-index: 10;
  &:before {
    display: none;
  }
  & + div {
    opacity: 0;
  }
}
.full-false {
  overflow: hidden;
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
