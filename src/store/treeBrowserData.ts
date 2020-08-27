import { GetterTree, MutationTree, ActionTree } from 'vuex'
import { treeData } from '../models/TreeData'
import { EventBus } from '@/components/event-bus'
/* eslint-disable */

export const state: any = {
  treeBrowserData: treeData,
  useFormIdIndex: -1,
  controlIdIndex: -1
}


export const getters: GetterTree<any, any> = {

  getTreeBrowserData: state => state.treeBrowserData.userForms[0].userForms,
  getRoot: state => state.treeBrowserData,
  getUserFormIndex: state => state.useFormIdIndex,
  getControlIndex: state => state.controlIdIndex,
  getPrevControlIndex: state => state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].controlZIndex,
  getSelectedUserForm: state => state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex],
  getSelectedControl: state => state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].controls[state.controlIdIndex]

}

export const mutations: MutationTree<any> =
{
  addtreeBrowserData: (state, userForm) => {

    state.treeBrowserData.userForms[0].userForms = [
      ...state.treeBrowserData.userForms[0].userForms,
      userForm
    ];
  },
  closeWindow: (state, userForm) => {
    const userFormIndex = state.treeBrowserData.userForms[0].userForms.findIndex((val: any) => val.id === userForm.id)
    state.treeBrowserData.userForms[0].userForms[userFormIndex].outerWindowStyle.container.display = "none";
  },
  userFormIndex: (state, userForm) => {
    state.useFormIdIndex = state.treeBrowserData.userForms[0].userForms.findIndex((val: any) => val.id === userForm.id)
  },
  controlIndex: (state, control) => {
    state.controlIdIndex = state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].controls.findIndex((val: any) => val.id === control.id)
  },
  resizeUserForm: (state, userForm) => {
    state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].innerWindowStyle.container.width = userForm.width
    state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].innerWindowStyle.container.height = userForm.height

  },
  resizeStyle: (state, controlStyle) => {

    state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].controls[state.controlIdIndex].style.width = controlStyle.width
    state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].controls[state.controlIdIndex].style.left = controlStyle.left
    state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].controls[state.controlIdIndex].style.top = controlStyle.top
    state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].controls[state.controlIdIndex].style.height = controlStyle.height
  },
  dragStyle: (state, controlStyle) => {
    state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].controls[state.controlIdIndex].style.left = controlStyle.left
    state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].controls[state.controlIdIndex].style.top = controlStyle.top

  },
  addControl: (state, control) => {
    state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].controls = [
      ...state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].controls,
      control
    ];
  },
  dragOuterWindow: (state, userForm) => {
    state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].outerWindowStyle.container.top = userForm.top
    state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].outerWindowStyle.container.left = userForm.left

  },
  makeActive: (state, userFormZIndex) => {
    state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].outerWindowStyle.container.zIndex = userFormZIndex.toString()
  },
  updatePrevControlIndex: (state) => {
    state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].controlZIndex += 1
  },
  updateControlIndex: (state, controlIndex) => {
    state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].controls[state.controlIdIndex].style.zIndex = controlIndex.toString()

  },
  displayUserForm: (state) => {
    state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].outerWindowStyle.container.display = "block"
  },
  updateStyle: (state, updatedStyle) => {
    state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex][updatedStyle.styleName] = updatedStyle.styleValue
  },
  updatedInnerWindowStyle: (state, updatedStyle) => {
    state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].innerWindowStyle.container[updatedStyle.styleName] = updatedStyle.styleValue
  },
  updateControl: (state, updatedStyle) => {
    // debugger;
    state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].controls[state.controlIdIndex][updatedStyle.styleName] = updatedStyle.styleValue
  },
  updateControlStyle: (state, updatedStyle) => {
    state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].controls[state.controlIdIndex].style[updatedStyle.styleName] = updatedStyle.styleValue
  },
  deletingControl: (state) => {
    console.log(state.treeBrowserData.userForms[0].userForms)
    state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].controls.splice(state.controlIdIndex, 1)
  },
  activateControl: (state) => {
    state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].controls.map((val: any, index: number) => {
      if (index === state.controlIdIndex) {
        val.isActive = true
      }
      else {
        val.isActive = false
      }
    })
  },
  deactivateControl: (state) => {
    state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].controls.map((val: any) => {
      if (val.isActive === true) {
        val.isActive = false
      }
    })
  },
  dragSelectedControls: (state, contolList) => {
    state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].controls.map((val: any) => {
      val.isActive= false
      contolList.map((control: any) => {
        if (control.id === val.id) {
          val.isActive = true
        }
        
      }
      )
    })
  },
  
  ////
  updateDualStyles: (state,styleData) => {
    // debugger
    console.log("Object",styleData)
    state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].controls[state.controlIdIndex].style[styleData.style.sName1] = styleData.value1
    state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].controls[state.controlIdIndex].style[styleData.style.sName2] = styleData.value2  
  },
  ///
  updateDualControls : (state,updatedStyle) => {
    // debugger
    state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].controls[state.controlIdIndex][updatedStyle.prop1] = updatedStyle.value1
    state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].controls[state.controlIdIndex][updatedStyle.prop2] = updatedStyle.value2
  },

  updatecaptionAutoSize:(state,updatedStyle) =>{
    // debugger
    state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].controls[state.controlIdIndex][updatedStyle.prop1] = updatedStyle.value1
    state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].controls[state.controlIdIndex].style[updatedStyle.prop2] = updatedStyle.value2+"px"
    state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].controls[state.controlIdIndex].style[updatedStyle.prop3] = updatedStyle.value3+"px"
  }


}






