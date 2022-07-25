import React from 'react';
import {connect} from "react-redux";
import {
    followAC,
    getUsersThunkCreator,
    setCurrentPageAC,
    toggleFollowingProgress,
    unfollowAC,
    UserType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import Users from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {

        this.props.getUsers(this.props.currentPage,this.props.pagesSize);
        // this.props.toggleIsFetching(true);
        //
        // userAPI.getUsers(this.props.currentPage,this.props.pagesSize).then(data => {
        //
        //         this.props.toggleIsFetching(false);
        //         this.props.setUsers(data.items);
        //         this.props.setTotalUsersCount(data.totalCount);
        //     });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber,this.props.pagesSize);

       /* this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pagesSize}`,{
        //     withCredentials:true,
        // })
        userAPI.getUsers(pageNumber,this.props.pagesSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
            });*/
    }

    render() {
        return <>
            {this.props.isFetching
                ? <Preloader/>
                : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pagesSize={this.props.pagesSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                // toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}


export type mapStatePropsType = {
    users: Array<UserType>
    pagesSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    // followingInProgress: Array<boolean>
    followingInProgress: Array<number>
}

export type UsersPropsType = mapStatePropsType & mapDispatchPropsType

let mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        users: state.usersPage.users,
        pagesSize: state.usersPage.pagesSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export type mapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    // setUsers: (users: Array<UserType>) => void
    // setTotalUsersCount: (totalUsersCount: number) => void
    setCurrentPage: (currentPage: number) => void
    // toggleIsFetching:(isFetching:boolean)=>void
    toggleFollowingProgress:(isFetching:boolean,userId:number)=>void
    getUsers:(currentPage:number,pagesSize:number)=>void

}


// let withRedirect = withAuthRedirect(UsersContainer)


// export default withAuthRedirect(connect(mapStateToProps, {
//     follow: followAC,
//     unfollow: unfollowAC,
//     // setUsers: setUsersAC,
//     setCurrentPage: setCurrentPageAC,
//     // setTotalUsersCount: setUsersTotalCountAC,
//     // toggleIsFetching:toggleIsFetchingAC,
//     toggleFollowingProgress:toggleFollowingProgress,
//     getUsers:getUsersThunkCreator
// })(UsersContainer));

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {
    follow: followAC,
    unfollow: unfollowAC,
    // setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    // setTotalUsersCount: setUsersTotalCountAC,
    // toggleIsFetching:toggleIsFetchingAC,
    toggleFollowingProgress:toggleFollowingProgress,
    getUsers:getUsersThunkCreator
}))(UsersContainer)