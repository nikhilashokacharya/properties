import { DirectiveOptions} from 'vue'

const directive: DirectiveOptions = {
    inserted(el,node){
        debugger
        el.style.backgroundColor = 'red'
    }
}

export default directive