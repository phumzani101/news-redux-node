import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { submitNewsStory } from '../store/actions/actions'

class NewsSubmit extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             submission: {
                title: '',
                teaser: '',
                body: ''
             }
        }
    }

    componentDidMount() {

    }

    updateSubmission = (event) => {
        const newSubmission = Object.assign({}, this.state.submission)

        newSubmission[event.target.id] = event.target.value;
        this.setState({
            submission: newSubmission
        })
    }

    submitNews = (event) => {
        event.preventDefault()
        this.props.submitNewsStory(this.state.submission)
        this.props.history.push('/')
    }
    
    
    render() {
        const {submission} = this.state
        return (
            <div>
                <form onSubmit={this.submitNews}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" id="title" value={submission.title}
                            onChange={this.updateSubmission} className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="teaser">Teaser</label>
                        <input type="text" name="teaser" id="teaser" value={submission.teaser}
                            onChange={this.updateSubmission} className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="body">Body</label>
                        <textarea name="body" id="body" value={submission.body}
                            onChange={this.updateSubmission} className="form-control"
                        ></textarea>
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    submitNewsStory: submitNewsStory
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewsSubmit))