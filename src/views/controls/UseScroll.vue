<template>
  <div id="wrapper">
    <div class="scrollbar" id="style-4">
      <div class="force-overflow"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.scrollbar {
  /* 	margin-left: 30px; */
  float: left;
  height: 100px;
  /* 	width: 65px; */
  background: #f5f5f5;
  overflow-y: scroll;
  margin-bottom: 25px;
}

.force-overflow {
  min-height: 450px;
  /* width:30px; */
}

#wrapper {
  text-align: center;
  width: 500px;
  margin: auto;
}

#style-4::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: white;
}

#style-4::-webkit-scrollbar {
  width: 20px;
  background-color: #f5f5f5;
}

#style-4::-webkit-scrollbar-thumb {
  background-color: rgb(238, 238, 238);
  border: 1px solid gray;
  box-shadow: 1px 1px gray;
}

/* Buttons */
#style-4::-webkit-scrollbar-button:single-button {
  background-color: rgb(238, 238, 238);
  display: block;
  border: 1px solid gray;
  height: 18px;
  width: 15px;
  /* border-left: 2px solid transparent;
  border-right: 2px solid transparent;
  border-bottom: 2px solid black; */
}
/* #style-4::-webkit-scrollbar-button:single-button:vertical:decrement {
  border-width: 0 8px 8px 8px;
  border-color: transparent transparent #555555 transparent;
}
#style-4::-webkit-scrollbar-button:single-button:vertical:increment {
  border-width: 8px 8px 0 8px;
  border-color: #555555 transparent transparent transparent;
} */
/* Turn on single button up on top, and down on bottom */
/* ::-webkit-scrollbar-button:start:decrement,
::-webkit-scrollbar-button:end:increment {
  display: block;
} */

/* Turn off the down area up on top, and up area on bottom */
/* ::-webkit-scrollbar-button:start:increment,
::-webkit-scrollbar-button:end:decrement {
  display: none;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid black;
} */
/* Place The scroll down button at the bottom */
::-webkit-scrollbar-button:vertical:increment {
    background-color: black;
    border: 1px dashed blue;
}
 
/* Place The scroll up button at the up */
::-webkit-scrollbar-button:vertical:decrement {
    background-color: purple;
    border: 1px dashed blue;
}
</style>