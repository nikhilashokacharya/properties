import Vue from "vue"

Vue.filter("first4Chars", str => str.substring(0, 4))
Vue.filter("last4Chars", str => str.substring(str.length - 4))
Vue.filter("password", (password,data) => console.log("Inglobal",data,password) )
