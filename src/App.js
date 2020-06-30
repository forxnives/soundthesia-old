import React from 'react';
import './App.css';
import JSSoup from 'jssoup';




class App extends React.Component {
  constructor(props){
    super(props);


    this.url = 'https://soundcloud.com/luiguibleand/luigui-bleand-filling-feat-goldy-boy';


  }

  


  htmlFetch = async (urlString) => {
    const response = await fetch(urlString)
    const body = await response.text()
    return body
  }

// var soup = new JSSoup('<html><head>hello</head></html>');
// htmlFetch()

  linkExtract = async (body) => {
    // const soup = await this.htmlFetch();
    const html = await this.htmlFetch(this.url);
    const soup = await new JSSoup(html);
    const thing = soup.findAll('script');
    const contents = thing[thing.length -1].contents[0]._text
    const startIndex = contents.indexOf('[{"id"');  
    const rawArray = contents.slice(startIndex, -2);
    const obj = JSON.parse(rawArray);
    const link = obj[5].data[0].media.transcodings[1].url;

    console.log(link)
  }




componentDidMount() {
  this.linkExtract()
  // console.log(test);
}




  render() {
    return(
      <div>
      </div>



    );
  };

}

export default App;
