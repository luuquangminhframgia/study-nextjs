import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      shows: props.shows || []
    };
  }

  static async getInitialProps() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json();
    const shows = data.map(entry => entry.show);
  
    return {shows};
  }

  handleSearch = (e) => {
    const search = e.target.value;
    this.setState({search})

    fetch(`https://api.tvmaze.com/search/shows?q=${search}`).then( res => {
      return res.json();
    }).then(data => {
      const shows = data.map(entry => entry.show);
      this.setState({shows});
    })
  }

  render () {
    const {shows, search} = this.state;
    return (
      <Layout>
        <h1>Batman TV Shows</h1>
        <input type="text" onChange={this.handleSearch} value={search} />
        <ul>
          {shows.map(show => (
            <li key={show.id}>
              <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                <a>{show.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    )
  }
}

export default Index

