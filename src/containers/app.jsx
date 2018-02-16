import React from 'react'
import axios from 'axios'

import SearchBar from '../components/search-bar'
import VideoList from './video-list'
import VideoDetail from '../components/video-detail'

const API_END_POINT = 'https://api.themoviedb.org/3/'
const POPULAR_MOVIES_URL = 'discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images'
const API_KEY = 'api_key=7f8b12c3414a19408dd8afa2b9943502'

class App extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      moviesList: {},
      currentMovie: {}
    }
  }

  componentWillMount () {
    axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`).then(function (response) {
      
      this.setState({
        moviesList: response.data.results.slice(1, 6),
        currentMovie: response.data.results[0]
      })
    }.bind(this))
  }

  render () {
    return (
      <div>
        <SearchBar />
        <VideoList />
        <VideoDetail title={this.state.currentMovie.title} description={this.state.currentMovie.overview} />
      </div>
    )
  }
}

export default App
