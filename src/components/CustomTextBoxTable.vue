<template>
  <div>
    <div class="btn-group">
      <button class="button" default>Alphabetic</button>
      <button class="button">Categorized</button>
    </div>
    <table class="table">
      <tr>
        <td>(Name)</td>
        <td>
          <input
            type="text"
            :value="getSelectedControl.name"
            @input="handleChangeInput($event,'name')"
          />
        </td>
      </tr>
      <tr>
        <td>AutoTab</td>
        <td>
          <select :value="getSelectedControl.autoSize" @change="autoSizeChange">
            <option :value="false">False</option>
            <option :value="true">True</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>AutoWordSelect</td>
        <td>
          <select :value="getSelectedControl.autoWordSelect" @change="autoSizeChange">
            <option :value="false">False</option>
            <option :value="true">True</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>BackColor</td>
        <td>
          <select
            :value="getSelectedControl.style.backgroundColor"
            @change="changeInput($event,'backgroundColor')"
          >
            <option v-for="(item,key) in backColor" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>BackStyle</td>
        <select
          :value="getSelectedControl.style.backgroundColor"
          @change="changeInput($event,'backgroundColor')"
        >
          <option v-for="(item,key) in backStyle" :key="key" :value="item">{{key}}</option>
        </select>
      </tr>
      <tr>
        <td>BorderColor</td>
        <td>
          <select
            :value="getSelectedControl.style.borderColor"
            @change="changeInput($event,'borderColor')"
          >
            <option v-for="(item,key) in borderColor" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>BorderStyle</td>
        <td>
          <select :value="getSelectedControl.style.border" @change="changeInput($event,'border')">
            <option v-for="(item,key) in borderStyle" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>ControlSource</td>
        <td>
          <input
            type="text"
            :value="getSelectedControl.caption"
            @change="handleCaption($event,'controlSource')"
          />
        </td>
      </tr>
      <tr>
        <td>ControlTipText</td>
        <td>
          <input
            type="text"
            :value="getSelectedControl.controlTipText"
            @change="handleChangeInput($event,'controlTipText')"
          />
        </td>
      </tr>
      <tr>
        <td>DragBehavior</td>
        <td>
          <select
            :value="getSelectedControl.dragBehavior"
            @change="handleChangeInput($event,'dragBehavior')"
          >
            <option selected :value="false">0 - fmDragBehaviorDisabled</option>
            <option :value="true">1 - fmDragBehaviorEnabled</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Enabled</td>
        <td>
          <select
            v-model="getSelectedControl.enabled"
            @change="handleEnabled(getSelectedControl.enabled)"
          >
            <option :value="true">True</option>
            <option :value="false">False</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>EnterFieldBehavior</td>
        <td>
          <select :value="getSelectedControl.enterFieldBehavior" @change="autoSizeChange">
            <option selected :value="false">0 - fmEnterFiledBehaviorSelectAll</option>
            <option :value="true">1 - fmEnterFiledBehaviorRecallSelection</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>EnterKeyBehavior</td>
        <td>
          <select :value="getSelectedControl.enterKeyBehavior" @change="autoSizeChange">
            <option selected :value="false">False</option>
            <option :value="true">True</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Font</td>
        <td>
          <select
            :value="getSelectedControl.style.fontFamily"
            @change="changeInput($event,'fontFamily')"
          >
            <option v-for="(value,key) in font" v-bind:value="value" :key="key">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>ForeColor</td>
        <td>
          <select :value="getSelectedControl.style.color" @change="changeInput($event,'color')">
            <option v-for="(value,key) in foreColor" v-bind:value="value" :key="key">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Height</td>
        <td>
          <input
            type="number"
            :value="getSelectedControl.style.height  | sizeFilter"
            @change="handleSizeForControls($event,getSelectedControl,'height')"
            @keyup.enter="handleSizeForControls($event,getSelectedControl,'height')"
          />
        </td>
      </tr>
      <tr>
        <td>HelpContextId</td>
        <td>
          <input
            type="number"
            :value="getSelectedControl.helpContextId"
            @input="handleChangeInput($event,'helpContextId')"
          />
        </td>
      </tr>
      <tr>
        <td>HideSelection</td>
        <td>
          <select :value="getSelectedControl.hideSelection" @change="handleHideSelection($event,'hideSelection')">
            <option selected :value="false">False</option>
            <option :value="true">True</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>IMEMode</td>
        <td>
          <select :value="getSelectedControl.imeMode" @change="autoSizeChange">
            <option selected value="0 - fmIMEModeNOControl">0 - fmIMEModeNOControl</option>
            <!-- <option :value="true">True</option> -->
          </select>
        </td>
      </tr>
      <tr>
        <td>IntegralHeight</td>
        <td>
          <select :value="getSelectedControl.integralHeight" @change="autoSizeChange">
            <option selected :value="false">False</option>
            <option :value="true">True</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Left</td>
        <td>
          <input
            type="number"
            :value="getSelectedControl.style.left  | sizeFilter"
            @change="handleSizeForControls($event,getSelectedControl,'left')"
            @keyup.enter="handleSizeForControls($event,getSelectedControl,'left')"
          />
        </td>
      </tr>
      <tr>
        <td>Locked</td>
        <td>
          <select :value="getSelectedControl.locked" @change="handleLocked($event,'locked')">
            <option selected :value="false">False</option>
            <option :value="true">True</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>MaxLength</td>
        <td>
          <input
            type="number"
            :value="getSelectedControl.maxLength  | sizeFilter"
            @change="handleMaxLength($event,'maxLength')"
          />
        </td>
      </tr>
      <tr>
        <td>MouseIcon</td>
        <td>
          <input type="file" />
        </td>
      </tr>
      <tr>
        <td>MousePointer</td>
        <td>
          <select :value="getSelectedControl.style.cursor" @change="changeInput($event,'cursor')">
            <option v-for="(value,key) in mousePointer" v-bind:value="value" :key="key">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>MultiLine</td>
        <td>
          <select
            :value="getSelectedControl.multiLine"
            @change="handelMultiLine($event,'multiLine')"
          >
            <option selected :value="false">False</option>
            <option :value="true">True</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>PasswordChar</td>
        <td>
          <input
            type="text"
            :value="getSelectedControl.passwordChar"
            @change="handlePasswordChar($event,'passwordChar')"
          />
        </td>
      </tr>
      <tr>
        <td>ScrollBars</td>
        <td>
          <select
            :value="getSelectedControl.scrollBars"
            @change="handleChangeInput($event,'scrollBars')"
          >
            <option v-for="(item,key) in scrollBars" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>SelectionMargin</td>
        <td>
          <select
            :value="getSelectedControl.selectionMargin"
            @change="handleSelectionMargin($event,'paddingLeft')"
          >
            <option :value="false" selected>False</option>
            <option :value="true">True</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>SpecialEffect</td>
        <td>
          <select
            :value="getSelectedControl.style.boxShadow"
            @change="changeInput($event,'boxShadow')"
          >
            <option v-for="(value,key) in specialEffect" v-bind:value="value" :key="key">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>TabIndex</td>
        <td>
          <input
            type="number"
            :value="getSelectedControl.tabindex"
            @change="handleChangeInput($event,'tabindex')"
          />
        </td>
      </tr>
      <tr>
        <td>TabStop</td>
        <td>
          <select :value="getSelectedControl.tabStop" @change="handleChangeInput($event,'tabStop')">
            <option :value="false" selected>False</option>
            <option :value="true">True</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Tag</td>
        <td>
          <input
            type="text"
            :value="getSelectedControl.tag"
            @change="handleChangeInput($event,'tag')"
          />
        </td>
      </tr>
      <tr>
        <td>Text</td>
        <td>
          <input
            type="text"
            :value="getSelectedControl.text"
            @input="handleTextAndValue($event,'text','value')"
          />
        </td>
      </tr>
      <tr>
        <td>TextAlign</td>
        <td>
          <select
            :value="getSelectedControl.style.textAlign"
            @change="changeInput($event,'textAlign')"
          >
            <option v-for="(value,key) in textAlign" v-bind:value="value" :key="key">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Top</td>
        <td>
          <input
            type="number"
            :value="getSelectedControl.style.top  | sizeFilter"
            @change="handleSizeForControls($event,getSelectedControl,'top')"
            @keyup.enter="handleSizeForControls($event,getSelectedControl,'top')"
          />
        </td>
      </tr>
      <tr>
        <td>Value</td>
        <td>
          <input
            type="text"
            :value="getSelectedControl.value"
            @input="handleTextAndValue($event,'text','value')"
          />
        </td>
      </tr>
      <tr>
        <td>Visible</td>
        <td>
          <select :value="getSelectedControl.visible" @change="handleChangeInput($event,'visible')">
            <option :value="false">False</option>
            <option :value="true" selected>True</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Width</td>
        <td>
          <input
            type="number"
            :value="getSelectedControl.style.width  | sizeFilter"
            @change="handleSizeForControls($event,getSelectedControl,'width')"
            @keyup.enter="handleSizeForControls($event,getSelectedControl,'width')"
          />
        </td>
      </tr>
      <tr>
        <td>WordWrap</td>
        <td>
          <select :v-model="getSelectedControl.wordWrap" @change="wordWrapChange($event)">
            <option selected :value="false">False</option>
            <option :value="true">True</option>
          </select>
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
/* eslint-disable */

