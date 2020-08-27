<template>
<div class="labeldiv">
    <div class="label-border" v-if="clicked===false" @click="toSelect">
   <input class="label" value="Label1"/>
   <!-- <textarea class="label">Label1</textarea> -->
   </div>
    <div class="label-border" v-else @click="toSelect">
      <a class="span4">
        <a class="span3">
          <a class="span2">
            <a class="span1">
              <input class="label" value="Label1"/>
            </a>
          </a>
        </a>
      </a>
    </div>
</div>
</template>

<script>
export default {
    data(){
    return{
        clicked:false
    }
    },
    methods:{
        toSelect(){
            this.clicked=!this.clicked;
        }
    }

}
</script>
<style scoped>
.labeldiv{
    position: relative;
    /* height: 400px; */
}
.label{
    position: inherit;
    /* top:0px; */
	border:none;
    width:130px;
    background-color:rgb(238, 238, 238);
    height:30px;
    text-align: left;
    
}
.label-border{
    border:none;
    width:130px;
    background-color:rgb(238, 238, 238);
    height:30px;
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