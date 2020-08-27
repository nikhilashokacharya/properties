<template>
  <div class="commanddiv">
    <div class="command-border" v-if="clicked===false" @click="toSelect">
      <button class="commandbutton">CommandButton1</button>
    </div>
    <div class="command-border" v-else @click="toSelect">
      <a class="span4">
        <a class="span3">
          <a class="span2">
            <a class="span1">
              <button class="commandbutton">CommandButton1</button>
            </a>
          </a>
        </a>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clicked: false
    };
  },
  methods: {
    toSelect() {
      this.clicked = !this.clicked;
    }
  }
};
</script>

<style scoped>
.commandbutton {
  width: 130px;
  height: 35px;
  border: none;
  box-shadow: 2px 2px gray;
}
.span1 {
  outline: dotted 1.5px black;
  outline-offset: 3px;
  width: auto;
}
.span2 {
  outline: dotted 1.5px black;
  outline-offset: 4px;
  width: auto;
}
.span3 {
  outline: dotted 1.5px black;
  outline-offset: 4px;
  width: auto;
}
.span4 {
  outline: dotted 1.5px black;
  outline-offset: 5px;
  width: auto;
}
</style>