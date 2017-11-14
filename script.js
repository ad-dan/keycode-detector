const KeyCodeDisplay = ({text}) => {
  return (
    <div id='key-code'>
      {text}
    </div>
  );
}
const KeyDisplay = ({text}) => {
  return (
    <div id='key-text'>
      {text}
    </div>
  )
}
const Button = () => {
  return (
    <div className='btn' data-clipboard-target='#key-code'>
      Copy to clipboard
    </div>
  )
}
class App extends React.Component{
  constructor(){
    super();
    this.state = {
      keyCodepressed: '?',
      keypressed: '?'
    }
    this.handlePress = this.handlePress.bind(this);
  }
  handlePress(e){
    this.setState({
      keyCodepressed: e.keyCode,
      keypressed: e.key
    })
  }
  componentDidMount(){
    window.addEventListener('keypress', this.handlePress);
  }
  render() {

    return (
      <div id="app" onKeyPress={(e)=>this.handlePress(e)}>
        <KeyCodeDisplay text={this.state.keyCodepressed}/>
        <Button />
        <KeyDisplay text={this.state.keypressed} />
      </div>
    )
  }
}
new Clipboard('.btn', {
    text: function(trigger) {
        return document.getElementById('key-code').innerHTML
    }
});
ReactDOM.render(<App/>, document.getElementById('root'));
