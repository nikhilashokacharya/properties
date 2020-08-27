<template>
  <div class="tabs">
    <div class="tab">
      <input class="tabinput" type="radio" id="tab-1" name="tab-group-1" checked />
      <label for="tab-1">Tab1</label>
      <div class="content">Hello Tab1</div>
    </div>
    <div class="tab">
      <input class="tabinput" type="radio" id="tab-2" name="tab-group-1" />
      <label for="tab-2">Tab2</label>

      <div class="content">Hello Tab2</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.tabs {
  position: relative;
  min-height: 150px;
  clear: both;
  margin: 25px 0;
  
}
.tab {
  float: left;
  
}
.tab label {
  background: rgb(238, 238, 238);

  border: 1px solid rgb(238, 238, 238);;
  margin-left: -1px;
  position: relative;
  left: 1px;
}
.tab [type="radio"] {
  display: none;
}
.content {
  position: absolute;
  top: 18px;
  left: 0;
  background: rgb(238, 238, 238);
  width: 90px;
  height: 60px;
  padding: 20px;
  border: 1px solid rgb(238, 238, 238);
  box-shadow: 1px 1px gray;
  
}
[type="radio"]:checked ~ label {
  background: ccc;
  box-shadow:1px 0px gray;
  border-bottom: 1px solid ccc;
  border: 0.5px solid white;
  z-index: 2;
}
[type="radio"]:unchecked ~ label {
    border: 0.5px solid white;
}
[type="radio"]:checked ~ label ~ .content {
  z-index: 1;
}
/* .tabinput{;
} */
</style>