import React, { Component } from 'react'
import Icon from './Icon'

class Service extends Component {

  constructor(props) {
    super(props)
    this.state = {
      connected: false,
      url: "",
      name: "",
    }
  }

  componentDidMount(){
    const { project, service } = this.props
    project.resources.edges.find(({node}) => 
      node.type === service ?
        this.setState({
          connected: true,
          url: node.url,
          name: node.name,
        })
      :
      ''
    );
  }

  render() {
    const { name, url, connected } = this.state;
    const { service } = this.props

    return (
      <Icon key={url} name={name} url={url} state={connected} service={service} />
    )
  }
}


export default Service