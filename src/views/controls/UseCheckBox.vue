<template>
 <!-- <div class="outer-check"  @mousedown="customCheckBoxClick" @mouseup.stop>
    <label class="control">
      <input :style="{float:(control.alignment==='1 - fmAlignmentRight')?'right':'left'}" type="checkbox" @change="handleCheck" class="control-input visually-hidden" />
      <span  :style="{float:(control.alignment==='1 - fmAlignmentRight')?'right':'left'}" class="control-indicator"></span>
      <span style="font-size: 12px;">CheckBox1</span>
    </label>
  </div> -->

  <div :style="control.style" @mousedown="customCheckBoxClick" @mouseup.stop>
 <span><input :style="{float:(control.alignment==='1 - fmAlignmentRight')?'right':'left'}" ref="refcheckbox" type="checkbox" /></span>
<label >CheckBox1</label>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Mutation, Action, Getter } from "vuex-class";
import { EventBus } from "../../components/event-bus";

@Component({})
export default class UseTextBox extends Vue {
  @Prop() private control!: object;
  @Prop() private modal!: object;

    styleData={
       backgroundImage: 'url("data:image/png;base64,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")',
  backgroundSize: "10px";
  background: "lightgreen";
  backgroundPosition: "center";
  backgroundRepeat: "noRepeat";
    }


  @Getter getPrevControlIndex!: any;
  @Mutation userFormIndex!: Function;
  @Mutation updatePrevControlIndex!: Function;
  @Mutation controlIndex!: Function;
  @Mutation updateControlIndex!: Function;
  @Mutation activateControl!: Function;

  customCheckBoxClick() {
    console.log("clickd");
    this.userFormIndex(this.modal);
    this.controlIndex(this.control);
    this.updatePrevControlIndex();
    this.updateControlIndex(this.getPrevControlIndex);
    this.activateControl();
    (this as any).$refs.refcheckbox.focus();
    EventBus.$emit("userFormClicked", this.control, this.modal);
    console.log("control",this.control)
  }

  handleCheck(e:any){
    debugger;
      console.log(e.target.checked)
  }

}
</script>

<style scoped>
.outer-check {
  /* position: relative; */
  /* height: 30px;
  width: 150px; */
  /* background-color: rgb(238, 238, 238); */
  box-shadow: -1px -1px gray;
  overflow: hidden;
}
input {

}
.visually-hidden {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
.control {
  position: absolute;
  top: 20%;
  left: 10px;
  display: block;
  width: 100%;
  align-items: center;
}
.control-indicator {
  width: 14px;
  height: 14px;
  margin: 1px;
  margin-right: 6px;
  background-color: white;
  /* border: 1px solid lightgray; */
  border: white;
  box-shadow: -1px -1px grey;
}
.control-input:checked ~ .control-indicator {
  background-image: url(./checkmark.png);
  background-size: 10px;
  background-position: center;
  background-repeat: no-repeat;
}
</style>