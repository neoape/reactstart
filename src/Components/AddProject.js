import React, { Component } from 'react';
import uuid from 'uuid'

class AddProject extends Component {
    constructor() {
        super();
        this.state = {
            newProject: {}
        }
    }

    static defaultProps = {
        categories: ['Web Design', 'Web Development', 'Mobile Development']
    }

    handleSubmit(e) {
        e.preventDefault()
        if (this.refs.title.value === "") {
            console.log('enter something')
        } else {
            this.setState({newProject: {
                id: uuid.v4(),
                title: this.refs.title.value,
                category: this.refs.category.value
            }}, () => {
                this.props.addProject(this.state.newProject)
            })
        }
    }

    render() {
        let categoryOptions = this.props.categories.map(category => {
            return <option key={category} value={category}>{category}</option>
        })
        return (
          <div className="AddProject">
            <h2>Add Project</h2>
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div>
                    <label>Title</label>
                    <input type="text" ref="title" />
                </div>
                <div>
                    <label>Category</label>
                    <select ref="category">
                        {categoryOptions}
                    </select>
                </div>
                <button>sumbit</button>
            </form>
          </div>
        );
    }
}

export default AddProject;
