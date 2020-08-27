<template>
  <div class="primary-content">
    <div class="resp-textbox">
      <!-- <div
        contenteditable="true"
        ref="reftextarea"
        v-if="control"
        :id="control.id"
        :key="control.id"
        :title="control.controlTipText"
        :maxlength="control.maxLength"
        :tabindex="control.tabindex"
        :style="control.style"
        @mousedown="customTextBoxClick"
        @input="(control.passwordChar==='')?handleInput($event,'value','text'):handleKeyPress($event,'value','text')"
        @mouseup.stop
        @keydown="handleDelete"
        :disabled="!control.enabled"
        :readonly="control.locked==='true'"
        class="text-box-design"
        :wrap="(control.multiLine===true)?'hard':'off'"
        v-cursorDirective="{start:control.cursorStartPosition,end:control.cursorEndPosition,sel:control.passwordChar}"
        v-on:blur="handleBlur"
        v-on:click="handleFocus">
        {{control.value | passwordFilter(control.passwordChar,control.value)}}
      </div>-->

      <textarea
        ref="reftextarea"
        contenteditable="true"
        v-if="control"
        :id="control.id"
        :key="control.id"
        :title="control.controlTipText"
        :maxlength="control.maxLength"
        :tabindex="control.tabindex"
        :style="control.style"
        @mousedown="customTextBoxClick"
        @input="(control.passwordChar==='')?handleInput($event,'value','text'):handleKeyPress($event,'value','text')"
        @mouseup.stop
        @keydown="handleDelete"
        :value="control.value | passwordFilter(control.passwordChar,control.value)"
        :disabled="!control.enabled"
        :readonly="control.locked==='true'"
        class="text-box-design"
        type="text"
        :wrap="(control.multiLine===true)?'hard':'off'"
        v-cursorDirective="{start:control.cursorStartPosition,end:control.cursorEndPosition,sel:control.passwordChar}"
        v-on:blur="handleBlur"
        v-on:click="handleFocus"
        @dragstart="(control.dragBehavior==='0 - fmDragBehaviorDisabled')?handleDrag($event):'return false'" 
        @drop="handleDrop($event)"
        @dragover="handleDragOver($event)"
      />
<!-- @drop="(true)?handleDrop($event):'return false'" -->
      <div
        v-if="hideSelectionActivation"
        ref="dummydiv"
        contenteditable="true"
        @click="divHide"
        :style="[control.style,{display:'none',fontSize: '13.3px',paddingTop:'2px'}]"
        :title="control.controlTipText"
        class="text-box-design"
      >{{control.value | passwordFilter(control.passwordChar,control.value)}}</div>
    </div>
  </div>
  <!-- @keyup.enter="trigger" -->
  <!-- @mousemove="handleWordSelection" -->
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Mutation, Action, Getter } from "vuex-class";
import { EventBus } from "../../components/event-bus";
import String from "../../components/String";


/* eslint-disable */

@Component({
  directives: {
    cursorDirective: {
      update(e, node) {
        if (node.value.sel !== "") {
          e.selectionStart = node.value.start;
          e.selectionEnd = node.value.end;
        }
      }
    }
  },
  filters: {
    passwordFilter(value: any, password: any, text: any) {
      if (password !== "" && text !== "") {
        let filteredValue = "";

        for (let index = 0; index < text.length; index++) {
          filteredValue = filteredValue + password;
        }
        return filteredValue;
      }
      return value;
    }
  }
})
export default class UseTextBox extends Vue {
  @Prop() private control!: object;
  @Prop() private modal!: object;

  @Getter getPrevControlIndex!: any;
  @Mutation userFormIndex!: Function;
  @Mutation updatePrevControlIndex!: Function;
  @Mutation controlIndex!: Function;
  @Mutation updateControlIndex!: Function;
  @Mutation activateControl!: Function;
  ///
  @Mutation updateControl!: Function;
  @Mutation updateDualControls!: Function;
  @Action updatePasswordChar!: Function;

  dragdata:any

  handleDelete(e: any) {
    if (e.keyCode === 8) {
      this.control.cursorStartPosition = e.target.selectionStart;
      this.control.cursorEndPosition = e.target.selectionEnd;
    }
    //else if(e.keyCode === 38 || e.keyCode === 39 || e.keyCode === 37 || e.keyCode === 40){
    // this.control.cursorStartPosition = e.target.selectionStart
    // this.control.cursorEndPosition = e.target.selectionEnd
    // }
    // else {
    //   this.control.cursorStartPosition = e.target.selectionStart
    // this.control.cursorEndPosition = e.target.selectionEnd
    // }
  }

