import React, {Component} from 'react';
import {connect} from 'react-redux';

class Post extends Component {



    render() {
        console.log(this.props);
        const {post} = this.props;
        const postItem = post ? (

                <div className='post'>
                    <h4 className="center">{post.title}</h4>
                    <p>{post.body}</p>
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

export default connect(mapStateToProps)(Post);