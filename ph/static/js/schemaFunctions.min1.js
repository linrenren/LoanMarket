function schemaLoad(h,g,f,b,d){window.schema_highlighter=window.schema_highlighter!==undefined?window.schema_highlighter:{accountId:h,key:g,stripUrls:f===undefined?true:f,testMode:b,fetchFromHighlightJsCache:d,output:true};const k=new Set(["Brother","KaplanNorthAmericaLLC","Aetna/AetnaMedicare"]);if(window.schema_highlighter!==undefined&&!k.has(window.schema_highlighter.accountId&&window.schema_highlighter.accountId.startsWith("SonovaAG"))&&window.schema_highlighter.fetchFromHighlightJsCache){window.schema_highlighter.fetchFromHighlightJsCache=false}if(window.schema_highlighter.accountId===undefined&&h===undefined){return}else{if(window.schema_highlighter.accountId===undefined&&h!==undefined){window.schema_highlighter.accountId=h;window.schema_highlighter.key=g;window.schema_highlighter.stripUrls=f===undefined?true:f;window.schema_highlighter.testMode=b;window.schema_highlighter.fetchFromHighlightJsCache=d;window.schema_highlighter.output=true}}var e="https://data.schemaapp.com/"+window.schema_highlighter.accountId+"/";if(window.schema_highlighter.testMode===true){e="https://datatst.schemaapp.com/"+window.schema_highlighter.accountId+"/"}var j=new XMLHttpRequest();var c=btoa(unescape(window.location.href)).replace(/=/g,"");if(window.schema_highlighter.stripUrls===true||window.schema_highlighter.stripUrls==="strip_search"||window.schema_highlighter.stripUrls===undefined){c=btoa(unescape(window.location.href.replace(window.location.search,""))).replace(/=/g,"")}var i=function(){if(this.responseText!==""&&this.responseText!==undefined){var l=document.createElement("script");l.type="application/ld+json";l.innerHTML=this.responseText;document.getElementsByTagName("head")[0].appendChild(l)}};j.onload=i;j.open("GET",e+c,true);j.setRequestHeader("x-api-key",window.schema_highlighter.key);j.send();if(window.schema_highlighter.fetchFromHighlightJsCache===true){var a=new XMLHttpRequest();a.onload=i;a.open("GET","https://aetna.schemaapp.com/"+window.schema_highlighter.accountId+"/__highlighter_js/"+c);a.setRequestHeader("x-api-key",window.schema_highlighter.key);a.send()}}schemaLoad();