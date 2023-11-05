(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[818],{8781:(e,t,o)=>{e.exports={src:{srcSet:o.p+"assets/ideal-img/gcp_marker.950a2f5.640.png 640w,"+o.p+"assets/ideal-img/gcp_marker.c8f5984.1024.png 1024w",images:[{path:o.p+"assets/ideal-img/gcp_marker.950a2f5.640.png",width:640,height:283},{path:o.p+"assets/ideal-img/gcp_marker.c8f5984.1024.png",width:1024,height:453}],src:o.p+"assets/ideal-img/gcp_marker.950a2f5.640.png",toString:function(){return o.p+"assets/ideal-img/gcp_marker.950a2f5.640.png"},placeholder:void 0,width:640,height:283},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAECAYAAAC3OK7NAAAACXBIWXMAAFGCAABRggFYdP86AAAAlElEQVR4nD3KPQrCMACG4XeoaEEcOhUsdHR0c/EWGQSvIPQQrm5WJ4cMoSfJz9pAzxBygW4ukQj6Le/wPQAFQFmWDdD0fX+w1t611s9xHB/GGJH/vB3Q1nXdAotpmk4ppRRjfOeGEIYfXALrruty0Vqf53lO3vsvjDH+YVFV1VYIcQRWSqm9c+7mvb8aY15Syguw+QBPWkE1RVAJ0wAAAABJRU5ErkJggg=="}},7290:(e,t,o)=>{e.exports={src:{srcSet:o.p+"assets/ideal-img/ground_control_point_marker.c8b64be.640.jpg 640w,"+o.p+"assets/ideal-img/ground_control_point_marker.3374ede.1024.jpg 1024w",images:[{path:o.p+"assets/ideal-img/ground_control_point_marker.c8b64be.640.jpg",width:640,height:540},{path:o.p+"assets/ideal-img/ground_control_point_marker.3374ede.1024.jpg",width:1024,height:865}],src:o.p+"assets/ideal-img/ground_control_point_marker.c8b64be.640.jpg",toString:function(){return o.p+"assets/ideal-img/ground_control_point_marker.c8b64be.640.jpg"},placeholder:void 0,width:640,height:540},preSrc:"data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAQG/8QAHhABAAEDBQEAAAAAAAAAAAAAAQIAAxEEBRIhMWH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABcRAQADAAAAAAAAAAAAAAAAAAABESH/2gAMAwEAAhEDEQA/AMNsmiu6WS3pZlJww84uPH7VrLkslvi9oPVKVKIx/9k="}},8480:(e,t,o)=>{"use strict";o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>g});var s=o(5893),r=o(1151),n=o(2986);const a={},i="Getting GCPs (optional)",c={id:"getting-started/getting-ground-control-points",title:"Getting GCPs (optional)",description:"It's highly recommended to use Ground Control Points (GCPs) if your images are not georeferenced. When images are not georeferenced, not using GCPs will cause your models to be improperly oriented and scaled.",source:"@site/docs/01-getting-started/02-getting-ground-control-points.md",sourceDirName:"01-getting-started",slug:"/getting-started/getting-ground-control-points",permalink:"/getting-started/getting-ground-control-points",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Image Capture",permalink:"/getting-started/image-capture"},next:{title:"Creating a Task",permalink:"/getting-started/creating-a-task"}},l={},g=[{value:"Field Measuring",id:"field-measuring",level:2},{value:"Other Sources",id:"other-sources",level:2},{value:"Create a gcp_list.txt",id:"create-a-gcp_listtxt",level:2}];function d(e){const t=Object.assign({h1:"h1",admonition:"admonition",p:"p",sup:"sup",a:"a",h2:"h2",ul:"ul",li:"li",strong:"strong",code:"code",section:"section",ol:"ol"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"getting-gcps-optional",children:"Getting GCPs (optional)"}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"It's highly recommended to use Ground Control Points (GCPs) if your images are not georeferenced. When images are not georeferenced, not using GCPs will cause your models to be improperly oriented and scaled."})}),"\n",(0,s.jsxs)(t.p,{children:["A ground control point is a precise position measurement taken on the ground, often using high-accuracy GPS",(0,s.jsx)(t.sup,{children:(0,s.jsx)(t.a,{href:"#user-content-fn-gps",id:"user-content-fnref-gps","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),". These measurements are typically collected near easily recognizable features like street corners or by positioning visible markers on the terrain."]}),"\n",(0,s.jsx)(n.Z,{img:o(7290),alt:"A ground control point marker. Image courtesy of Michele M. Tobias & Alex Mandel CC BY-SA 4.0",padded:!0,smooth:!0}),"\n",(0,s.jsx)(t.p,{children:"Images containing visible markers can be tagged by establishing a mapping between the image location of the markers and their real-world positions."}),"\n",(0,s.jsx)(n.Z,{img:o(8781),alt:"A GCP marker is photographed by camera A to produce Image A. In a second step, the pixel location of the marker (1500,1000) from Image A can be manually tagged with its real world coordinates (latitude 40, longitude -85)",padded:!0}),"\n",(0,s.jsx)(t.p,{children:"The recommended number of ground control points typically ranges from 5 to 8, evenly distributed across the surveyed area. Using more than 8 ground control points doesn't necessarily improve accuracy."}),"\n",(0,s.jsx)(t.p,{children:"When the same marker is visible in multiple images, it should be tagged in each of those images. Ideally, each marker should be tagged at least 3 times. This means a marker should be captured in at least 3 images."}),"\n",(0,s.jsx)(t.p,{children:"You can also measure the GCP coordinates from other sources such as older maps of an area or LiDAR surveys."}),"\n",(0,s.jsx)(t.h2,{id:"field-measuring",children:"Field Measuring"}),"\n",(0,s.jsxs)(t.p,{children:["This requires the area to be accessible. You must take note of the coordinate system that you will be using to collect your measurements. We suggest to download a CSV template from the ",(0,s.jsx)(t.a,{href:"https://webodm.net/gcpeditor",children:"GCP Interface"})," for recording your measurements."]}),"\n",(0,s.jsx)(t.p,{children:"After placing your targets evenly across the area (preferably not at the edges), record their location using a GPS device."}),"\n",(0,s.jsx)(t.h2,{id:"other-sources",children:"Other Sources"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"High accuracy sources include existing maps of the same area."}),"\n",(0,s.jsx)(t.li,{children:"From a basemap (e.g. Google Maps). The accuracy of these points might not be very good, but they can still be useful if the images in your project lack georeferencing. These can also be useful if the goal is to align the results perfectly with the basemap."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["To create GCPs from basemaps, the ",(0,s.jsx)(t.a,{href:"https://webodm.net/gcpeditor",children:"GCP Interface"})," has a function that lets you select points on a map. You can access this function by clicking the ",(0,s.jsx)(t.strong,{children:"Create GCP File From Map"})," button."]}),"\n",(0,s.jsx)(t.h2,{id:"create-a-gcp_listtxt",children:"Create a gcp_list.txt"}),"\n",(0,s.jsxs)(t.p,{children:["After you've measured your GCP targets, read ",(0,s.jsx)(t.a,{href:"/how-to/ground-control-points",children:"How To Use Ground Control Points"})," to create a ",(0,s.jsx)(t.code,{children:"gcp_list.txt"})," file which will be used for processing."]}),"\n",(0,s.jsxs)(t.section,{"data-footnotes":!0,className:"footnotes",children:[(0,s.jsx)(t.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{id:"user-content-fn-gps",children:["\n",(0,s.jsxs)(t.p,{children:["We loosely use GPS as a synonym for GNSS. ",(0,s.jsx)(t.a,{href:"#user-content-fnref-gps","data-footnote-backref":!0,className:"data-footnote-backref","aria-label":"Back to content",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}}}]);