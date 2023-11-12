"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[827],{3905:(e,n,t)=>{t.d(n,{Zo:()=>h,kt:()=>p});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},h=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),c=d(t),p=r,m=c["".concat(l,".").concat(p)]||c[p]||u[p]||o;return t?a.createElement(m,s(s({ref:n},h),{},{components:t})):a.createElement(m,s({ref:n},h))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=c;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var d=2;d<o;d++)s[d]=t[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},7027:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=t(7462),r=(t(7294),t(3905));const o={},s="Examples",i={unversionedId:"examples/examples",id:"examples/examples",isDocsHomePage:!1,title:"Examples",description:"Getting Started",source:"@site/docs/examples/examples.md",sourceDirName:"examples",slug:"/examples/examples",permalink:"/docs/docs/examples/examples",editUrl:"https://github.com/assafelovic/gpt-researcher/tree/master/docs/docs/examples/examples.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"People",permalink:"/docs/docs/tavily-api/Topics/people"},next:{title:"Contribute",permalink:"/docs/docs/contribute"}},l=[{value:"Getting Started",id:"getting-started",children:[],level:3},{value:"Response",id:"response",children:[],level:3},{value:"Sample 1: Research Report using Tavily and GPT-4 with Langchain",id:"sample-1-research-report-using-tavily-and-gpt-4-with-langchain",children:[],level:3},{value:"Response",id:"response-1",children:[],level:3}],d={toc:l};function h(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"getting-started"},"Getting Started"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# install tavily\n!pip install tavily-python\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# import and connect\nfrom tavily import TavilyClient\nclient = TavilyClient(api_key="")\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# simple query using tavily\'s advanced search\nclient.search("What happend in the latest burning man floods?", search_depth="advanced")\n')),(0,r.kt)("h3",{id:"response"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-commandline"},"{'query': 'What happend in the latest burning man floods?',\n 'follow_up_questions': ['How severe were the floods at Burning Man?',\n  'What were the impacts of the floods?',\n  'How did the organizers handle the floods at Burning Man?'],\n 'answer': None,\n 'images': None,\n 'results': [{'content': \"This year\u2019s rains opened the floodgates for Burning Man criticism  Give Newsletters Site search Vox main menu Filed under: The Burning Man flameout, explained Climate change \u2014 and schadenfreude\\xa0\u2014 finally caught up to the survivalist cosplayers. Share this story Share  Has Burning Man finally lost its glamour?  September 1, after most of the scheduled events and live performances were canceled due to the weather, Burning Man organizers closed routes in and out of the area, forcing attendees to stay behindShare Attendees look at a rainbow over flooding on a desert plain on September 1, 2023, after heavy rains turned the annual Burning Man festival site in Nevada's Black Rock desert into a mud...\",\n   'url': 'https://www.vox.com/culture/2023/9/6/23861675/burning-man-2023-mud-stranded-climate-change-playa-foot',\n   'score': 0.9797,\n   'raw_content': None},\n  {'content': 'Tens of thousands of Burning Man festivalgoers are slowly making their way home from the Nevada desert after muddy conditions from heavy rains made it nearly impossible to leave over the weekend.  according to burningman.org.  Though the death at this year\\'s Burning Man is still being investigated, a social media hoax was blamed for spreading rumors that it\\'s due to a breakout of Ebola.  \"Thank goodness this community knows how to take care of each other,\" the Instagram page for Burning Man Information Radio wrote on a post predicting more rain.News Burning Man attendees make mass exodus after being stranded in the mud at festival A caravan of festivalgoers were backed up as much as eight hours when they were finally allowed to leave...',\n   'url': 'https://www.today.com/news/what-is-burning-man-flood-death-rcna103231',\n   'score': 0.9691,\n   'raw_content': None},\n  {'content': '\u201cIt was a perfect, typical Burning Man weather until Friday \u2014 then the rain started coming down hard,\" said Phillip Martin, 37. \"Then it turned into Mud Fest.\"  After more than a half-inch (1.3 centimeters) of rain fell Friday, flooding turned the playa to foot-deep mud \u2014 closing roads and forcing burners to lean on each other for help.  ABC News Video Live Shows Election 2024 538 Stream on No longer stranded, tens of thousands clean up and head home after Burning Man floods  Mark Fromson, 54, who goes by the name \u201cStuffy\u201d on the playa, had been staying in an RV, but the rains forced him to find shelter at another camp, where fellow burners provided him food and cover.RENO, Nev. -- The traffic jam leaving the Burning Man festival eased up considerably Tuesday as the exodus from the mud-caked Nevada desert entered another day following massive rain that left tens of thousands of partygoers stranded for days.',\n   'url': 'https://abcnews.go.com/US/wireStory/wait-times-exit-burning-man-drop-after-flooding-102936473',\n   'score': 0.9648,\n   'raw_content': None},\n  {'content': 'Burning Man hit by heavy rains, now mud soaked.People there told to conserve food and water as they shelter in place.(Video: Josh Keppel) pic.twitter.com/DuBj0Ejtb8  More on this story Burning Man revelers begin exodus from festival after road reopens Officials investigate death at Burning Man as thousands stranded by floods  Burning Man festival-goers trapped in desert as rain turns site to mud Tens of thousands of \u2018burners\u2019 urged to conserve food and water as rain and flash floods sweep Nevada  Burning Man festivalgoers surrounded by mud in Nevada desert \u2013 video Burning Man attendees roadblocked by climate activists: \u2018They have a privileged mindset\u2019Last year, Burning Man drew approximately 80,000 people. This year, only about 60,000 were expected - with many citing the usual heat and dust and eight-hour traffic jams when they tried to leave.',\n   'url': 'https://www.theguardian.com/culture/2023/sep/02/burning-man-festival-mud-trapped-shelter-in-place',\n   'score': 0.9618,\n   'raw_content': None},\n  {'content': 'Skip links Live Navigation menu Live Death at Burning Man investigated in US, thousands stranded by flooding  Attendees trudged through mud, many barefoot or wearing plastic bags on their feet. The revellers were urged to shelter in place and conserve food, water and other supplies.  Thousands of festivalgoers remain stranded as organisers close vehicular traffic to the festival site following storm flooding in Nevada\u2019s desert.  Authorities in Nevada are investigating a death at the site of the Burning Man festival, where thousands of attendees remained stranded after flooding from storms swept through the Nevada desert in3 Sep 2023. Authorities in Nevada are investigating a death at the site of the Burning Man festival, where thousands of attendees remained stranded after flooding from storms swept through the ...',\n   'url': 'https://www.aljazeera.com/news/2023/9/3/death-under-investigation-after-storm-flooding-at-burning-man-festival',\n   'score': 0.9612,\n   'raw_content': None}],\n 'response_time': 6.23}\n")),(0,r.kt)("h3",{id:"sample-1-research-report-using-tavily-and-gpt-4-with-langchain"},"Sample 1: Research Report using Tavily and GPT-4 with Langchain"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# install lanchain\n!pip install langchain\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# set up openai api key\nopenai_api_key = ""\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# libraries\nfrom langchain.adapters.openai import convert_openai_messages\nfrom langchain.chat_models import ChatOpenAI\n\n# setup query\nquery = "What happend in the latest burning man floods?"\n\n# run tavily search\ncontent = client.search(query, search_depth="advanced")["results"]\n\n# setup prompt\nprompt = [{\n    "role": "system",\n    "content":  f\'You are an AI critical thinker research assistant. \'\\\n                f\'Your sole purpose is to write well written, critically acclaimed,\'\\\n                f\'objective and structured reports on given text.\'\n}, {\n    "role": "user",\n    "content": f\'Information: """{content}"""\\n\\n\' \\\n               f\'Using the above information, answer the following\'\\\n               f\'query: "{query}" in a detailed report --\'\\\n               f\'Please use MLA format and markdown syntax.\'\n}]\n\n# run gpt-4\nlc_messages = convert_openai_messages(prompt)\nreport = ChatOpenAI(model=\'gpt-4\',openai_api_key=openai_api_key).invoke(lc_messages).content\n\n# print report\nprint(report)\n')),(0,r.kt)("h3",{id:"response-1"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-commandline"},'# The Burning Man Festival 2023: A Festival Turned Mud Fest\n\n**Abstract:** The Burning Man Festival of 2023 in Nevada\u2019s Black Rock desert will be remembered for a significant event: a heavy rainfall that turned the festival site into a muddy mess, testing the community spirit of the annual event attendees and stranding tens of thousands of festival-goers. \n\n**Keywords:** Burning Man Festival, flooding, rainfall, mud, community spirit, Nevada, Black Rock desert, stranded attendees, shelter\n\n---\n## 1. Introduction\n\nThe Burning Man Festival, an annual event known for its art installations, free spirit, and community ethos, faced an unprecedented challenge in 2023 due to heavy rains that flooded the festival site, turning it into a foot-deep mud pit[^1^][^2^]. The festival, held in Nevada\'s Black Rock desert, is known for its harsh weather conditions, including heat and dust, but this was the first time the event was affected to such an extent by rainfall[^4^].\n\n## 2. Impact of the Rain\n\nThe heavy rains started on Friday, and more than a half-inch of rain fell, leading to flooding that turned the playa into a foot-deep mud pit[^2^]. The roads were closed due to the muddy conditions, stranding tens of thousands of festival-goers[^2^][^5^]. The burners, as the attendees are known, were forced to lean on each other for help[^2^].\n\n## 3. Community Spirit Tested\n\nThe unexpected weather conditions put the Burning Man community spirit to the test[^1^]. Festival-goers found themselves sheltering in place, conserving food and water, and helping each other out[^3^]. For instance, Mark Fromson, who had been staying in an RV, was forced to find shelter at another camp due to the rains, where fellow burners provided him with food and cover[^2^].\n\n## 4. Exodus After Rain\n\nDespite the challenges, the festival-goers made the best of the situation. Once the rain stopped and things dried up a bit, the party quickly resumed[^3^]. A day later than scheduled, the massive wooden effigy known as the Man was set ablaze[^5^]. As the situation improved, thousands of Burning Man attendees began their mass exodus from the festival site[^5^].\n\n## 5. Conclusion\n\nThe Burning Man Festival of 2023 will be remembered for the community spirit shown by the attendees in the face of heavy rainfall and flooding. Although the event was marred by the weather, the festival-goers managed to make the best of the situation, demonstrating the resilience and camaraderie that the Burning Man Festival is known for.\n\n---\n**References**\n\n[^1^]: "Attendees walk through a muddy desert plain..." NPR. 2023. https://www.npr.org/2023/09/02/1197441202/burning-man-festival-rains-floods-stranded-nevada.\n\n[^2^]: \u201c\'It was a perfect, typical Burning Man weather until Friday...\'" ABC News. 2023. https://abcnews.go.com/US/wireStory/wait-times-exit-burning-man-drop-after-flooding-102936473.\n\n[^3^]: "The latest on the Burning Man flooding..." WUNC. 2023. https://www.wunc.org/2023-09-03/the-latest-on-the-burning-man-flooding.\n\n[^4^]: "Burning Man hit by heavy rains, now mud soaked..." The Guardian. 2023. https://www.theguardian.com/culture/2023/sep/02/burning-man-festival-mud-trapped-shelter-in-place.\n\n[^5^]: "One day later than scheduled, the massive wooden effigy known as the Man was set ablaze..." CNN. 2023. https://www.cnn.com/2023/09/05/us/burning-man-storms-shelter-exodus-tuesday/index.html.\n')))}h.isMDXComponent=!0}}]);