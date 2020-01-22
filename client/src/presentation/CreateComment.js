import React, { Component } from 'react'
import {connect} from 'react-redux'
import { submitComment } from '../store/actions/news.actions'

class CreateComment extends Component {
    constructor(props) {
        super(props)

        this.state = {
            comment: ''
        }
    }

    updateComment = (event) => {
        this.setState({
            comment: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const { newsItemID, username } = this.props
        const { comment } = this.state
    
        this.props.submitComment(newsItemID, username, { body: comment })

        this.setState({ comment: '' })
    }

    render() {
        return (
            <div>
                <h3>Post comment</h3>
                <form onSubmit={this.handleSubmit}>
                    <textarea value={this.state.comment}
                        onChange={this.updateComment}
                        id="body" type="text"
                    ></textarea>
                    <button>Post</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    username: state.auth.username
})

const mapDispatchToProps = {
    submitComment: submitComment
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateComment)