<template>
  <div :class="$style.grid">
    <div :class="$style.tile1">
      tile1
    </div>
    <div :class="$style.tile2">
      tile2
    </div>
    <div :class="$style.tile3">
      tile3
    </div>
    <div :class="$style.tile4">
      tile4
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style module>
:root {
  --tile-bg-1: #2ab7ca;
  --tile-bg-2: #e01a4f;
  --tile-bg-3: #fed766;
  --tile-bg-4: #16db93;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  height: 100vh;
}
.tile1 {
  background: var(--tile-bg-1);
}
.tile2 {
  background: var(--tile-bg-2);
}
.tile3 {
  background: var(--tile-bg-3);
}
.tile4 {
  background: var(--tile-bg-4);
}
</style>
