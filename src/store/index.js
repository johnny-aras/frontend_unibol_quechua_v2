import { createStore} from "vuex";
//import getRandomInt from '../helpers/getRandomInt';
import auth from "@/modules/auth/store";

export default createStore({
  // state:{
  //   count:1,
  //   lastMutation:'none',
  //   name:'none',
  //   age:0,
  //   appereance:'soso',
  //   lastRandomInt:0
  // },
  // mutations:{
  //   increment(state){
  //     state.count++
  //     state.lastMutation='Increment'
  //   },
  //   incrementBy(state, val){
  //     state.count +=val
  //     state.lastMutation='IncrementBy'
  //     state.lastRandomInt= val
  //   },
  //   incrementByAttr(state, objeto){

  //     let {name,age,appereance} = objeto
  //     state.name =name
  //     state.age =age
  //     state.appereance =appereance
         
  //   }
  // },
  // actions:{
  //   async incrementRandomInt( context ){
  //     const randomInt = await getRandomInt()
  //     context.commit('incrementBy',randomInt);
  //   }
  // }

  modules:{
    auth
  }
 
})
