<template>
  <div class="light" :class="{active: isActive}">
  </div>
</template>
<script>
export default {
  props: ['path', 'currentTime'],
  computed: {
    isActive: function () {
      return this.$route.path === this.path
    }
  }
}
</script>
<style>
  .light {
    display: inline-block;
    border-radius: 100%;
    width: 100px;
    height: 100px;
    margin-bottom: 8px;
    opacity: 0.2;
    transition: opacity 0.2s
  }
  .active {
    opacity: 1;
  }
  /* .blink {
  animation-name: blinker;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(1.0,0,0,1.0);
  animation-duration: 2s;
  -webkit-animation-name: blinker;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: cubic-bezier(1.0,0,0,1.0);
  -webkit-animation-duration: 2s;
}

@keyframes blinker {
  from { opacity: 1.0; }
  to { opacity: 0.0; }
}

@-webkit-keyframes blinker {
  from { opacity: 1.0; }
  to { opacity: 0.0; }
} */
</style>
