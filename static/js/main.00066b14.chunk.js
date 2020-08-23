(this.webpackJsonppreviewer=this.webpackJsonppreviewer||[]).push([[0],{10:function(e,i,a){e.exports=a(11)},11:function(e,i,a){"use strict";a.r(i);var t=a(3),n=a(4),r=a(1),s=a(9),o=a(8),m=a(0),l=a.n(m),w=a(5),c=a.n(w),d=a(6),f=a.n(d),h=a(7),u=a.n(h),v=(a(16),function(e){Object(s.a)(a,e);var i=Object(o.a)(a);function a(e){var n;return Object(t.a)(this,a),(n=i.call(this,e)).state={input:n.props.text,cleanText:n.props.text,formClass:"form show form-size",formMax:"fa fa-window-maximize regular show",formMin:"fa-window-minimize regular hide",viewClass:"viewer show view-size",viewMax:"fa fa-window-maximize regular show",viewMin:"fa-window-minimize regular hide",preview:"minPreview"},n.textUpdate=n.textUpdate.bind(Object(r.a)(n)),n.maximizeForm=n.maximizeForm.bind(Object(r.a)(n)),n.minimizeForm=n.minimizeForm.bind(Object(r.a)(n)),n.maximizeView=n.maximizeView.bind(Object(r.a)(n)),n.minimizeView=n.minimizeView.bind(Object(r.a)(n)),n}return Object(n.a)(a,[{key:"maximizeForm",value:function(){this.setState({formClass:"form show maxWindow",viewClass:"viewer hide view-size",formMax:"fa fa-window-maximize regular hide",formMin:"fa fa-window-minimize regular show"})}},{key:"minimizeForm",value:function(){this.setState({formClass:"form show form-size",viewClass:"viewer show view-size",formMax:"fa fa-window-maximize regular show",formMin:"fa fa-window-minimize regular hide"})}},{key:"maximizeView",value:function(){this.setState({formClass:"form hide form-size",viewClass:"viewer show maxPreview",viewMax:"fa fa-window-maximize regular hide",viewMin:"fa fa-window-minimize regular show",preview:"maxPreview"})}},{key:"minimizeView",value:function(){this.setState({formClass:"form show form-size",viewClass:"viewer show view-size",viewMax:"fa fa-window-maximize regular show",viewMin:"fa fa-window-minimize regular hide",preview:"minPreview"})}},{key:"textUpdate",value:function(e){this.setState({input:e.target.value,cleanText:e.target.value})}},{key:"render",value:function(){return l.a.createElement("div",{className:"main-container"},l.a.createElement("div",{className:"title-container"}," Markdown Previewer",l.a.createElement("a",{href:"https://github.com/nhope123/previewer",title:"Github Code",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{class:"fa fa-github-alt"}))),l.a.createElement("div",{id:"container"},l.a.createElement("div",null,l.a.createElement("form",{id:"form",className:this.state.formClass},l.a.createElement("label",{id:"label",for:"editor",className:"label"},l.a.createElement("i",{class:"fa fa-cogs icon","aria-hidden":"true"}),"Narcro Editor",l.a.createElement("i",{className:this.state.formMax,title:"Maximize","aria-hidden":"true",tabindex:"0",onClick:this.maximizeForm}),l.a.createElement("i",{className:this.state.formMin,title:"Minimize","aria-hidden":"true",tabindex:"0",onClick:this.minimizeForm})),l.a.createElement("textarea",{value:this.state.input,id:"editor",tabindex:"0",onChange:this.textUpdate}))),l.a.createElement("div",null,l.a.createElement(x,{text:this.state.cleanText,classes:this.state.viewClass,vMax:this.state.viewMax,vMin:this.state.viewMin,maxView:this.maximizeView,minView:this.minimizeView,preview:this.preview}))))}}]),a}(l.a.Component)),x=function(e){return l.a.createElement("div",{id:"viewer",className:e.classes},l.a.createElement("div",{className:"label"},l.a.createElement("i",{class:"fa fa-television icon","aria-hidden":"true"}),"Display",l.a.createElement("i",{class:e.vMax,title:"Maximize","aria-hidden":"true",tabindex:"0",onClick:e.maxView}),l.a.createElement("i",{class:e.vMin,title:"Minimize","aria-hidden":"true",tabindex:"0",onClick:e.minView})),l.a.createElement("div",{id:"preview",className:e.preview,dangerouslySetInnerHTML:{__html:f()(e.text,{sanitizer:u.a.sanitize(),breaks:!0,gfm:!0,xhtml:!1})}}))};c.a.render(l.a.createElement(v,{text:"# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want!\n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n"}),document.getElementById("root"))},16:function(e,i,a){}},[[10,1,2]]]);
//# sourceMappingURL=main.00066b14.chunk.js.map