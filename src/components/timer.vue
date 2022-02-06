<template>
    <div class="timer">{{currentTime}}
    </div>
</template>

<script>
export default {
  name: 'timer',
  props: ['currentTime'],
  mounted () {
    setInterval(() => {
      this.currentTime--
    }, 1000)
  }
}
</script>

<style>
  .timer {
    width: 70px;
    height: 35px;
    background: rgb(255, 255, 255);
    border: 2px solid #000;
    border-radius: 3px;
    margin: auto;
    overflow: hidden;
    line-height: 35px;
    font-size: 25px;
    text-align: center;
  }
</style>
