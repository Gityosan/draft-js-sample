/** @jsx jsx */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {stateToHTML} from 'draft-js-export-html';
import {stateFromHTML} from 'draft-js-import-html';

import {css,jsx} from "@emotion/react";
import {Editor,EditorState,RichUtils} from "draft-js";

interface MySimpleEditorProps{

}
class SimpleVersion extends React.Component<MySimpleEditorProps,any>{
  constructor(props:MySimpleEditorProps){
    super(props)
    this.state={
      editorState:EditorState.createEmpty(),
    }
  }
  onChange(e:EditorState){
    this.setState({editorState:e})
  }
  render(){
    return(
      <div style={{border:"1px solid black",width:"100%",height:"10vh"}}>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange.bind(this)}
          />
      </div>

    )
    
  }
}
interface MyComplexEditorProps{

}
class ComplexVersion extends React.Component<MyComplexEditorProps,any>{
  constructor(props:MyComplexEditorProps){
    super(props)
    this.state={
      editorState:EditorState.createEmpty(),
      value:"",
    };
    this.onChange = (editorState) => this.setState({editorState});
    // this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.changeBold=this.changeBold.bind(this);
    this.changeItalic = this.changeItalic.bind(this);
    this.changeHeaderOne = this.changeHeaderOne.bind(this);
    this.changeList = this.changeList.bind(this);
    this.save = this.save.bind(this);
    this.read = this.read.bind(this);
  }

  onChange(e:EditorState){
    this.setState({editorState:e})
  }

  changeBold(e:any){
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState,"BOLD"))
    e.preventDefault()
  }
  changeItalic(e:any){
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState,"ITALIC"))
    e.preventDefault()
  }
  changeHeaderOne(e:any){
    this.onChange(RichUtils.toggleBlockType(this.state.editorState,"header-one"))
    e.preventDefault()
  }
  changeList(e:any){
    this.onChange(RichUtils.toggleBlockType(this.state.editorState,"unordered-list-item"))
    e.preventDefault()
  }
  save(){
    const contentState = this.state.editorState.getCurrentContent();
    const content = stateToHTML(contentState);
    console.log(content);
    this.setState({value:content});
  }
  read(){
    const readContent = stateFromHTML(this.state.value);
    const editorState = EditorState.createWithContent(readContent);
    console.log(this.state.value)
    this.setState({editorState:editorState});
  }
  // handleKeyCommand(command:any) {
  //   const newState = RichUtils.handleKeyCommand(this.state.editorState, command)
  //   if (newState) {
  //     this.onChange(newState)
  //     return true
  //   }
  //   return false
  // }
  render(){
    return(
      <div>
        <div>
          <button onMouseDown={this.changeBold}>Bold</button>
          <button onMouseDown={this.changeItalic}>Italic</button>
          <button onMouseDown={this.changeHeaderOne}>H1</button>
          <button onMouseDown={this.changeList}>List</button>
          <button onMouseDown={this.save}>Save</button>
          <button onMouseDown={this.read}>Read</button>
        </div>
        <div style={{border:"1px solid black",width:"100%",height:"10vh",overflowY: "scroll"}}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            // handleKeyCommand={this.handleKeyCommand}
            />
        </div>
        <div>
          <p>Saveを押すと、htmlに変換してthis.state.valueにsetStateします。</p>
          <p>console.log(htmlに変換したもの)が出力されます。</p>
          <p>Readを押すと、this.state.valueから復元します。</p>
          <p>console.log(this.state.value)が出力されます。</p>
        </div>
      </div>
      
    )
    
  }
}


const Root = () => {
  const baseStyle=css({
    width:"50vw",
    margin:"3vh 25vw"
  });
  return(
    <div css={baseStyle}>
      <h1>Draft.jsの試作</h1>
      <h2>シンプルなversion</h2>
      <SimpleVersion/>
      <h2>GoogleDocumentみたいに多機能なversion</h2>
      <ComplexVersion/>
    </div>
  )
}

ReactDOM.render(<Root/>, document.getElementById('root'));