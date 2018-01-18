import React, { Component } from 'react'

class Icon extends Component {

  render() {
    const { service, url, name, state } = this.props;
    const source = '/images/' + service + '.png';
    
    return (
      <div>
        {state ? (
          <div>
            <a href={url} title={name}>
              <img src={source} alt={service} className='access img-fluid' />
            </a>
          </div>
        ) : (
          <div>
            <a href={url} className='disabled'>
              <img src={source} alt={service} className='disabled img-fluid' />
            </a>
          </div>
        )}
      </div>
    )
  }
}

export default Icon