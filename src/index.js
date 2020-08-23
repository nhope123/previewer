import React from 'react';         // React module import
import ReactDOM from 'react-dom';  // React DOM module import
import marked from 'marked';       // Marked module to display Html
import DOMPurify from 'dompurify'; // Sanitizer module to clean Html from attacks
import './index.css';              // Custom css import
//import * as name from './change.js';

const texts = (
`# Welcome to my React Markdown Previewer!

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
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`);



// Main componentfor the Previewer React app
class Previewer extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      input:this.props.text,
      cleanText: this.props.text,
      formClass: 'form show form-size',
      formMax: 'fa fa-window-maximize regular show',
      formMin: 'fa-window-minimize regular hide',
      viewClass: 'viewer show view-size',
      viewMax: 'fa fa-window-maximize regular show',
      viewMin: 'fa-window-minimize regular hide',
      preview: 'minPreview'
     };
    this.textUpdate = this.textUpdate.bind(this);
    this.maximizeForm = this.maximizeForm.bind(this);
    this.minimizeForm = this.minimizeForm.bind(this);
    this.maximizeView = this.maximizeView.bind(this);
    this.minimizeView = this.minimizeView.bind(this);

  }
  // Maximize the editor textarea, only this area is show
  maximizeForm(){
    this.setState({
      formClass: 'form show maxWindow',
      viewClass: "viewer hide view-size",
      formMax: 'fa fa-window-maximize regular hide',
      formMin: 'fa fa-window-minimize regular show'
      });
    }
    // Minimize the editor textarea, returns app view to origin
  minimizeForm(){
    this.setState({
      formClass: 'form show form-size',
      viewClass: "viewer show view-size",
      formMax: 'fa fa-window-maximize regular show',
      formMin: 'fa fa-window-minimize regular hide'
    });
  }
      // Maximize the Display area, only this area is show
  maximizeView(){
    this.setState({
      formClass: 'form hide form-size',
      viewClass: 'viewer show maxPreview',
      viewMax: 'fa fa-window-maximize regular hide',
      viewMin: 'fa fa-window-minimize regular show',
      preview: 'maxPreview'
      });
    }
  // Minimize the display area, returns app view to origin
  minimizeView(){
    this.setState({
      formClass: 'form show form-size',
      viewClass: "viewer show view-size",
      viewMax: 'fa fa-window-maximize regular show',
      viewMin: 'fa fa-window-minimize regular hide',
      preview: 'minPreview'
      });
    }
  // Update the data in viewer on editing in the editor
  textUpdate(event){
    this.setState({
      input: event.target.value,
      cleanText: event.target.value});
  }
  // Render , monitor and update app Componentse
  render(){
    return(
      <div className='main-container' >

        <div className='title-container' > Markdown Previewer
          <a href='#' title='Github Code' >
            <i class="fa fa-github-alt"></i>
          </a>
        </div>


        <div id="container">

          <div>
            <form id="form" className={this.state.formClass} >
              {/* Editor title bar with maximize and minimize options */}
              <label id="label" for='editor' className="label">
                <i class="fa fa-cogs icon" aria-hidden="true"></i>
                Narcro Editor
                <i className={this.state.formMax} title='Maximize' aria-hidden="true" tabindex='0' onClick={this.maximizeForm}  ></i>
                <i className={this.state.formMin} title='Minimize' aria-hidden="true" tabindex='0' onClick={this.minimizeForm}  ></i>
              </label>
              {/* Editor text field for entering Html Markdown */}
              <textarea value={this.state.input} id="editor" tabindex="0"  onChange={this.textUpdate} ></textarea>
            </form>
          </div>
          <div>
            <Preview {...{text: this.state.cleanText,
                          classes: this.state.viewClass,
                          vMax: this.state.viewMax,
                          vMin: this.state.viewMin,
                          maxView: this.maximizeView,
                          minView: this.minimizeView,
                          preview: this.preview
                        }} />
          </div>
        </div>


    </div>
    );
  }
}
// Display Component will Display the text as it is added to the Editor.
const Preview = (output)=>{
    return(
      <div id="viewer" className={output.classes} >
        {/* Display title bar with maximize and minimize options */}
        <div className="label">
          <i class="fa fa-television icon" aria-hidden="true"></i>
          Display
          <i class={output.vMax} title='Maximize' aria-hidden="true" tabindex='0' onClick={output.maxView}></i>
          <i class={output.vMin} title='Minimize' aria-hidden="true" tabindex='0'   onClick={output.minView}></i>
        </div>
        {/* Component renders the Html Mrakdown, sanitize it from bad Html and adds line breaks  */}
        <div id="preview" className={output.preview} dangerouslySetInnerHTML={{__html: marked( output.text,{
                                              sanitizer: DOMPurify.sanitize(),
                                              breaks:true,
                                              gfm:true,
                                              xhtml: false})}} ></div>
      </div>
    );
}

// Render all Components to the Html Page
ReactDOM.render(
  <Previewer text={texts} />,
  document.getElementById('root')
);
