import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";


type PostsType = {
    id: number
    message: string
    likesCount: number
}
type PostPropsType = {
    posts: Array<PostsType>
    newPostText: string
    addPost: () => void
    changeNewTextCallback: (newText: string) => void
}

const MyPosts = (props: PostPropsType) => {

    let postElement = props.posts.map(p => <Post message={p.message} likeCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();
    const addPost = () => {
        props.addPost()
    }
    const newTextChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewTextCallback(e.currentTarget.value)
    }

    return (
        <div className={s.myposts}>

            <h3>My posts</h3>
            <div className={s.postInput}>
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={newTextChangeHandler}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    )
}

export default MyPosts;