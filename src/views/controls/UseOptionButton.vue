<template>
  <div class="container">
    <div class="radio">
      <input id="radio-1" name="radio" type="radio" class="radio-input"/>
      <label for="radio-1" class="radio-label">OptionButton1</label>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.radio {
  background-color: rgb(238, 238, 238);
  /* border: 0.2px solid gray; */
  box-shadow: -1px -1px gray;
  width: 150px;
  height: 23px;
}
.radio-input {
    float: left;
    /* padding-top:5px; */
    margin-top: 5px;

}
.radio-label{
    float: left;
    font-size: 11px;
    padding-top: 5px;
    /* font-weight: 550; */
}
</style>