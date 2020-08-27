/*eslint-disable */

export const validators = {

  sizeValidate: function (e:any, selectedUserForm:any, updateProperty:any):boolean {
    debugger;
    const initialValue =
      selectedUserForm.innerWindowStyle.container[updateProperty];
    const length = e.target.value.length;
    if (updateProperty === "top" || updateProperty === "left") {
      if (parseInt(e.target.value) > -9830 && length <= 8) {
        selectedUserForm.innerWindowStyle.container[updateProperty] =
          e.target.value;
        return true;
      } else {
        selectedUserForm.innerWindowStyle.container[updateProperty] = -9830;
        return false;
      }
    }
    if (length <= 8 && parseInt(e.target.value) >= 0) {
      selectedUserForm.innerWindowStyle.container[
        updateProperty
      ] = e.target.value.toString().concat("px");
      return true
    } else {
      selectedUserForm.innerWindowStyle.container[updateProperty] = (
        parseInt(initialValue) + 1
      )
        .toString()
        .concat("px");
      selectedUserForm.innerWindowStyle.container[updateProperty] = (
        parseInt(selectedUserForm.innerWindowStyle.container.height) - 1
      )
        .toString()
        .concat("px");
        return false;   
    }
  },
  sizeValidateForControls: function (e:any, selectedUserForm:any, updateProperty:any) : boolean {
    const initialValue = selectedUserForm.style[updateProperty];
    const length = e.target.value.length;
    if (length <= 8 && parseInt(e.target.value) >= 0) {
      selectedUserForm.style[updateProperty] = e.target.value
        .toString()
        .concat("px");
        return true
    } else {
      selectedUserForm.style[updateProperty] = (parseInt(initialValue) + 1)
        .toString()
        .concat("px");
      selectedUserForm.style[updateProperty] = (
        parseInt(selectedUserForm.style[updateProperty]) - 1
      )
        .toString()
        .concat("px");
        return false
    }
  },
  zoomValidate: function (e:any, selectedUserForm:any, updateProperty:any) {
    const initialValue =
      selectedUserForm.innerWindowStyle.container[updateProperty];

    if (updateProperty === "zoom") {
      if (parseInt(e.target.value) > 10 && parseInt(e.target.value) <= 400) {
        selectedUserForm.innerWindowStyle.innerContainer[
          updateProperty
        ] = e.target.value.toString().concat("%");
        return;
      } else {
        selectedUserForm.innerWindowStyle.innerContainer[updateProperty] = (
          parseInt(initialValue) + 1
        )
          .toString()
          .concat("%");
        selectedUserForm.innerWindowStyle.innerContainer[updateProperty] = (
          parseInt(selectedUserForm.innerWindowStyle.innerContainer.zoom) - 1
        )
          .toString()
          .concat("%");
      }
    }
  },
  imageValidate: function (e:any, selectedUserForm:any, updatedProperty:any) {
    debugger;
    let srcChunks = e.target.value.split(".");
    let fileExtension = srcChunks[srcChunks.length - 1].toLowerCase();
    let files = e.target.files[0];
    let reader = new FileReader();
    if (updatedProperty === "cursor") {
      if (fileExtension === "ico") {
        reader.readAsDataURL(files);
        reader.onload = function (e:any) {
          //Initiate the JavaScript Image object.
          let image = new Image();
          //Set the Base64 string return from FileReader as source.
          image.src = e.target.result;
          //Validate the File Height and Width.
          image.onload = function () {
            let height = this.height;
            let width = this.width;
            if (height > 128 || width > 128) {
              alert("Height and Width must not exceed 128px.");
              return false;
            } else {
              alert(
                `Uploaded image has valid Height and Width ${height} and ${width}`
              );
              selectedUserForm.innerWindowStyle.container[
                updatedProperty
              ] = `url(${image.src}), auto`;
            }
            reader.readAsDataURL(e.target.files[0]);
            return true;
          };
        };
      } else {
        return false;
        alert("mouseIcon should be in *.ico format");
      }
    } else if (updatedProperty === "backgroundImage") {
      debugger;
      reader.onload = function (e:any) {
        selectedUserForm.innerWindowStyle.innerContainer[
          updatedProperty
        ] = `url(${e.target.result})`;
        selectedUserForm.innerWindowStyle.innerContainer.backgroundSize =
          "auto";
        selectedUserForm.innerWindowStyle.innerContainer.backgroundRepeat =
          "no-repeat";
        selectedUserForm.innerWindowStyle.innerContainer.backgroundPosition =
          "center";
      };
      reader.readAsDataURL(files);
    }
  },
  imageValidateForControls: function (e:any, selectedUserFormControls:any, updatedProperty:any) {
    debugger;
    let srcChunks = e.target.value.split(".");
    let fileExtension = srcChunks[srcChunks.length - 1].toLowerCase();
    let files = e.target.files[0];
    let reader = new FileReader();
    if (updatedProperty === "cursor") {
      if (fileExtension === "ico") {
        reader.readAsDataURL(files);
        reader.onload = function (e:any) {
          //Initiate the JavaScript Image object.
          let image = new Image();
          //Set the Base64 string return from FileReader as source.
          image.src = e.target.result;
          //Validate the File Height and Width.
          image.onload = function () {
            let height = this.height;
            let width = this.width;
            if (height > 128 || width > 128) {
              alert("Height and Width must not exceed 128px.");
              return false;
            } else {
              alert(
                `Uploaded image has valid Height and Width ${height} and ${width}`
              );
              selectedUserFormControls.style[
                updatedProperty
              ] = `url(${image.src}), auto`;
            }
            reader.readAsDataURL(e.target.files[0]);
            return true;
          };
        };
      } else {
        alert("mouseIcon should be in *.ico format");
      }
    } else if (updatedProperty === "backgroundImage") {
      debugger;
      reader.onload = function (e:any) {
        selectedUserFormControls.style[
          updatedProperty
        ] = `url(${e.target.result})`;
        selectedUserFormControls.style.backgroundSize =
          "auto";
          selectedUserFormControls.style.backgroundRepeat =
          "no-repeat";
          selectedUserFormControls.style.backgroundPosition =
          "center";
      };
      reader.readAsDataURL(files);
    }
  },
  scrollValidate: function (e:any, selectedUserForm:any, updateProperty:any) {
    debugger;
    const initialValue = selectedUserForm[updateProperty];
    const length = e.target.value.length;
    if (updateProperty === "scrollLeft" || updateProperty === "scrollTop") {
      if (
        selectedUserForm.scrollHeight !== 0 &&
        updateProperty === "scrollTop"
      ) {
        if (length <= 8 && parseInt(e.target.value) >= 0) {
          selectedUserForm[updateProperty] = e.target.value
            .toString()
            .concat("px");
          return true;
        } else {
          selectedUserForm[updateProperty] = (parseInt(initialValue) + 1)
            .toString()
            .concat("px");
          selectedUserForm[updateProperty] = (
            parseInt(selectedUserForm.scrollHeight) - 1
          )
            .toString()
            .concat("px");
          return false;
        }
      } else if (
        selectedUserForm.scrollWidth !== 0 &&
        updateProperty === "scrollLeft"
      ) {
        if (length <= 8 && parseInt(e.target.value) >= 0) {
          selectedUserForm[updateProperty] = e.target.value
            .toString()
            .concat("px");
          return true;
        } else {
          selectedUserForm[updateProperty] = (parseInt(initialValue) + 1)
            .toString()
            .concat("px");
          selectedUserForm[updateProperty] = (
            parseInt(selectedUserForm.scrollHeight) - 1
          )
            .toString()
            .concat("px");
          return false;
        }
      }
      else{
        selectedUserForm[updateProperty] = (parseInt(initialValue) + 1)
        .toString()
        .concat("px");
      selectedUserForm[updateProperty] = (
        parseInt(selectedUserForm[updateProperty]) - 1
      )
        .toString()
        .concat("px");
      return false;
      }
    } else if (
      updateProperty === "scrollHeight" ||
      updateProperty === "scrollWidth"
    ) {
      if (length <= 8 && parseInt(e.target.value) >= 0) {
        selectedUserForm[updateProperty] = e.target.value
          .toString()
          .concat("px");
        return true;
      } else {
        selectedUserForm[updateProperty] = (parseInt(initialValue) + 1)
          .toString()
          .concat("px");
        selectedUserForm[updateProperty] = (
          parseInt(selectedUserForm[updateProperty]) - 1
        )
          .toString()
          .concat("px");
        return false;
      }
    }
  },
};
