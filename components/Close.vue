<template>
  <div :class="$style.cross" />
</template>

<script>
export default {

}
</script>

<style lang="scss" module>
.cross {
  width: 30px;
  height: 3px;
  background: #fff;
  transform: rotate(45deg);
  position: absolute;
  right: 30px;
  top: 30px;
  &:before {
    content: '';
    display: block;
    width: 30px;
    height: 3px;
    background: #fff;
    transform: rotate(-90deg);
  }
}
</style>
