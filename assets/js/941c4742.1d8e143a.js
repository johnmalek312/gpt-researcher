"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[790],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,y=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(y,l(l({ref:t},s),{},{components:n})):a.createElement(y,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7696:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={},l="LlamaIndex",i={unversionedId:"tavily-api/llamaindex",id:"tavily-api/llamaindex",isDocsHomePage:!1,title:"LlamaIndex",description:"This tool has a more extensive example usage documented in a Jupyter notebook here",source:"@site/docs/tavily-api/llamaindex.md",sourceDirName:"tavily-api",slug:"/tavily-api/llamaindex",permalink:"/docs/docs/tavily-api/llamaindex",editUrl:"https://github.com/assafelovic/gpt-researcher/tree/master/docs/docs/tavily-api/llamaindex.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Langchain",permalink:"/docs/docs/tavily-api/langchain"},next:{title:"Introduction",permalink:"/docs/docs/tavily-api/Topics/introduction"}},c=[],p={toc:c};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"llamaindex"},"LlamaIndex"),(0,r.kt)("p",null,"This tool has a more extensive example usage documented in a Jupyter notebook ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/emptycrown/llama-hub/tree/main/llama_hub/tools/notebooks/tavily.ipynb"},"here")),(0,r.kt)("p",null,"Here's an example usage of the TavilyToolSpec."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from llama_hub.tools.tavily_research import TavilyToolSpec\nfrom llama_index.agent import OpenAIAgent\n\ntavily_tool = TavilyToolSpec(\n    api_key='your-key',\n)\nagent = OpenAIAgent.from_tools(tavily_tool.to_tool_list())\n\nagent.chat('What happened in the latest Burning Man festival?')\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"search"),": Search for relevant dynamic data based on a query. Returns a list of urls and their relevant content."),(0,r.kt)("p",null,"This loader is designed to be used as a way to load data as a Tool in an Agent. See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/emptycrown/llama-hub/tree/main"},"here")," for examples."))}s.isMDXComponent=!0}}]);