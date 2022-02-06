<template>
  <div>
    <div class="traffic-light">
      <colors path="/red" class="red"></colors>
      <colors path="/yellow" class="yellow"></colors>
      <colors path="/green" class="green"></colors>
    </div>
    <timer :currentTime="timeChange" class="timer"></timer>
  </div>
</template>

<script>
import colors from './components/colors'

class State {
  constructor (path, dur, next) {
    this.path = path
    this.dur = dur
    this.next = next
  }
}

export default {
  name: 'App',
  data: function () {
    return {
      timeChange: 0
    }
  },
  computed: {
    isBlink: function () {
      return this.timeChange < 4
    }
  },
  methods: {
    trigger (state, callback) {
      callback(state)
      this.timeChange = state.dur + 1
      setTimeout(() => {
        this.trigger(state.next, callback)
      }, state.dur * 1000)
    }
  },
  created () {
    let red = new State('/red', 10)
    let yellowR = new State('/yellow', 3)
    let yellowG = new State('/yellow', 3)
    let green = new State('/green', 15)

    red.next = yellowR
    yellowR.next = green
    green.next = yellowG
    yellowG.next = red
    let beginState = red
    if (this.$route.path === '/yellow') beginState = yellowR
    else if (this.$route.path === '/green') beginState = green

    this.trigger(beginState, state => {
      this.$router.push({ path: state.path, component: colors })
    })
  }
}
</script>

<style>
body {
  height: 100vh;
  background-color: rgb(162, 199, 255);
}

.traffic-light {
  width: 100px;
  height: 340px;
  background: rgb(83, 83, 83);
  border-radius: 10px;
  margin: 0 auto 30px;
  padding: 30px;
}

.red {
  background: red;
}
.yellow {
  background: yellow;
}

.green {
  background: lime;
}
</style>
