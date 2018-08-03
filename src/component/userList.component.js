import React, {Component} from 'react';
import userStore from '../store/userStore';
import { observer } from 'mobx-react';
import '../App.css';
@observer
class UserComponent extends Component {
    getUserData(){
        console.log('Here Get User Data');
        userStore.getUserList;
    }
    render() {
        return (
            <div>
                <h1> Component Here</h1>
                <div>
                    <button  style={{margin: '5px'}} onClick={()=>userStore.getUserList()}>Get User</button>
                    <button  style={{margin: '5px'}} onClick={()=>userStore.getUserPosts()}>Get User Posts</button>
                    <button  style={{margin: '5px'}} onClick={()=>userStore.AddNewUserPosts()}>Add New User Post</button>
                </div>
                <span>{userStore.userComponentLoading?'TRUE':'FALSE'}</span>
                <div>
                    <ul>
                        {userStore.userList.map(user =><li key={user.id}>{user.body}</li>)}
                    </ul>
                </div>
                <h1>User Posts List</h1>
                <div>
                    <ul>
                        {userStore.userPosts.map(user =><li key={user.id}>{user.body}</li>)}
                    </ul>
                </div>
                <h1>Add New Post</h1>
                <div>
                    <ul>
                        {userStore.userPosts.map(user =><li key={user.id}>{user.body}</li>)}
                    </ul>
                </div>
            </div>

        );
    }
}

export default UserComponent;