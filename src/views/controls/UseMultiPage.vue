<template>
  <div class="pages">
    <div class="page">
      <input type="radio" id="page-1" name="page-group-2" checked />
      <label for="page-1">Page1</label>
      <div class="content1"></div>
    </div>
    <div class="page">
      <input type="radio" id="page-2" name="page-group-2" />
      <label for="page-2">Page2</label>

      <div class="content1"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

.pages {
  position: relative;
  min-height: 150px;
  clear: both;
  margin: 25px 0;
  
}
.page {
  float: left;
  
}
.page label {
  background: rgb(238, 238, 238);

  border: 1px solid rgb(238, 238, 238);;
  margin-left: -1px;
  position: relative;
  left: 1px;
}
.page [type="radio"] {
  display: none;
}
.content1 {
  position: absolute;
  top: 18px;
  left: 0;
  background: transparent;
  width: 90px;
  height: 60px;
  padding: 20px;
  border: 1px solid rgb(238, 238, 238);;
  box-shadow: 1px 1px gray;
  
}
[type="radio"]:checked ~ label {
  background: ccc;
  box-shadow:1px 0px gray;
  border: 0.5px solid white;
  border-bottom: 1px solid ccc;
  z-index: 2;
}
[type="radio"]:checked ~ label ~ .content1 {
  z-index: 1;
}
</style>