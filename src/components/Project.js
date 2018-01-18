import React, { Component } from 'react'
import Service from './Service'
import {
  createFragmentContainer,
  graphql
} from 'react-relay'


const available_services = ['pivotal', 'github', 'codeship', 'papertrail', 'sentry']

class Project extends Component {

  render() {
    const { canonicalName } = this.props.project;
    const { project } = this.props;
    
    return (
      <div className='container'>
        <div className='row'>
          <h3>{canonicalName}</h3>
        </div>
        <div className='row'>
          <div className='col-lg-1 col-md-1 col-sm-1'></div>
          {available_services.map((service, index) =>
            <div key={index} className='col-lg-2 col-md-2 col-sm-2'>
              <Service service={service} project={project}/>
            </div>
          )}
        </div>
      </div>
    )
  }
}




export default createFragmentContainer(Project, graphql`
  fragment Project_project on Project {
    id
    canonicalName
    resources {
      edges {
        node {
          id
          type
          name
          url
        }
      }
    }
  }
`)
