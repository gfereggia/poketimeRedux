import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deletePost} from "../../actions/postActions";

class Post extends Component {

    handleclick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }

    render() {

        const {post} = this.props;
        const postItem = post ? (

                <div className='post'>
                    <h4 className="center">{post.title}</h4>
                    <p>{post.body}</p>
                    <div className="center">
                        <button className="btn grey" onClick={this.handleclick}>
                            Delete post
                        </button>
                    </div>
                </div>

        ) : (
            <div className='center'>Loading post...</div>
        );

        return (
            <div className='container'>
                {postItem}
            </div>
        )

    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find(post => post.id == id)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch(deletePost(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);