import { Component, Prop, Vue } from "vue-property-decorator";
import backColor from "../models/backColor.json";
import backStyle from "../models/backStyle.json";
import borderColor from "../models/borderColor.json";
import borderStyle from "../models/borderStyle.json";
import font from "../models/font.json";
import foreColor from "../models/foreColor.json";
import mousePointer from "../models/mousePointer.json";
import picturePosition from "../models/picturePosition.json";
import specialEffect from "../models/specialEffect.json";
import textAlign from "../models/textAlign.json";
import { validators } from "../validators/validator";
import { Mutation, Getter, Action } from "vuex-class";
import { EventBus } from "./event-bus";
import scrollBars from "../models/scrollBars.json";
import { OVERFLOW, INVALID_VALUE, INVALID_PICTURE } from "../utils/constant";

@Component({
  filters: {
    sizeFilter(value: any) {
      return parseInt(value, 10);
    },
  }
})
export default class CustomTextBoxTable extends Vue {
  /* eslint-disable */
  @Prop() selectedUserForm: any;
  validators: object = validators;
  backColor: object = backColor;
  borderColor: object = borderColor;
  borderStyle: object = borderStyle;
  backStyle: object = backStyle;
  font: object = font;
  foreColor: object = foreColor;
  mousePointer: object = mousePointer;
  specialEffect: object = specialEffect;
  picturePosition: object = picturePosition;
  textAlign: object = textAlign;
  scrollBars: object = scrollBars;