export const actions: ActionTree<any, any> = {

  addtreeBrowserData: ({ commit }, userForm) => {
    commit('addtreeBrowserData', userForm)
  },
  closeWindow: ({ commit }, userForm) => {
    commit('closeWindow', userForm)
  },
  userFormIndex: ({ commit }, userForm) => {
    commit('userFormIndex', userForm)
  },
  controlIndex: ({ commit }, control) => {
    commit('controlIndex', control)
  },
  resizeStyle: ({ commit }, controlStyle) => {
    commit('resizeStyle', controlStyle)
  },
  dragStyle: ({ commit }, controlStyle) => {
    commit('dragStyle', controlStyle)

  },
  addControl: ({ commit }, control) => {
    commit('addControl', control)

  },
  dragOuterWindow: ({ commit }, userForm) => {
    commit('dragOuterWindow', userForm)

  },
  makeActive: ({ commit }, userFormZIndex) => {
    commit('makeActive', userFormZIndex)

  },
  updatePrevControlIndex: ({ commit }) => {
    commit('updatePrevControlIndex')

  },
  updateControlIndex: ({ commit }, controlIndex) => {
    commit('updateControlIndex', controlIndex)

  },

  updatePicturePositionAction:({commit},updatedStyle) => {
      debugger
    console.log("dfd",updatedStyle)
    let styleData = {};
    switch (updatedStyle.styleValue) {
      case "0 - fmPicturePositionLeftTop":
         styleData = {style:updatedStyle,value1:"left",value2:"top"}
        commit('updateDualStyles',styleData)
        break;
      case "1 - fmPicturePositionLeftCenter":
         styleData = {style:updatedStyle,value1:"left",value2:"center"}
        commit('updateDualStyles',styleData)
        break;
      case "2 - fmPicturePositionLeftBottom":
         styleData = {style:updatedStyle,value1:"left",value2:"bottom"}
        commit('updateDualStyles',styleData)
        break;
       case "3 - fmPicturePositionRightTop":
        styleData = {style:updatedStyle,value1:"right",value2:"top"}
        commit('updateDualStyles',styleData)
        break;
        case "4 - fmPicturePositionRightCenter":
          styleData = {style:updatedStyle,value1:"right",value2:"center"}
          commit('updateDualStyles',styleData)
        break;
        case "5 - fmPicturePositionRightBottom":
          styleData = {style:updatedStyle,value1:"right",value2:"bottom"}
          commit('updateDualStyles',styleData)
        break;
        case "6 - fmPicturePositionAboveLeft":
          styleData = {style:updatedStyle,value1:"20%",value2:"top"}
          commit('updateDualStyles',styleData)
        break;
        case "7 - fmPicturePositionAboveCenter":
          styleData = {style:updatedStyle,value1:"center",value2:"top"}
          commit('updateDualStyles',styleData)
        break;
        case "8 - fmPicturePositionAboveRight":
          styleData = {style:updatedStyle,value1:"80%",value2:"top"}
          commit('updateDualStyles',styleData)
        break;
        case "9 - fmPicturePositionBelowLeft":
          styleData = {style:updatedStyle,value1:"center",value2:"20%"}
          commit('updateDualStyles',styleData)
        break;
        case "10 - fmPicturePositionBelowCenter":
          styleData = {style:updatedStyle,value1:"center",value2:"center"}
          commit('updateDualStyles',styleData)
        break;
        case "11 - fmPicturePositionBelowRight":
          styleData = {style:updatedStyle,value1:"left",value2:"80%"}
          commit('updateDualStyles',styleData)
        break;
        case "12 - fmPicturePositionCenter":
          styleData = {style:updatedStyle,value1:"center",value2:"center"}
          commit('updateDualStyles',styleData)
         break;
    
      default:
         styleData = {style:updatedStyle,value1:"center",value2:"center"}
      commit('updateDualStyles',styleData)
        break;
    }
  },

  updateCaption:({commit},updateStyle) => {

    return new Promise((resolve, reject) => {
      let underline = "&#818;";
      //set caption
      state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].controls[state.controlIdIndex]["caption"] = updateStyle.styleValue
  
      let accelerator = state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].controls[state.controlIdIndex]["accelerator"]
      //
      let isPresent =  state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].controls[state.controlIdIndex]["caption"].includes(accelerator);
  
      let caption = state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].controls[state.controlIdIndex]["caption"]
  
      if (isPresent && accelerator !== "") {
        let pos = caption.indexOf(accelerator);
        caption = caption.substring(0, pos) + caption[pos] + underline + caption.substring(pos + 1, caption.length);
        commit('updateDualControls',{prop1:"accelerator",prop2:"isActiveAccelerator",value1:accelerator,value2:caption});
        resolve();
    } else{
      commit('updateDualControls',{prop1:"accelerator",prop2:"isActiveAccelerator",value1:accelerator,value2:""});
      resolve();
    }
    })

   
},

  updateAcceleratorAction:({commit},updateStyle) => {
    debugger
    let underline = "&#818;";
    let isPresent =  state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].controls[state.controlIdIndex]["caption"].includes(updateStyle.styleValue);
    let caption = state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].controls[state.controlIdIndex]["caption"]

    if (isPresent && updateStyle.styleValue !== "") {
      let pos = caption.indexOf(updateStyle.styleValue);
      caption =caption.substring(0, pos) + caption[pos] + underline + caption.substring(pos + 1, caption.length);
      commit('updateDualControls',{prop1:"accelerator",prop2:"isActiveAccelerator",value1:updateStyle.styleValue,value2:caption});
  } else{
    commit('updateDualControls',{prop1:"accelerator",prop2:"isActiveAccelerator",value1:"",value2:""});
  }
  },

  updateAutoSize:({commit},updateStyle) => {
    debugger;
    let style = {sName1:'width',sName2:'height'}
  commit('updateDualStyles',{style:style,value1:updateStyle.offsetWidth+"px",value2:updateStyle.offsetHeight+"px"})
  },

  //passswordChar
  updatePasswordChar:({commit},updateStyle) =>{
    debugger
    commit('updateControl',{styleName:'passwordChar',styleValue:updateStyle.styleValue});
      // let text = state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].controls[state.controlIdIndex]["text"]
      // let sample = "";
      // for (let index = 0; index < text.length; index++) {
      //   //passwordCharCaption += updateStyle.styleValue
      //   // caption[index] = updateStyle.styleValue
      //   sample =sample + updateStyle.styleValue
      // }
      // commit('updateControl',{styleName:'caption',styleValue:sample})
     
  },

}




export const treeBrowserData = {
  state,
  getters,
  mutations,
  actions
}
