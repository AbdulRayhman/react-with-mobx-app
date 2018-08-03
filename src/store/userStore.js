import { observable,computed,action,set} from 'mobx';
class UserStore {
    @observable userList =[{id:0,body:'1abcd'},{id:5,body:'5abcd'}];
    @observable userComponentLoading = false;
    @observable userPosts =[];
    setUserList(){
        let tempList = [{id:1,body:'1abcd'},{id:2,body:'2abcd'},{id:3,body:'3abcd'},{id:4,body:'4abcd'}];
        setTimeout(()=>{
            this.userComponentLoading=false;
            this.userList = tempList}, 3000)
    }

    @action getUserList() {
        this.userComponentLoading =true;
        this.userList=[];
        this.setUserList();
    }
    @action addNewUser(user) {
        this.userList.push(user);
    }
    @action async getUserPosts() {
        this.userPosts=[];
        let header = new Headers();
        header.append('Content-Type', 'application/json');
        const options = {
            method:'GET',
            header,
        };
        const request = await new Request('https://jsonplaceholder.typicode.com/posts',options);
        const response = await fetch(request)
            .then(res => res.json())
            .then(json=>{
                console.log(json)
                this.userPosts = json;
            });
    }
    @action async AddNewUserPosts() {
        this.userComponentLoading = true;
        let header = new Headers();
        header.append('Content-Type', 'application/json');
        const options = {
            method:'POST',
            header,
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1
            }),
        };
        const request = await new Request('https://jsonplaceholder.typicode.com/posts',options);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }})
            .then(res => res.json())
            .then(json=>{
                console.log(json)
                this.userPosts.push(json)
                this.userList.push(json)
                this.userComponentLoading=false;
            }).catch((err)=>{
                console.log(err)
                this.userComponentLoading=false;
            });
    }
}
export default new UserStore();