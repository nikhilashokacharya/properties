<template>
  <div
    class="custom-select"
    style="control.style"
    :style="{lineHeight:(control.columnCount>=2)?'50px':'15px'}"
    :tabindex="tabindex"
    @blur="open = false"
  >
  <!-- :style="{lineHeight:(optionHead[0]?'20px':((control.columnCount>=2)?'60px':'20px'))}" -->
    <div class="combobox">
      <input type="text" :style="{height:control.style.height}" :value="this.selected" />
      <div class="selected" :style="{display:control.showDropButtonWhen==='block'?'block':'none'}" :class="{open: open}" @click="open = !open"></div>
      <div
        class="items"
        :style="{width:parseInt(control.listWidth)+'px',zIndex:999999999,left:(parseInt(control.listWidth)>1000)?(-(parseInt(control.listWidth)))%1000+'px':'0px'}"
        :class="{selectHide: !open}"
      >
        <span>{{control.columnHeads==='true'?makeTrue():makeTrue()}}</span>
        <span>{{control.columnCount>='2'?changeHeight():remainSame()}}</span>
        <div
          class="item"
          v-for="(option, i) of optionHead"
          :key="i"
          @click="selected=option; open=false; $emit('input', option)"
        >
          <li>{{ option }}</li>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Mutation, Action, Getter } from "vuex-class";
import { EventBus } from "../../components/event-bus";
import "vue-select/dist/vue-select.css";


@Component({})
export default class UseComboBox extends Vue {
  @Prop() private control!: object;
  @Prop() private modal!: object;
  optionHead: any = [" "];
  options: any = [" "];

  @Prop() private tabindex = 0;

  open = false;

  selected = this.options.length > 0 ? this.options[0] : null;

  @Getter getPrevControlIndex!: any;
  @Mutation userFormIndex!: Function;
  @Mutation updatePrevControlIndex!: Function;
  @Mutation controlIndex!: Function;
  @Mutation updateControlIndex!: Function;
  @Mutation activateControl!: Function;

  customComoboBoxClick(e: any) {
    console.log("clickd");
    this.userFormIndex(this.modal);
    this.controlIndex(this.control);
    this.updatePrevControlIndex();
    this.updateControlIndex(this.getPrevControlIndex);
    this.activateControl();
    if (e.target.tagName === "INPUT") {
      (this as any).$refs.combobox.focus();
    } else if (e.target.tagName === "SELECT") {
      (this as any).$refs.selectcombo.focus();
    }
    EventBus.$emit("userFormClicked", this.control, this.modal);
  }

  mounted() {
    this.$emit("input", this.selected);
  }
  makeTrue() {
    if (this.control.columnHeads === "true") {
      this.optionHead = [" "];
      this.optionHead = [...this.options];
      this.optionHead.unshift(" ");
    } else if (this.control.columnHeads === "false") {
      this.optionHead = [" "];
      this.optionHead = [...this.options];
    }
  }
  changeHeight() {
    console.log("Height should change", this.control.columnCount);
    console.log(this.optionHead.length);
    this.optionHead[length];
  }
  remainSame() {
    console.log("Same", this.control.columnCount);
  }

  handleOptionInput(e: any, option: any) {
    e.target.checked = true;
  }

  handleMouseClick(e: any, option: any) {
    debugger;
    e.target.checked = true;
    this.selected = option;
    this.open = false;
    this.$emit("input", option);
  }

  handleMouseLeave(e: any) {
    e.target.checked = false;
  }
}
</script>



<style scoped>
.custom-select {
  position: relative;
  width: 300px;
  text-align: left;
  outline: none;
  /* height: 80px; */
  line-height: 15px;
  /* specify the drop down height */
  left: 20px;
  top: 15px;
  width: 80px;
  height: 100px;
}

.selected {
  background-color: lightgray;
  /* border-radius: 6px; */
  border: 1px solid #858586;
  border-left: 0px;
  color: black;
  /* background-image: none; */

  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="50" border="1px solid red"><polygon points="0,0 100,0 50,50" style="fill:%23666666;stroke-width:3;stroke:rgb(0,0,250)" /></svg>');
  background-size: 40%;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  /* user-select: none; */
  width: 20px;
  height: calc(100% - 2px);
}

.items {
  position: relative;
  color: black;
  background-color: white;
  overflow: hidden;
  left: 0;
  right: 0;
  width: calc(100% + 20px);
}

.item {
  /* list-style: none; */
  color: white;
  padding-left: 8px;
  cursor: pointer;
  border: 0.1px solid black;
}

.item:hover {
  background-color: white;
  /* color: white; */
  border: 0.1px solid black;
}

.selectHide {
  display: none;
}

.combobox {
  display: grid;
  grid-template-columns: 100% 20px;
}
.columnHeads {
  height: 19.2px;
  border: 1px solid black;
  border-top: 0px;
  display: grid;
  grid-template-columns: 20px 100%;
}
</style>