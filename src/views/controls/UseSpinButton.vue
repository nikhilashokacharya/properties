<template>
  <div>
    <div>
      <button class="button">
        <div class="triangle-up"></div>
      </button>
    </div>
    <div>
      <button class="button">
        <div class="triangle-down"></div>
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.triangle-up {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid black;

}
.button {
  height: 15px;
  /* border: 1px solid black; */
  box-shadow: 1px 2px gray;
  align-items: center;
}
.triangle-down {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid black;
}
</style>