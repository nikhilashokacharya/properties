<template>
  <div class="row">
    <div>
      <div class="buttonIn">
        <input type="text" id="enter" />
        <button id="clear"><strong>_</strong></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.buttonIn {
  width: 120px;
  position: relative;
}

input {
  margin: 0px;
  padding: 0px;
  width: 100%;
  outline: none;
  height: 20px;
  box-shadow: -1px -1px rgb(238, 238, 238);;
  /* border-radius: 5px;  */
}

button {
  position: absolute;
  top: 0;
  /* border-radius: 5px;  */
  right: 0px;
  z-index: 2;
  border: none;
  top: 2px;
  height: 20px;
  cursor: pointer;
  color: black;
  /* background-color: #1e90ff;  */
  transform: translateX(2px);
  box-shadow: -1px -1px gray;
}
</style>