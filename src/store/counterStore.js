import  { observable,computed,action } from 'mobx';

class CounterStore {
   @observable counter = 0;
   @observable isOddStatus= false;
   @observable name='';
   increment(){this.counter++;}
   decrement(){this.counter--;}

   @computed
   get isOdd(){
        if(this.counter%2 ===1){
            return true;
        }else{
            return false;
        }
    }
   @action
   setUserName(name){
       this.name = name;
   }

}
export default new CounterStore();