  //  String.splice = function( idx:any, rem:any, s:any ) {
  // //     return (this.slice(0,idx) + s + this.slice(idx + Math.abs(rem)));
  // // }

  //hideSelection
  handleBlur(e: any) {
    // debugger;
    (this as any).$refs.dummydiv.style.display = "block";
    (this as any).$refs.dummydiv.style.height = parseInt(this.control.style.height)+2+"px";
    (this as any).$refs.dummydiv.style.width = parseInt(this.control.style.width)+2+"px";
    (this as any).$refs.reftextarea.style.display = "none";
    let textarea = e.target.value;
    /*  (this as any).dummydiv.innerHTML = textarea.splice(e.target.selectionEnd, 0, "</span>")
     .splice(e.target.selectionStart, 0,"<span>"); */
    let firstPart =
      textarea.slice(0, e.target.selectionEnd) +
      "</span>" +
      textarea.slice(e.target.selectionEnd + Math.abs(0));
    let text =
      firstPart.slice(0, e.target.selectionStart) +
      "<span style='background-color:lightblue'>" +
      firstPart.slice(e.target.selectionStart + Math.abs(0));
    (this as any).$refs.dummydiv.innerHTML = text;
  }

  //selectionMargin
  handleFocus(e: any) {
    // debugger;
    if (this.control.selectionMargin === true) {
      console.log("clientX", e.clientX);
      console.log("clientY: ", e.clientY);
      console.log("ref", (this as any).$refs);
    }
    (this as any).$refs.dummydiv.style.display = "none";
  }

  //hideSelection true/false
  hideSelectionActivation(){
        if(this.control.hideSelection ==="false"){
          return true
        } else{
            let isEmpty= Object.keys((this as any).$refs).length
          if(isEmpty>0){
            console.log("ddddddd",(this as any).$refs);
            (this as any).$refs.reftextarea.style.display = "block";
          }
            return false
        }
  }

  //hide/show dummydiv then textarea
  divHide(e: any) {
    // debugger;
    e.target.style.display = "none";
    (this as any).$refs.reftextarea.style.display = "block";
    if(e.target.tagName ==="SPAN" &&  e.target.parentNode.nodeName === "DIV"){
       e.target.parentNode.style.display="none";
    }
     this.customTextBoxClick()
  }

  handleWordSelection(e: any) {
    var sel;
    debugger;
    // Check for existence of window.getSelection() and that it has a
    // modify() method. IE 9 has both selection APIs but no modify() method.
    if (window.getSelection && (sel = window.getSelection()).modify) {
      sel = window.getSelection();
      if (!sel.isCollapsed) {
        // Detect if selection is backwards
        var range = document.createRange();
        range.setStart(sel.anchorNode, sel.anchorOffset);
        range.setEnd(sel.focusNode, sel.focusOffset);
        var backwards = range.collapsed;
        range.detach();

        // modify() works on the focus of the selection
        var endNode = sel.focusNode,
          endOffset = sel.focusOffset;
        sel.collapse(sel.anchorNode, sel.anchorOffset);

        var direction = [];
        if (backwards) {
          direction = ["backward", "forward"];
        } else {
          direction = ["forward", "backward"];
        }

        sel.modify("move", direction[0], "character");
        sel.modify("move", direction[1], "word");
        sel.extend(endNode, endOffset);
        sel.modify("extend", direction[1], "character");
        sel.modify("extend", direction[0], "word");

        console.log("inmouse", sel);
      }
    } else if ((sel = document.selection) && sel.type != "Control") {
      var textRange = sel.createRange();
      if (textRange.text) {
        textRange.expand("word");
        // Move the end back to not include the word's trailing space(s),
        // if necessary
        while (/\s$/.test(textRange.text)) {
          textRange.moveEnd("character", -1);
        }
        textRange.select();
      }
      console.log("inmouse", textRange);
    }
  }


  customTextBoxClick() {
    console.log("clickd");
    this.userFormIndex(this.modal);
    this.controlIndex(this.control);
    this.updatePrevControlIndex();
    this.updateControlIndex(this.getPrevControlIndex);
    this.activateControl();
    (this as any).$refs.reftextarea.focus();
    EventBus.$emit("userFormClicked", this.control, this.modal);
  }

  handleInput(e: any, styleName1: string, styleName2: string) {
    debugger;
   // let start = this.control.cursorStartPosition;
  //  let end = this.control.cursorEndPosition;
    // if(this.control.dragBehavior==="0 - fmDragBehaviorDisabled" && (start!==end)){
    //     this.handleDrop(e);
    // }

    this.updateDualControls({
      value1: e.target.value,
      value2: e.target.value,
      prop1: styleName1,
      prop2: styleName2
    });
  }

