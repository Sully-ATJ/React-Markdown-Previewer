import React from "react";
import marked from "marked";
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      markdown: placeholder
    }
    
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(e){
    console.log("in handlechange");
    this.setState({
      markdown: e.target.value
    });
  }
  render(){
    return(
      <div className="container">
        <h1 className="text-center mt-4 heady"><em>React Markdown Previewer!</em></h1>
        <h4 className="text-center mt-4 heady">Type markdown syntax on the editor(left) and see the result on the previewer(right)!</h4>
        <div className="row wrapper">
          <textarea 
            id ='editor' 
            className="col-sm p-4 editor"
            onChange={this.handleChange}
            value={this.state.markdown}
            type='text'
          />
          <Previewer markdown={this.state.markdown}/>
        </div>
      </div>
    );
  }
}


const Previewer = props =>{
  return(
      <div className="col-sm pt-2 preview" id="preview" dangerouslySetInnerHTML={{
          __html:marked(props.markdown)
        }}/>
  );
};

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://yycjs.com/real-world-react/img/react-logo.png)
`;

export default App;