import React from 'react'

class SearchBar extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      searchText: '',
      placeHolder: 'Tapez votre film...',
      intervalRequest: 1000,
      lockRequest: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleChange (event) {
    this.setState({searchText: event.target.value})
    if (!this.state.lockRequest) {
      this.setState({lockRequest: true})
      setTimeout(() => {
        this.search()
      },
    this.state.intervalRequest)
    }
  }

  handleOnClick () {
    this.search()
  }

  search () {
    this.props.callback(this.state.searchText)
    this.setState({lockRequest: false})
  }

  render () {
    return (
      <div className='row'>
        <div className='col-md-8 input-group'>
          <input type='text' className='form-control input-lg' onChange={this.handleChange} placeholder={this.state.placeHolder} />
          <span className='input-group-button'>
            <button className='btn btn-secondary' onClick={this.handleOnClick}>GO</button>
          </span>
        </div>
      </div>
    )
  }
}

export default SearchBar
