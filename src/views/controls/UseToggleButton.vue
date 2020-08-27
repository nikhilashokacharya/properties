<template>
  <div>
    <div class="toggle-border" v-if="clicked===false" @click="toSelect">
      <button class="toggle-button">Toggle Button</button>
    </div>
    <div class="toggle-border" v-else @click="toSelect">
      <a class="span4">
        <a class="span3">
          <a class="span2">
            <a class="span1">
              <button class="toggle-button">Toggle Button</button>
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
.toggle-button {
  height: 60px;
  width: 55px;
  box-shadow: 1px 1px gray;
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