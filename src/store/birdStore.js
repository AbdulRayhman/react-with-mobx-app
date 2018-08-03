import { observable, action, computed } from 'mobx';

class BirdStore {
    // to be implemented later on

    @observable birds = [];

    @action
    addBird = bird => {
        this.birds.push({value:bird,id: Date.now()});
    };

    @computed
    get birdCount() {
        return this.birds.length;
    }
}
export default new BirdStore();