import React from 'react';
import './App.css';

import { data } from '../testData';
import DataApi from './DataApi';

const api = new DataApi(data);

class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors(),
    };
  }
  render() {
    return (
      <div>
        ...
      </div>
    );
  }
}

export default App;