  @Getter getSelectedControl!: any;
  @Mutation updateControl!: any;
  @Mutation updateControlStyle!: any;
  //
  @Action updatePicturePositionAction!: any;
  @Action updateAcceleratorAction!: any;
  @Action updateCaption!: any;
  //textbox
  @Action updatePasswordChar!: any;
  @Mutation updateDualControls!: any;


  mounted() {
    console.log("Asd", this.getSelectedControl);
  }

  handleChangeInput(e: any, styleName: string) {
    this.updateControl({ styleValue: e.target.value, styleName: styleName });
  }

  changeInput(e: any, styleName: string) {
    this.updateControlStyle({
      styleValue: e.target.value,
      styleName: styleName
    });
  }

  ////////////////////
  autoSizeChange(e: any) {
    debugger;
    console.log("asd", this.getSelectedControl);
  }
  handleEnabled(data: boolean) {
    if (data) {
      this.getSelectedControl.style.color = "black";
    } else {
      this.getSelectedControl.style.color = "#DCDCDC";
    }
  }
  wordWrapChange(event: any) {
    if (event.target.value === "true") {
      this.getSelectedControl.style.wordWrap = "break-word";
      this.getSelectedControl.style.whiteSpace = "normal";
    } else {
      this.getSelectedControl.style.wordWrap = "normal";
      this.getSelectedControl.style.whiteSpace = "nowrap";
    }
  }

