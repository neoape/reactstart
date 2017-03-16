import React, { Component } from 'react';
import ProjectItem from './ProjectItem'

class Projects extends Component {
    handleDeleteItem(id) {
        this.props.onDelete(id)
    }

    render() {
        let projectItems
        if(this.props.projects) {
            projectItems = this.props.projects.map(project => {
                return (
                    <ProjectItem key={project.title} project={project} onDelete={this.handleDeleteItem.bind(this)}/>
                )
            })
        }


        return (
          <div className="Projects">
            {projectItems}
          </div>
        );
    }
}

Projects.propTypes = {
    projects: React.PropTypes.array,
    onDelete: React.PropTypes.func
}

export default Projects;
