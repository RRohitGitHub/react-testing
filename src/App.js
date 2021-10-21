import Header from "./components/header/Header";
import './App.scss'
import Headline from "./components/headline/Headline";
import { connect } from "react-redux";
import { fetchPosts } from "./actions";
import { Component } from "react";
import SharedButton from "./components/button";
import ListItem from "./components/listitem";

const tempArr= [{
  fName:"Joe",
  lName:"biden",
  email:"abc@gmail.com",
  age:24,
  onlineStatus:1
}]

const initialState = {
  hideBtn:false
}

class App extends Component {
  constructor(props){
    super(props)
    this.fetch = this.fetch.bind(this)
    this.state = {
      ...initialState
    }
  }

  fetch(){
    console.log('Fetch clicked')
    this.props.fetchPosts();
    this.exampleMethod_UpdateState();
  }

  exampleMethod_UpdateState(){
    const {hideBtn}  = this.state
    this.setState({
      hideBtn:!hideBtn
    })
  }

  exampleMethod_returnValue(number){
    return number + 10;
  }

  render(){
    const {posts} = this.props
    const configureButton = {
      buttonText:'Click Me',
      emitEvent:this.fetch
    }

    console.log(this.props.posts)
    return (
      <div className="App" data-test="appComponent">
        <Header/>
        <section className="main">
          <Headline header="Posts" desc="Click the button to render posts" tempArr={tempArr}/>
          {
            !this.state.hideBtn &&
            <SharedButton {...configureButton} />
          }
   
          {posts.length > 0 && 
            <div> 
              {posts.map((post,index)=>{
                const {title,body} = post;
                const configListItem = {
                  title,
                  desc:body
                };
                return (
                  <ListItem key={index} {...configListItem} />
                )
              })}
            </div>
          }
        </section>
      </div>
    );
  }
}


const mapStateToProps = state=>{
  return{
    posts:state.posts
  }
}

export default connect(mapStateToProps,{fetchPosts})(App)
