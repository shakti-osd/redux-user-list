import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux/users/userActions';

function UserComponent({userData, fetchUsers}) {

    useEffect(() =>{
        fetchUsers()
    },[])

    
    return userData.loading ? (
        <h2>Loading</h2>
      ) : userData.errors ? (
        <h2>{userData.errors}</h2>
      ) : (
        <div>
          <h2>Users List</h2>
          <div>
            {userData &&
              userData.users &&
              userData.users.map(user => <p key={user.id}>{user.name}</p>)}
          </div>
        </div>
      )
}


const mapStateToProps = state => {
    return {
        userData: state.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);
