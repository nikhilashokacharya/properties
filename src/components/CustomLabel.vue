<template>
  <div>
    <label
      class="underlined"
      ref="labelRef"
      v-if="control"
      :id="control.id"
      :key="control.id"
      :title="control.title"
      :tabindex="control.tabindex"
      :style="control.style"
      @mousedown="customLabelClick"
      @mouseup.stop
      :v-model="control.caption"
      :value="control.caption"
      :disabled="!control.enabled"
      @keyup.enter="trigger"
    >
      <span
        ref="accelerator"
        :style="control.style"
        v-show="control.isActiveAccelerator!=='' && control.accelerator.length > 0"
        v-html="control.isActiveAccelerator"
      ></span>
      <span ref="caption" :style="control.style"  v-show="control.isActiveAccelerator===''">{{ control.caption }}</span>
    </label>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Mutation, Action, Getter } from "vuex-class";
import { EventBus } from "./event-bus";
/* eslint-disable */
@Component({})
export default class CustomLabel extends Vue {
  @Prop() private control!: object;
  @Prop() private modal!: object;

  @Getter getPrevControlIndex!: any;
  @Mutation userFormIndex!: Function;
  @Mutation updatePrevControlIndex!: Function;
  @Mutation controlIndex!: Function;
  @Mutation updateControlIndex!: Function;
  @Mutation activateControl!: Function;

  //
  @Action updateAutoSize!: any;
  @Getter getSelectedControl!: any;
  @Mutation updatecaptionAutoSize!:any

  mounted() {
     EventBus.$on("autoSize", (data: any, styleName: any) => {
       console.log("hello autoSize");

      this.changeAutoSize();
     });
  }
  // get captionChange(){
  //   debugger
  //   console.log("Caption updated")
  //   // this.changeAutoSize();
  //   return this.control.isActiveAccelerator;
  // }

  changeAutoSize() {
    debugger;
    console.log((this as any).$refs);
 let offsetWidthData;
 let offsetHeightData;
    if (this.getSelectedControl.accelerator == "") {
    offsetWidthData = (this as any).$refs["caption"].offsetWidth;
      offsetHeightData = (this as any).$refs["caption"].offsetHeight;
      this.updateAutoSize({
        offsetWidth: offsetWidthData,
        offsetHeight: offsetHeightData
      });
    } else {
      console.log("OW",(this as any).$refs["accelerator"].offsetWidth)
      console.log("OH",(this as any).$refs["accelerator"].offsetHeight)
      let self =  (this as any);
    offsetWidthData  =self.$refs["accelerator"].offsetWidth;
    offsetHeightData = self.$refs["accelerator"].offsetHeight;

    // Calling Action
      // this.updateAutoSize({
      //   offsetWidth: (this as any).$refs["accelerator"].offsetWidth,
      //   offsetHeight: (this as any).$refs["accelerator"].offsetHeight
      // });

     this.updatecaptionAutoSize({prop1:"caption",prop2:"width",prop3:"height",value1:this.getSelectedControl.caption,value2:offsetWidthData,value3:offsetHeightData})
    }
  }

  customLabelClick() {
    console.log("clickd");
    this.userFormIndex(this.modal);
    this.controlIndex(this.control);
    this.updatePrevControlIndex();
    this.updateControlIndex(this.getPrevControlIndex);
    this.activateControl();
    EventBus.$emit("userFormClicked", this.control, this.modal);
  }
}
</script>
<style scoped>
/* .underlined {
 text-decoration: underline;
} */
.underline {
  padding-left: 10px;
}
</style>
