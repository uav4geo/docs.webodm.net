"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[734],{8584:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>n,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=i(5893),t=i(1151);i(2986);const r={description:"How to process video files"},n="Process Video Files",a={id:"how-to/process-video-files",title:"Process Video Files",description:"How to process video files",source:"@site/docs/02-how-to/15-process-video-files.md",sourceDirName:"02-how-to",slug:"/how-to/process-video-files",permalink:"/how-to/process-video-files",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:15,frontMatter:{description:"How to process video files"},sidebar:"tutorialSidebar",previous:{title:"Swipe Compare Layers",permalink:"/how-to/swipe-compare-layers"},next:{title:"Process Thermal Images",permalink:"/how-to/process-thermal-images"}},l={},c=[{value:"Georeferencing",id:"georeferencing",level:2},{value:"Notes on Quality",id:"notes-on-quality",level:2}];function d(e){const s=Object.assign({h1:"h1",p:"p",a:"a",strong:"strong",h2:"h2",admonition:"admonition",code:"code"},(0,t.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{id:"process-video-files",children:"Process Video Files"}),"\n",(0,o.jsxs)(s.p,{children:["WebODM Lightning can process videos in .mp4, .mov, .lrv and .ts format. From the ",(0,o.jsx)(s.a,{href:"https://webodm.net/cloud",children:"cloud interface"}),", click the ",(0,o.jsx)(s.strong,{children:"Select Images and GCP"})," and select your video files.  During processing, the software will select and extract frames at regular intervals according the ",(0,o.jsx)(s.a,{href:"/references/task-options#video-limit",children:"video-limit"})," and ",(0,o.jsx)(s.a,{href:"/references/task-options#video-resolution",children:"video-resolution"})," processing options."]}),"\n",(0,o.jsx)(s.h2,{id:"georeferencing",children:"Georeferencing"}),"\n",(0,o.jsxs)(s.p,{children:["If you include a subtitle (.srt) file with georeferencing information with the same filename as the video file, the software can apply georeferencing to the result. For example, if you have a video file named ",(0,o.jsx)(s.strong,{children:"video.mp4"}),", include a ",(0,o.jsx)(s.strong,{children:"video.srt"})," file to apply georeferencing."]}),"\n",(0,o.jsx)(s.admonition,{type:"tip",children:(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"https://ffmpeg.org/",children:"ffmpeg"})," is a utility you can use to extract a .srt file from a .mp4 if the subtitle information is encoded inside the video file. ",(0,o.jsx)(s.code,{children:"ffmpeg -i video.mp4 -o video.srt"}),"."]})}),"\n",(0,o.jsx)(s.h2,{id:"notes-on-quality",children:"Notes on Quality"}),"\n",(0,o.jsxs)(s.p,{children:["For highest quality results, it's always preferrable to process normal images rather than video files. Frames extracted from video often exhibit motion blur. The software has mechanisms to filter out blurred frames, but using normal images will typically lead to better results. See also ",(0,o.jsx)(s.a,{href:"/references/create-successful-maps",children:"Create Successful Maps"}),"."]})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,t.ah)(),e.components);return s?(0,o.jsx)(s,Object.assign({},e,{children:(0,o.jsx)(d,e)})):d(e)}}}]);