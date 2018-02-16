import React from 'react'

class SearchBar extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      searchText: '',
      placeHolder: 'Tapez votre film...'
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({searchText: event.target.value})
  }

  render () {
    return (
      <div>
        <input onChange={this.handleChange} placeholder={this.state.placeHolder} />
      </div>
    )
  }
}

export default SearchBar
