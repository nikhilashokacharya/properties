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
      <!-- <tr>
        <td>Accelerator</td>
        <td>
          <input type="text" :value="selectedUserForm.accelerator"  @input="handleChangeInput($event,'accelerator')"/>
        </td>
      </tr>-->
      <tr>
        <td>AutoSize</td>
        <td>
          <select
            :value="getSelectedControl.autoSize"
            @change="handleChangeInput($event,'autoSize')"
          >
            <option selected :value="false">False</option>
            <option :value="true">True</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>AutoTab</td>
        <td>
          <select
            :value="getSelectedControl.autoTab"
            @change="handleChangeInput($event,'autoSize')"
          >
            <option selected :value="false">False</option>
            <option :value="true">True</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>AutoWordSelect</td>
        <td>
          <select
            :value="getSelectedControl.autoWordSelect"
            @change="handleChangeInput($event,'autoSize')"
          >
            <option selected :value="false">False</option>
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
        <td>BoundColumn</td>
        <td>
          <input
            type="number"
            :value="getSelectedControl.boundColumn"
            @input="handleChangeInput($event,'boundColumn')"
          />
        </td>
      </tr>
      <tr>
        <td>ColumnCount</td>
        <td>
          <input
            type="number"
            :value="getSelectedControl.columnCount"
            @input="handleChangeInput($event,'columnCount')"
          />
        </td>
      </tr>
      <tr>
        <td>ColumnHeads</td>
        <td>
          <select
            :value="getSelectedControl.columnHeads"
            @change="handleChangeInput($event,'columnHeads')"
          >
            <option selected :value="false">false</option>
            <option :value="true">true</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>ColumnWidths</td>
        <td>
          <input
            type="number"
            :value="getSelectedControl.columnWidths"
            @input="handleChangeInput($event,'columnWidths')"
          />
        </td>
      </tr>
      <tr>
        <td>ControlSource</td>
        <td>
          <input
            type="number"
            :value="getSelectedControl.controlSource"
            @input="handleChangeInput($event,'controlSource')"
          />
        </td>
      </tr>
      <tr>
        <td>ControlTipText</td>
        <td>
          <input
            type="text"
            :value="getSelectedControl.title"
            @input="handleChangeInput($event,'title')"
          />
        </td>
      </tr>
      <tr>
        <td>DragBehavior</td>
        <td>
          <select
            :value="getSelectedControl.dragBehavior"
            @change="changeInput($event,'dragBehavior')"
          >
            <option v-for="(value,key) in dragBehavior" v-bind:value="value" :key="key">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>DropButtonStyle</td>
        <td>
          <select
            :value="getSelectedControl.style.BackgroundImage"
            @change="changeButtonStyle($event,'dropButtonStyle')"
          >
            <option v-for="(value,key) in dropButtonStyle" v-bind:value="value" :key="key">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Enabled</td>
        <td>
          <select :value="getSelectedControl.enabled" @change="handleChangeInput($event,'enabled')">
            <option selected :value="true">True</option>
            <option :value="false">False</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>EnterFieldBehavior</td>
        <td>
          <select
            :value="getSelectedControl.enterFieldBehavior"
            @change="changeInput($event,'enterFieldBehavior')"
          >
            <option
              v-for="(value,key) in enterFieldBehavior"
              v-bind:value="value"
              :key="key"
            >{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Font</td>
        <td>
          <select :value="getSelectedControl.font" @change="changeInput($event,'font')">
            <option v-for="(value,key) in font" v-bind:value="value" :key="key">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>ForeColor</td>
        <td>
          <select :value="getSelectedControl.foreColor" @change="changeInput($event,'foreColor')">
            <option v-for="(value,key) in foreColor" v-bind:value="value" :key="key">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Height</td>
        <td>
          <input
            type="number"
            :value="getSelectedControl.height | sizeFilter"
            @change="validators.sizeValidateForControls($event,getSelectedControl,'height')"
            @keyup.enter="validators.sizeValidateForControls($event,getSelectedControl,'height')"
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
          <select
            :value="getSelectedControl.hideSelection"
            @change="handleChangeInput($event,'hideSelection')"
          >
            <option selected>True</option>
            <option>False</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>IMEMode</td>
        <td>
          <select :value="getSelectedControl.iMEMode" @change="changeInput($event,'iMEMode')">
            <option v-for="(value,key) in iMEMode" v-bind:value="value" :key="key">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Left</td>
        <td>
          <input
            type="number"
            :value="getSelectedControl.left | sizeFilter"
            @change="validators.sizeValidateForControls($event,getSelectedControl,'left')"
            @keyup.enter="validators.sizeValidateForControls($event,getSelectedControl,'left')"
          />
        </td>
      </tr>
      <tr>
        <td>ListRows</td>
        <td>
          <input
            type="number"
            :value="getSelectedControl.listRows | sizeFilter"
            @change="validators.sizeValidateForControls($event,getSelectedControl,'listRows')"
            @keyup.enter="validators.sizeValidateForControls($event,getSelectedControl,'listRows')"
          />
        </td>
      </tr>
      <tr>
        <td>ListStyle</td>
        <td>
          <select :value="getSelectedControl.listStyle" @change="changeInput($event,'listStyle')">
            <option v-for="(value,key) in listStyle" v-bind:value="value" :key="key">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>ListWidth</td>
        <td>
          <input
            type="text"
            :value="getSelectedControl.listWidth | sizeFilter"
            @input="handleChangeListWidth($event,'listWidth','left')"
          />
        </td>
      </tr>
      <tr>
        <td>Locked</td>
        <td>
          <select :value="getSelectedControl.locked" @change="handleChangeInput($event,'locked')">
            <option selected>True</option>
            <option>False</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>MatchEntry</td>
        <td>
          <select :value="getSelectedControl.matchEntry" @change="changeInput($event,'matchEntry')">
            <option v-for="(value,key) in matchEntry" v-bind:value="value" :key="key">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>MatchRequired</td>
        <td>
          <select
            :value="getSelectedControl.matchRequired"
            @change="handleChangeInput($event,'matchRequired')"
          >
            <option selected>True</option>
            <option>False</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>MaxLength</td>
        <td>
          <input
            type="number"
            :value="getSelectedControl.maxLength"
            @input="handleChangeInput($event,'maxLength')"
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
          <select :value="getSelectedControl.cursor" @change="changeInput($event,'cursor')">
            <option v-for="(value,key) in mousePointer" v-bind:value="value" :key="key">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>RowSource</td>
        <td>
          <input
            type="number"
            :value="getSelectedControl.rowSource"
            @input="handleChangeInput($event,'rowSource')"
          />
        </td>
      </tr>
      <tr>
        <td>SelectionMargin</td>
        <td>
          <select
            :value="getSelectedControl.selectionMargin"
            @change="handleChangeInput($event,'selectionMargin')"
          >
            <option :value="false" selected>False</option>
            <option :value="true">True</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>ShowDropButtonWhen</td>
        <td>
          <select
            :value="getSelectedControl.showDropButtonWhen"
            @change="handleChangeInput($event,'showDropButtonWhen')"
          >
            <option
              v-for="(value,key) in showDropButtonWhen"
              v-bind:value="value"
              :key="key"
            >{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>SpecialEffect</td>
        <td>
          <select
            :value="getSelectedControl.specialEffect"
            @change="handleChangeInput($event,'specialEffect')"
          >
            <option v-for="(value,key) in specialEffect" v-bind:value="value" :key="key">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Style</td>
        <td>
          <select :value="getSelectedControl.style" @change="handleChangeInput($event,'style')">
            <option v-for="(value,key) in style" v-bind:value="value" :key="key">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>TabIndex</td>
        <td>
          <input
            type="number"
            :value="getSelectedControl.tabindex"
            @input="handleChangeInput($event,'tabindex')"
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
            @input="handleChangeInput($event,'tag')"
          />
        </td>
      </tr>
      <!-- <tr>
        <td>TakeFocusOnClick</td>
        <td>
          <select :value="selectedUserForm.takeFocusOnClick" @change="handleChangeInput($event,'takeFocusOnClick')">
            <option selected>True</option>
            <option>False</option>
          </select>
        </td>
      </tr>-->
      <tr>
        <td>Text</td>
        <td>
          <input
            type="text"
            :value="getSelectedControl.text"
            @input="handleChangeInput($event,'text')"
          />
        </td>
      </tr>
      <tr>
        <td>TextAlign</td>
        <td>
          <select
            :value="getSelectedControl.textAlign"
            @change="handleChangeInput($event,'textAlign')"
          >
            <option v-for="(value,key) in textAlign" v-bind:value="value" :key="key">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>TextColumn</td>
        <td>
          <input
            type="number"
            :value="getSelectedControl.textColumn | sizeFilter"
            @change="validators.sizeValidateForControls($event,getSelectedControl,'textColumn')"
            @keyup.enter="validators.sizeValidateForControls($event,getSelectedControl,'textColumn')"
          />
        </td>
      </tr>
      <tr>
        <td>Top</td>
        <td>
          <input
            type="number"
            :value="getSelectedControl.top | sizeFilter"
            @change="validators.sizeValidateForControls($event,getSelectedControl,'top')"
            @keyup.enter="validators.sizeValidateForControls($event,getSelectedControl,'top')"
          />
        </td>
      </tr>
      <tr>
        <td>TopIndex</td>
        <td>
          <input
            type="number"
            :value="getSelectedControl.topIndex | sizeFilter"
            @change="validators.sizeValidateForControls($event,getSelectedControl,'topIndex')"
            @keyup.enter="validators.sizeValidateForControls($event,getSelectedControl,'topIndex')"
          />
        </td>
      </tr>
      <tr>
        <td>Value</td>
        <td>
          <input
            type="text"
            :value="getSelectedControl.value"
            @input="handleChangeInput($event,'value')"
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
            :value="getSelectedControl.width | sizeFilter"
            @change="validators.sizeValidateForControls($event,getSelectedControl,'width')"
            @keyup.enter="validators.sizeValidateForControls($event,getSelectedControl,'width')"
          />
        </td>
      </tr>
      <!-- <tr>
        <td class="lefttd">WordWrap</td>
        <td>
          <select ::value="selectedUserForm.wordWrap" @change="handleChangeInput($event,'wordWrap')">
            <option selected :value="false">False</option>
            <option :value="true">True</option>
          </select>
        </td>
      </tr>-->
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import backColor from "../models/backColor.json";
import backStyle from "../models/backStyle.json";
import font from "../models/font.json";
import foreColor from "../models/foreColor.json";
import mousePointer from "../models/mousePointer.json";
import picturePosition from "../models/picturePosition.json";
import specialEffect from "../models/specialEffect.json";
import textAlign from "../models/textAlign.json";
import { validators } from "../validators/validator";
import { Getter, Mutation } from "vuex-class";
import dropButtonStyle from "../models/dropButtonStyle.json";
import showDropButtonWhen from "../models/showDropButtonWhen.json"

@Component({
  filters: {
    sizeFilter(value: any) {
      return parseInt(value, 10);
    },
  },
})
export default class ComboBoxTable extends Vue {
  @Prop() selectedUserForm: any;
  validators: object = validators;

  backColor: object = backColor;
  backStyle: object = backStyle;
  font: object = font;
  foreColor: object = foreColor;
  mousePointer: object = mousePointer;
  specialEffect: object = specialEffect;
  picturePosition: object = picturePosition;
  textAlign: object = textAlign;
  dropButtonStyle: object = dropButtonStyle;
  showDropButtonWhen: object = showDropButtonWhen;

  @Getter getSelectedControl!: any;
  @Mutation updateControl!: any;
  @Mutation updateControlStyle!: any;

  mounted() {
    console.log("getting", this.getSelectedControl);
  }
  handleChangeInput(e: any, styleName: string) {
    console.log("inputd", e.target.value);
    this.updateControl({ styleValue: e.target.value, styleName: styleName });
  }
  changeInput(e: any, styleName: string) {
    this.updateControlStyle({
      styleValue: e.target.value,
      styleName: styleName,
    });
  }
  handleChangeListWidth(e: any, styleName1: string,styleName2: string) {
    // console.log("handleChangeListWidth", e, styleName1);
    console.log("targetting", this.getSelectedControl);
    if (parseInt(e.target.value) < 1000) {
      this.getSelectedControl.listWidth = parseInt(e.target.value) + "px";
      this.updateControlStyle({
        styleValue: parseInt(e.target.value) + "px",
        styleName: styleName1,
      });
    } else if (parseInt(e.target.value) > 1000) {
      const x = parseInt(e.target.value) % 1000;
      this.getSelectedControl.listWidth = parseInt(e.target.value) + "px";
      this.getSelectedControl.left = -x + "px";
      this.updateControlStyle({
        styleValue: parseInt(e.target.value) + "px",
        styleName: styleName1,
        
      });
     
      // this.updateControlStyle({
      //   styleValue: -x + "px",
      //   styleName: styleName2,
        
      // });
    }
     
  }
  changeButtonStyle(e: any, styleName: string){
        // console.log('Changing button',e.target.value,styleName);
        this.$emit("changing-button",e.target.value,styleName);
      }
}
</script>

<style scoped>
table {
  margin-right: 0%;
  width: 100%;
  border: 1px solid black;
  border-collapse: collapse;
  font-size: 11px;
  padding: none;
  color: black;
}

td {
  text-align: left;
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
  width: 100%;
}
input {
  width: 100%;
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
.lefttd {
  width: 120px;
}
</style>