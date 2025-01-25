"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2363],{5680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>m});var r=a(6540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(a),y=n,m=u["".concat(s,".").concat(y)]||u[y]||g[y]||i;return a?r.createElement(m,l(l({ref:t},c),{},{components:a})):r.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},2080:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=a(8168),n=(a(6540),a(5680));const i={},l="Scraping Options",o={unversionedId:"gpt-researcher/gptr/scraping",id:"gpt-researcher/gptr/scraping",isDocsHomePage:!1,title:"Scraping Options",description:"GPT Researcher now offers various methods for web scraping: static scraping with BeautifulSoup, dynamic scraping with Selenium, and High scale scraping with Tavily Extract. This document explains how to switch between these methods and the benefits of each approach.",source:"@site/docs/gpt-researcher/gptr/scraping.md",sourceDirName:"gpt-researcher/gptr",slug:"/gpt-researcher/gptr/scraping",permalink:"/docs/gpt-researcher/gptr/scraping",editUrl:"https://github.com/assafelovic/gpt-researcher/tree/master/docs/docs/gpt-researcher/gptr/scraping.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Configuration",permalink:"/docs/gpt-researcher/gptr/config"},next:{title:"Querying the Backend",permalink:"/docs/gpt-researcher/gptr/querying-the-backend"}},s=[{value:"Configuring Scraping Method",id:"configuring-scraping-method",children:[],level:2},{value:"Scraping Methods Explained",id:"scraping-methods-explained",children:[{value:"BeautifulSoup (Static Scraping)",id:"beautifulsoup-static-scraping",children:[],level:3},{value:"Selenium (Browser Scraping)",id:"selenium-browser-scraping",children:[],level:3},{value:"Tavily Extract (Recommended for Production)",id:"tavily-extract-recommended-for-production",children:[],level:3}],level:2},{value:"Additional Setup for Selenium",id:"additional-setup-for-selenium",children:[],level:2},{value:"Choosing the Right Method",id:"choosing-the-right-method",children:[],level:2},{value:"Troubleshooting",id:"troubleshooting",children:[],level:2}],p={toc:s},c="wrapper";function u(e){let{components:t,...a}=e;return(0,n.yg)(c,(0,r.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"scraping-options"},"Scraping Options"),(0,n.yg)("p",null,"GPT Researcher now offers various methods for web scraping: static scraping with BeautifulSoup, dynamic scraping with Selenium, and High scale scraping with Tavily Extract. This document explains how to switch between these methods and the benefits of each approach."),(0,n.yg)("h2",{id:"configuring-scraping-method"},"Configuring Scraping Method"),(0,n.yg)("p",null,"You can choose your preferred scraping method by setting the ",(0,n.yg)("inlineCode",{parentName:"p"},"SCRAPER")," environment variable:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"For BeautifulSoup (static scraping):"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},'export SCRAPER="bs"\n'))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"For Selenium (dynamic browser scraping):"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},'export SCRAPER="browser"\n'))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"For ",(0,n.yg)("strong",{parentName:"p"},"production")," use cases, you can set the Scraper to ",(0,n.yg)("inlineCode",{parentName:"p"},"tavily_extract"),". ",(0,n.yg)("a",{parentName:"p",href:"https://tavily.com"},"Tavily")," allows you to scrape sites at scale without the hassle of setting up proxies, managing cookies, or dealing with CAPTCHAs. Please note that you need to have a Tavily account and ",(0,n.yg)("a",{parentName:"p",href:"https://app.tavily.com"},"API key")," to use this option. To learn more about Tavily Extract ",(0,n.yg)("a",{parentName:"p",href:"https://docs.tavily.com/docs/python-sdk/tavily-extract/getting-started"},"see here"),".\nMake sure to first install the pip package ",(0,n.yg)("inlineCode",{parentName:"p"},"tavily-python"),". Then:"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},'export SCRAPER="tavily_extract"\n')))),(0,n.yg)("p",null,"Note: If not set, GPT Researcher will default to BeautifulSoup for scraping."),(0,n.yg)("h2",{id:"scraping-methods-explained"},"Scraping Methods Explained"),(0,n.yg)("h3",{id:"beautifulsoup-static-scraping"},"BeautifulSoup (Static Scraping)"),(0,n.yg)("p",null,"When ",(0,n.yg)("inlineCode",{parentName:"p"},'SCRAPER="bs"'),", GPT Researcher uses BeautifulSoup for static scraping. This method:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Sends a single HTTP request to fetch the page content"),(0,n.yg)("li",{parentName:"ul"},"Parses the static HTML content"),(0,n.yg)("li",{parentName:"ul"},"Extracts text and data from the parsed HTML")),(0,n.yg)("p",null,"Benefits:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Faster and more lightweight"),(0,n.yg)("li",{parentName:"ul"},"Doesn't require additional setup"),(0,n.yg)("li",{parentName:"ul"},"Works well for simple, static websites")),(0,n.yg)("p",null,"Limitations:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Cannot handle dynamic content loaded by JavaScript"),(0,n.yg)("li",{parentName:"ul"},"May miss content that requires user interaction to display")),(0,n.yg)("h3",{id:"selenium-browser-scraping"},"Selenium (Browser Scraping)"),(0,n.yg)("p",null,"When ",(0,n.yg)("inlineCode",{parentName:"p"},'SCRAPER="browser"'),", GPT Researcher uses Selenium for dynamic scraping. This method:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Opens a real browser instance (Chrome by default)"),(0,n.yg)("li",{parentName:"ul"},"Loads the page and executes JavaScript"),(0,n.yg)("li",{parentName:"ul"},"Waits for dynamic content to load"),(0,n.yg)("li",{parentName:"ul"},"Extracts text and data from the fully rendered page")),(0,n.yg)("p",null,"Benefits:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Can scrape dynamically loaded content"),(0,n.yg)("li",{parentName:"ul"},"Simulates real user interactions (scrolling, clicking, etc.)"),(0,n.yg)("li",{parentName:"ul"},"Works well for complex, JavaScript-heavy websites")),(0,n.yg)("p",null,"Limitations:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Slower than static scraping"),(0,n.yg)("li",{parentName:"ul"},"Requires more system resources"),(0,n.yg)("li",{parentName:"ul"},"Requires additional setup (Selenium and WebDriver installation)")),(0,n.yg)("h3",{id:"tavily-extract-recommended-for-production"},"Tavily Extract (Recommended for Production)"),(0,n.yg)("p",null,"When ",(0,n.yg)("inlineCode",{parentName:"p"},'SCRAPER="tavily_extract"'),", GPT Researcher uses Tavily's Extract API for web scraping. This method:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Uses Tavily's robust infrastructure to handle web scraping at scale"),(0,n.yg)("li",{parentName:"ul"},"Automatically handles CAPTCHAs, JavaScript rendering, and anti-bot measures"),(0,n.yg)("li",{parentName:"ul"},"Provides clean, structured content extraction")),(0,n.yg)("p",null,"Benefits:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Production-ready and highly reliable"),(0,n.yg)("li",{parentName:"ul"},"No need to manage proxies or handle rate limiting"),(0,n.yg)("li",{parentName:"ul"},"Excellent success rate on most websites"),(0,n.yg)("li",{parentName:"ul"},"Handles both static and dynamic content"),(0,n.yg)("li",{parentName:"ul"},"Built-in content cleaning and formatting"),(0,n.yg)("li",{parentName:"ul"},"Fast response times through Tavily's distributed infrastructure")),(0,n.yg)("p",null,"Setup:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Create a Tavily account at ",(0,n.yg)("a",{parentName:"li",href:"https://app.tavily.com"},"app.tavily.com")),(0,n.yg)("li",{parentName:"ol"},"Get your API key from the dashboard"),(0,n.yg)("li",{parentName:"ol"},"Install the Tavily Python SDK:",(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"pip install tavily-python\n"))),(0,n.yg)("li",{parentName:"ol"},"Set your Tavily API key:",(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-bash"},'export TAVILY_API_KEY="your-api-key"\n')))),(0,n.yg)("p",null,"Usage Considerations:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Requires a Tavily API key and account"),(0,n.yg)("li",{parentName:"ul"},"API calls are metered based on your Tavily plan"),(0,n.yg)("li",{parentName:"ul"},"Best for production environments where reliability is crucial"),(0,n.yg)("li",{parentName:"ul"},"Ideal for businesses and applications that need consistent scraping results")),(0,n.yg)("h2",{id:"additional-setup-for-selenium"},"Additional Setup for Selenium"),(0,n.yg)("p",null,'If you choose to use Selenium (SCRAPER="browser"), you\'ll need to:'),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Install the Selenium package:"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"pip install selenium\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Download the appropriate WebDriver for your browser:"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"For Chrome: ",(0,n.yg)("a",{parentName:"li",href:"https://sites.google.com/a/chromium.org/chromedriver/downloads"},"ChromeDriver")),(0,n.yg)("li",{parentName:"ul"},"For Firefox: ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/mozilla/geckodriver/releases"},"GeckoDriver")),(0,n.yg)("li",{parentName:"ul"},"For Safari: Built-in, no download required")),(0,n.yg)("p",{parentName:"li"},"Ensure the WebDriver is in your system's PATH."))),(0,n.yg)("h2",{id:"choosing-the-right-method"},"Choosing the Right Method"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Use BeautifulSoup (static) for:"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Simple websites with mostly static content"),(0,n.yg)("li",{parentName:"ul"},"Scenarios where speed is a priority"),(0,n.yg)("li",{parentName:"ul"},"When you don't need to interact with the page"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Use Selenium (dynamic) for:"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Websites with content loaded via JavaScript"),(0,n.yg)("li",{parentName:"ul"},"Sites that require scrolling or clicking to load more content"),(0,n.yg)("li",{parentName:"ul"},"When you need to simulate user interactions")))),(0,n.yg)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"If Selenium fails to start, ensure you have the correct WebDriver installed and it's in your system's PATH."),(0,n.yg)("li",{parentName:"ul"},"If you encounter an ",(0,n.yg)("inlineCode",{parentName:"li"},"ImportError")," related to Selenium, make sure you've installed the Selenium package."),(0,n.yg)("li",{parentName:"ul"},"If the scraper misses expected content, try switching between static and dynamic scraping to see which works better for your target website.")),(0,n.yg)("p",null,"Remember, the choice between static and dynamic scraping can significantly impact the quality and completeness of the data GPT Researcher can gather. Choose the method that best suits your research needs and the websites you're targeting."))}u.isMDXComponent=!0}}]);