  //passwordChar
  handleKeyPress(e: any, styleName1: string, styleName2: string) {
    debugger;
    // this.control.cursorStartPosition=e.target.selectionStart
    let newData;
    let text = this.control.text;
    let data = e.data;
    let selectionDiff =
      this.control.cursorStartPosition !== this.control.cursorEndPosition
        ? true
        : false;
    if (selectionDiff) {
      //selection
      newData =
        text.substring(0, this.control.cursorStartPosition) +
        text.substring(this.control.cursorEndPosition);
      console.log("asa", newData);
      this.updateDualControls({
        value1: newData,
        value2: newData,
        prop1: styleName1,
        prop2: styleName2
      });
    } else if (text.length < e.target.value.length) {
      //insertion
      newData = [
        text.slice(0, e.target.selectionStart - 1),
        e.data,
        text.slice(e.target.selectionStart - 1)
      ].join("");
      this.updateDualControls({
        value1: newData,
        value2: newData,
        prop1: styleName1,
        prop2: styleName2
      });
    } else if (text.length > e.target.value.length) {
      //deletion
      newData = [
        text.slice(0, e.target.selectionStart),
        text.slice(e.target.selectionStart + 1)
      ].join("");
      this.updateDualControls({
        value1: newData,
        value2: newData,
        prop1: styleName1,
        prop2: styleName2
      });
    }
    debugger;
    this.control.cursorStartPosition = e.target.selectionStart;
    this.control.cursorEndPosition = e.target.selectionEnd;

    // if (this.control.passwordChar !== "") {
    //   let event = this.control.text.charAt([e.target.selectionStart ]);
    //   let text = this.control.text;
    //   let value = this.control.value;
    //   if (e.keyCode === 8 || e.keyCode === 46) {

    //     let newValue;
    //     if (text.length - 1 === e.target.selectionStart) {
    //       console.log("last character", text.substring(0, text.length - 1));
    //       newValue = text.substring(0, text.length - 1);
    //     } else if (e.target.selectionStart === 0) {
    //       console.log("first character", text.substring(1, text.length));
    //       newValue = text.substring(1, text.length);
    //     } else if (
    //       e.target.selectionStart !== 0 &&
    //       e.target.selectionStart  !== text.length - 1
    //     ) {
    //       newValue =
    //         text.substring(0, e.target.selectionStart) +
    //         text.substring(e.target.selectionStart, text.length);
    //       console.log(newValue);
    //     }
    //     this.updateDualControls({
    //       value1: newValue,
    //       value2: newValue,
    //       prop1: "text",
    //       prop2: "value"
    //     });
    //   } else {
    //      let event1 = e.target.value[e.target.selectionStart-1 ];
    //        let text1 = this.control.text + event1;
    //          let value1 = this.control.value + event1;
    // //update text and value
    // this.updateDualControls({
    //   value1: value1,
    //   value2: text1,
    //   prop1: styleName1,
    //   prop2: styleName2
    // });
    //   }
    // }
  }

// dragBehavior
handleDrag(e:any){
 // e.preventDefault();
  let data = e.target.value;
  let start = e.target.selectionStart;
  let end = e.target.selectionEnd;
  let update = "";
  let initial = data.slice(0,start)+data.slice(end,data.length)
  for (let index = start; index < end; index++) {
      update = update + data[index]
  }
  e.dataTransfer.setData("text", update);
  return true
}
//DragBehavior
handleDrop(e:any){
  debugger;
   //e.preventDefault();
  let data = e.dataTransfer.getData("text");
  console.log("here drop",data)
  let start = e.target.selectionStart;
  let end = e.target.selectionEnd;
    let initialData=this.control.value;
    let initdata= initialData.slice(0,start)+data+initialData.slice(end,data.length)
    console.log("ccc",initdata)
    this.controlIndex(this.control);
   this.updateDualControls({
      value1: initdata,
      value2: initdata,
      prop1: 'text',
      prop2: 'value'
    });
  return true

}

handleDragOver(e:any){
   e.preventDefault();
  console.log("drag over")
  console.log(e)
}










mounted(){
  EventBus.$on("dragBehavior",(dragData:any)=>{
  console.log(dragData)
  //this.updateControl({styleName:"value",styleValue:dragData})
  this.dragdata = dragData
})
}





}
</script>

<style scoped>
/* For default values */
.text-box-design {
  border: 0.2px solid gray;
  box-shadow: -1px -1px gray;
  width: 100px;
  height: 20px;
  resize: none;
}
.text-box-design:focus{
  outline:none
  }

.text-box-design::selection {
  background: lightblue;
}
</style>