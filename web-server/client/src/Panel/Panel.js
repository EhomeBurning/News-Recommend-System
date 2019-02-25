import React from 'react';
import './Panel.css';
import NewsCard from '../Card/Card';
import _ from 'lodash';
import Auth from '../Auth/Auth';

class NewsPanel extends React.Component {
  constructor() {
    super();
    // keep的内部量： news数量
    this.state = { news:null };
  }

  handleScroll() {
    const scrollY = window.scrollY
        || window.pageYOffset
        || document.documentElement.scrollYTop;
    if ((window.innerHeight + scrollY) >= (document.body.offsetHeight - 50)) {
      console.log('Loading more news!');
      this.loadMoreNews();
    }
  }

  componentDidMount() {
    this.loadMoreNews();
    this.loadMoreNews = _.debounce(this.loadMoreNews, 1000);
    window.addEventListener('scroll', () => this.handleScroll());
  }

  // this.setState才会更改前端， this.state不会改
  // loadMoreNews() {
  //   const news_url = 'http://' + window.location.hostname + ':3000' + '/news';
  //   const request = new Request(
  //     news_url,
  //     {
  //       method:'GET',
  //       headers: {
  //         'Authorization': 'bearer ' + Auth.getToken(),
  //       }
  //     });
  //
  //   fetch(request)
  //     .then(res => res.json())
  //     .then(news => {
  //       this.setState({
  //         news: this.state.news ? this.state.news.concat(news) : news,
  //       });
  //     });
  // }

  loadMoreNews() {
    this.setState({
      news: [
            {'url':'http://us.cnn.com/2017/02/15/politics/andrew-puzder-failed-nomination/index.html',
            'title':"Inside Andrew Puzder's failed nomination",
            'description':"In the end, Andrew Puzder had too much baggage -- both personal and professional -- to be confirmed as President Donald Trump's Cabinet.",
            'source':'cnn',
            'urlToImage':'http://i2.cdn.cnn.com/cnnnext/dam/assets/170215162504-puzder-trump-file-super-tease.jpg',
            'digest':"3RjuEomJo26O1syZbU7OHA==\n",
            'reason':"Recommend"
           },
           {'title': 'Zero Motorcycles CTO Abe Askenazi on the future of two-wheeled EVs',
            'description': "Electric cars and buses have already begun to take over the world, but the motorcycle industry has been much slower...",
            'url': "https://techcrunch.com/2017/03/23/zero-motorcycles-cto-abe-askenazi-on-the-future-of-two-wheeled-evs/",
            'urlToImage': "https://tctechcrunch2011.files.wordpress.com/2017/03/screen-shot-2017-03-23-at-14-04-01.png?w=764&h=400&crop=1",
            'source': 'techcrunch',
            'digest':"3RjuEomJo26O1syZbUdOHA==\n",
            'time':"Today",
            'reason':"Hot"
          }]


    });


  }

  renderNews() {
    const news_list = this.state.news.map(news => {
      return(
        <a className='list-group-item' key={news.digest} href="#">
          <NewsCard news={news} />
        </a>
      );
    });

    return(
      <div className="container-fluid">
        <div className="list-group">
          {news_list}
        </div>
      </div>
    );
  }

  render() {
    if (this.state.news) {
      return(
        <div>
          {this.renderNews()}
        </div>
      );
    } else {
      return(
        <div>
          Loading...
        </div>
      );
    }
  }
}

export default NewsPanel;
