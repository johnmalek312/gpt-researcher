"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2082],{5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>g});var l=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=l.createContext({}),p=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},h=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),h=r,g=c["".concat(s,".").concat(h)]||c[h]||m[h]||a;return n?l.createElement(g,o(o({ref:t},u),{},{components:n})):l.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5221:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var l=n(8168),r=(n(6540),n(5680));const a={},o="Running with Ollama",i={unversionedId:"gpt-researcher/llms/running-with-ollama",id:"gpt-researcher/llms/running-with-ollama",isDocsHomePage:!1,title:"Running with Ollama",description:"Ollama is a platform that allows you to deploy and manage custom language models. This guide will walk you through deploying a custom language model on Ollama.",source:"@site/docs/gpt-researcher/llms/running-with-ollama.md",sourceDirName:"gpt-researcher/llms",slug:"/gpt-researcher/llms/running-with-ollama",permalink:"/docs/gpt-researcher/llms/running-with-ollama",editUrl:"https://github.com/assafelovic/gpt-researcher/tree/master/docs/docs/gpt-researcher/llms/running-with-ollama.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"running-with-azure",permalink:"/docs/gpt-researcher/llms/running-with-azure"},next:{title:"Retrievers",permalink:"/docs/gpt-researcher/search-engines/retrievers"}},s=[{value:"Fetching the Desired LLM Models",id:"fetching-the-desired-llm-models",children:[],level:2},{value:"Querying your Custom LLM with GPT-Researcher",id:"querying-your-custom-llm-with-gpt-researcher",children:[],level:2},{value:"Run LLM Test Script for GPTR",id:"run-llm-test-script-for-gptr",children:[],level:2},{value:"Deploy Ollama on Elestio",id:"deploy-ollama-on-elestio",children:[{value:"Disable Elestio Authentication or Add Auth Headers",id:"disable-elestio-authentication-or-add-auth-headers",children:[],level:4}],level:2}],p={toc:s},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,l.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"running-with-ollama"},"Running with Ollama"),(0,r.yg)("p",null,"Ollama is a platform that allows you to deploy and manage custom language models. This guide will walk you through deploying a custom language model on Ollama."),(0,r.yg)("p",null,"Read on to understand how to install a Custom LLM with the Ollama WebUI, and how to query it with GPT-Researcher."),(0,r.yg)("h2",{id:"fetching-the-desired-llm-models"},"Fetching the Desired LLM Models"),(0,r.yg)("p",null,"After deploying Ollama WebUI, you'll want to enter the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/open-webui/open-webui/tree/main"},"Open WebUI Admin App")," & download a custom LLM."),(0,r.yg)("p",null,"Choose a model from ",(0,r.yg)("a",{parentName:"p",href:"https://ollama.com/library?sort=popular"},"Ollama's Library of LLM's")),(0,r.yg)("p",null,"Paste the model name & size into the Web UI:"),(0,r.yg)("img",{width:"1511",alt:"Screen Shot 2024-08-27 at 23 26 28",src:"https://github.com/user-attachments/assets/32abd048-745c-4232-9f1f-6af265cff250"}),(0,r.yg)("p",null,"For our example, let's choose to download the ",(0,r.yg)("inlineCode",{parentName:"p"},"qwen2:1.5b")," model."),(0,r.yg)("p",null,"This model now automatically becomes available via your Server's out-of-the-box API - we'll leverage it within our GPT-Researcher .env file in the next step."),(0,r.yg)("h2",{id:"querying-your-custom-llm-with-gpt-researcher"},"Querying your Custom LLM with GPT-Researcher"),(0,r.yg)("p",null,"If you deploy ollama locally, a .env like so, should enable powering GPT-Researcher with Ollama:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'OPENAI_API_KEY="123"\nOPENAI_API_BASE="http://127.0.0.1:11434/v1"\nOLLAMA_BASE_URL="http://127.0.0.1:11434/"\nFAST_LLM="ollama:qwen2:1.5b"\nSMART_LLM="ollama:qwen2:1.5b"\nEMBEDDING="ollama:all-minilm:22m"\n')),(0,r.yg)("p",null,"Replace ",(0,r.yg)("inlineCode",{parentName:"p"},"FAST_LLM")," & ",(0,r.yg)("inlineCode",{parentName:"p"},"SMART_LLM")," with the model you downloaded from the Elestio Web UI in the previous step."),(0,r.yg)("h2",{id:"run-llm-test-script-for-gptr"},"Run LLM Test Script for GPTR"),(0,r.yg)("p",null,"And here's a custom python script you can use to query your custom LLM:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},'\nimport os\nimport asyncio\nimport logging\nlogging.basicConfig(level=logging.DEBUG)\nfrom gpt_researcher.llm_provider.generic import GenericLLMProvider\nfrom gpt_researcher.utils.llm import get_llm\n\nOLLAMA_BASE_URL = "https://ollama-ug3qr-u21899.vm.elestio.app:57987"\nLLM_MODEL = "llama3.1"\n\n# Create the GenericLLMProvider instance\nllm_provider = get_llm(\n    "ollama",\n    base_url=OLLAMA_BASE_URL,\n    model=LLM_MODEL,\n    temperature=0.7,\n    max_tokens=2000,\n    verify_ssl=False  # Add this line\n)\n\n# Test the connection with a simple query\nmessages = [{"role": "user", "content": "sup?"}]\n\nasync def test_ollama():\n    try:\n        response = await llm_provider.get_chat_response(messages, stream=False)\n        print("Ollama response:", response)\n    except Exception as e:\n        print(f"Error: {e}")\n\n# Run the async function\nasyncio.run(test_ollama())\n    \n')),(0,r.yg)("p",null,"Replace ",(0,r.yg)("inlineCode",{parentName:"p"},"OLLAMA_BASE_URL")," with the URL of your Ollama instance, and ",(0,r.yg)("inlineCode",{parentName:"p"},"LLM_MODEL")," with the model you downloaded from the Ollama Web UI."),(0,r.yg)("p",null,"Run the script to test the connection with your custom LLM."),(0,r.yg)("h2",{id:"deploy-ollama-on-elestio"},"Deploy Ollama on Elestio"),(0,r.yg)("p",null,"Elestio is a platform that allows you to deploy and manage custom language models. This guide will walk you through deploying a custom language model on Elestio."),(0,r.yg)("p",null,"You can deploy an ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/open-webui/open-webui/tree/main"},"Open WebUI")," server with ",(0,r.yg)("a",{parentName:"p",href:"https://elest.io/open-source/ollama"},"Elestio")),(0,r.yg)("p",null,"Here's an example .env file that will enable powering GPT-Researcher with Elestio:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'OPENAI_API_KEY="123"\nOPENAI_API_BASE="https://<your_custom_elestio_project>.vm.elestio.app:57987/v1"\nOLLAMA_BASE_URL="https://<your_custom_elestio_project>.vm.elestio.app:57987/"\nFAST_LLM="openai:qwen2:1.5b"\nSMART_LLM="openai:qwen2:1.5b"\nEMBEDDING="ollama:all-minilm:22m"\n')),(0,r.yg)("h4",{id:"disable-elestio-authentication-or-add-auth-headers"},"Disable Elestio Authentication or Add Auth Headers"),(0,r.yg)("p",null,"To remove the basic auth you have to follow the below steps:\nGo to your service -> Security -> at last Nginx -> in that find the below code:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'auth_basic           "Authentication"; \nauth_basic_user_file /etc/nginx/conf.d/.htpasswd;\n')),(0,r.yg)("p",null,'Comment these both these lines out and click the button "Update & Restart" to reflect the changes.'))}c.isMDXComponent=!0}}]);