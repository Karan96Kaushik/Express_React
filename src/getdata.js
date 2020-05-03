import React, { Component } from 'react';
import { EditorState, Editor, convertToRaw, convertFromRaw } from 'draft-js';

class GetData extends Component{


constructor(props){
  super(props)
  this.state = {
    articleData: []
  }
this.article=this.article.bind(this);
}


componentDidMount(){

let getRawData = JSON.parse(JSON.stringify((window.localStorage.getItem('content'))));

let rawData= JSON.parse(getRawData);

console.log(rawData.blocks)

  //if(rawData){
    this.setState({
      articleData: rawData.blocks
    })
  //}

 console.log(this.state.articleData)   

}

article=(data)=>{
  console.log('asdada');
  data.map(item => {
    return <h1>hello</h1>;
  })

}

  render(){

    if (!this.state.articleData) {
      return (
        <h3 className="loading">Loading...</h3>
      );
    }
  
    return(
      <div>
        {this.article(this.state.articleData)}
      </div>
    );
  }
}

export default GetData;