<template>
     <div class="primary-content">
    <div class="resp-textbox">
      <div
        contenteditable="true"
        ref="div"
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
      />
    </div>
  </div>
</template>
<style scoped>

</style>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    
})
</script>