  ///////////////

  //maxlength
  handleMaxLength(event: any, styleName: string) {
    debugger;
    this.updateControl({
      styleValue: event.target.value,
      styleName: styleName
    });
  }

  //multiline
  handelMultiLine(event: any, styleName: string) {
    debugger;
    if (event.target.value === "true") {
      this.updateControl({
        styleValue: true,
        styleName: styleName
      });
    } else {
      this.updateControl({
        styleValue: false,
        styleName: styleName
      });
    }
  }

  //SelectionMargin
  handleSelectionMargin(event: any, styleName: string) {
    debugger;
    if (event.target.value === "true") {
      this.updateControlStyle({ styleValue: "10px", styleName: styleName });
    } else {
      this.updateControlStyle({ styleValue: "0px", styleName: styleName });
    }
  }

  //size
  handleSizeForControls(event: any, getSelectedControl: any, styleName: any) {
    debugger;
    const result = validators.sizeValidateForControls(
      event,
      getSelectedControl,
      styleName
    );
    if (event.target.value.length <= 12) {
      if (result === false) {
        debugger;
        EventBus.$emit("Popup", OVERFLOW, true);
      }
    } else {
      EventBus.$emit("Popup", INVALID_VALUE, true);
    }
  }

  //passwordChar
  handlePasswordChar(event: any, styleName: any) {
    debugger;
    if (event.target.value !== "") {
      this.updatePasswordChar({
        styleValue: event.target.value[0],
        styleName: styleName
      });
    } else {
      this.updateControl({
        styleValue: event.target.value,
        styleName: styleName
      });
    }
    //  EventBus.$emit("password",this.getSelectedControl.passwordChar)
  }

  //text and value
  handleTextAndValue(e: any, styleName1: string, styleName2: string) {
    debugger;
    this.updateDualControls({
      prop1: styleName1,
      prop2: styleName2,
      value1: event.target.value,
      value2: event.target.value
    });
  }

  //locked
  handleLocked(e: any, styleName: string) {
    this.updateControl({
      styleValue: event.target.value,
      styleName: styleName
    });
  }

  //hideSelection
  handleHideSelection(e:any,styleName:string){
    debugger
    this.updateControl({
      styleValue: e.target.value,
      styleName: styleName
    });
  }



}
</script>





<style scoped>
.node {
  text-align: left;
}
table,
th,
td {
  /* table-layout: fixed; */
  margin-right: 0%;
  width: 100%;
  border: 1px solid black;
  border-collapse: collapse;
  color: black;
}
th,
td {
  text-align: left;
  font-size: 11px;
}
th {
  width: 120%;
  font-size: 12px;
}
.form-control {
  float: left;
  width: 280px;
  cursor: pointer;
  background-color: rgb(190, 185, 185);
  /* border: 6px solid grey; */
}
label {
  float: left;
}
select {
  /* width: 100%; */
  width: 166px;
  padding: 1px 2px;
}

/* Must be added as style for the new data */
.btn-group .button {
  border: none;
  color: black;

  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  cursor: pointer;
  /* float: left; */
}
.btn-group .button {
  border: none;
  color: black;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  cursor: pointer;
  /* float: left; */
}
</style>