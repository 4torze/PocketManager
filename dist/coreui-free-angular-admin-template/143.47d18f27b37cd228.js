"use strict";(self.webpackChunkcoreui_free_angular_admin_template=self.webpackChunkcoreui_free_angular_admin_template||[]).push([[143],{1445:(Q,h,c)=>{c.d(h,{Z:()=>t});const t=(d,m=document.body)=>{let l;return l=(d=>d.match(/^--.*/i))(d)&&Boolean(document.documentMode)&&document.documentMode>=10?(()=>{const d={},m=document.styleSheets;let l="";for(let g=m.length-1;g>-1;g--){const _=m[g].cssRules;for(let f=_.length-1;f>-1;f--)if(".ie-custom-properties"===_[f].selectorText){l=_[f].cssText;break}if(l)break}return l=l.substring(l.lastIndexOf("{")+1,l.lastIndexOf("}")),l.split(";").forEach(g=>{if(g){const _=g.split(": ")[0],f=g.split(": ")[1];_&&f&&(d[`--${_.trim()}`]=f.trim())}}),d})()[d]:window.getComputedStyle(m,null).getPropertyValue(d).replace(/^\s/,""),l}},8747:(Q,h,c)=>{c.d(h,{O:()=>d});var o=c(4650),e=c(6895),Z=c(2554),u=c(1334),T=c(7834);function x(m,l){if(1&m&&(o.O4$(),o.kcU(),o.ynx(0),o.TgZ(1,"c-chart",5,6),o._uU(3),o.qZA(),o.BQk()),2&m){const g=o.MAs(2),_=o.oxw().$implicit,f=o.oxw();o.xp6(1),o.Q6J("data",_.data)("options",f.chartOptions),o.xp6(2),o.Oqu(g.id)}}function t(m,l){if(1&m&&(o.TgZ(0,"c-col",1)(1,"c-widget-stat-d",2),o.O4$(),o._UZ(2,"svg",3),o.YNc(3,x,4,3,"ng-container",4),o.qZA()()),2&m){const g=l.$implicit,_=o.oxw();let f,v;o.xp6(1),o.Akn(null!==(f=g.capBg)&&void 0!==f?f:null),o.Q6J("color",null!==(v=g.color)&&void 0!==v?v:"")("values",g.values),o.xp6(1),o.Q6J("name",g.icon),o.xp6(1),o.Q6J("ngIf",_.withCharts)}}class d{constructor(l){this.changeDetectorRef=l,this.chartOptions={elements:{line:{tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}},maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{display:!1},y:{display:!1}}},this.labels=["January","February","March","April","May","June","July"],this.datasets={borderWidth:2,fill:!0},this.colors={backgroundColor:"rgba(255,255,255,.1)",borderColor:"rgba(255,255,255,.55)",pointHoverBackgroundColor:"#fff"},this.brandData=[{icon:"cibFacebook",values:[{title:"friends",value:"89K"},{title:"feeds",value:"459"}],capBg:{"--cui-card-cap-bg":"#3b5998"},labels:[...this.labels],data:{labels:[...this.labels],datasets:[{...this.datasets,data:[65,59,84,84,51,55,40],label:"Facebook",...this.colors}]}},{icon:"cibTwitter",values:[{title:"followers",value:"973k"},{title:"tweets",value:"1.792"}],capBg:{"--cui-card-cap-bg":"#00aced"},data:{labels:[...this.labels],datasets:[{...this.datasets,data:[1,13,9,17,34,41,38],label:"Twitter",...this.colors}]}},{icon:"cib-linkedin",values:[{title:"contacts",value:"500"},{title:"feeds",value:"1.292"}],capBg:{"--cui-card-cap-bg":"#4875b4"},data:{labels:[...this.labels],datasets:[{...this.datasets,data:[78,81,80,45,34,12,40],label:"LinkedIn",...this.colors}]}},{icon:"cilCalendar",values:[{title:"events",value:"12+"},{title:"meetings",value:"4"}],color:"warning",data:{labels:[...this.labels],datasets:[{...this.datasets,data:[35,23,56,22,97,23,64],label:"Events",...this.colors}]}}]}capStyle(l){return l?{"--cui-card-cap-bg":l}:{}}ngAfterContentInit(){this.changeDetectorRef.detectChanges()}}d.\u0275fac=function(l){return new(l||d)(o.Y36(o.sBO))},d.\u0275cmp=o.Xpm({type:d,selectors:[["app-widgets-brand"]],inputs:{withCharts:"withCharts"},decls:2,vars:1,consts:[["sm","6","xl","3",4,"ngFor","ngForOf"],["sm","6","xl","3"],[1,"mb-4",3,"color","values"],["cIcon","","height","52",1,"my-4","text-white",3,"name"],[4,"ngIf"],["type","line",1,"position-absolute","w-100","h-100",3,"data","options"],["chart","cChart"]],template:function(l,g){1&l&&(o.TgZ(0,"c-row"),o.YNc(1,t,4,6,"c-col",0),o.qZA()),2&l&&(o.xp6(1),o.Q6J("ngForOf",g.brandData))},dependencies:[e.sg,e.O5,Z.iok,Z.Yp0,Z.efQ,u.ar,T.d]})},5792:(Q,h,c)=>{c.d(h,{c:()=>b});var o=c(1445),e=c(4650),Z=c(5263),u=c(2554),T=c(1334),x=c(7834);function t(s,i){1&s&&(e._uU(0,"\n        26K\n        "),e.TgZ(1,"span",8),e._uU(2,"\n          (-12.4% "),e.O4$(),e._UZ(3,"svg",9),e._uU(4,")\n        "),e.qZA(),e._uU(5,"\n      "))}function d(s,i){1&s&&(e.TgZ(0,"c-dropdown",10)(1,"button",11),e.O4$(),e._UZ(2,"svg",12),e.qZA(),e.kcU(),e.TgZ(3,"ul",13)(4,"li")(5,"a",14),e._uU(6,"Action"),e.qZA()(),e.TgZ(7,"li")(8,"a",14),e._uU(9,"Another action"),e.qZA()(),e.TgZ(10,"li")(11,"a",14),e._uU(12,"Something else here"),e.qZA()(),e.TgZ(13,"li"),e._UZ(14,"hr",15),e.qZA(),e.TgZ(15,"li")(16,"button",16),e._uU(17,"Separated link"),e.qZA()()()()),2&s&&(e.xp6(1),e.Q6J("caret",!1))}function m(s,i){if(1&s&&e._UZ(0,"c-chart",17),2&s){const r=e.oxw();e.Q6J("data",r.data[0])("options",r.options[0])}}function l(s,i){1&s&&(e._uU(0,"\n        "),e.TgZ(1,"span"),e._uU(2,"$6.200"),e.qZA(),e._uU(3,"\n        "),e.TgZ(4,"span",8),e._uU(5,"\n          (40.9% "),e.O4$(),e._UZ(6,"svg",18),e._uU(7,")\n        "),e.qZA(),e._uU(8,"\n      "))}function g(s,i){1&s&&(e.TgZ(0,"c-dropdown",10)(1,"button",11),e.O4$(),e._UZ(2,"svg",12),e.qZA(),e.kcU(),e.TgZ(3,"ul",13)(4,"li")(5,"a",14),e._uU(6,"Action"),e.qZA()(),e.TgZ(7,"li")(8,"a",14),e._uU(9,"Another action"),e.qZA()(),e.TgZ(10,"li")(11,"a",14),e._uU(12,"Something else here"),e.qZA()(),e.TgZ(13,"li")(14,"a",19),e._uU(15,"Disabled"),e.qZA()()()()),2&s&&(e.xp6(1),e.Q6J("caret",!1),e.xp6(13),e.Q6J("disabled",!0))}function _(s,i){if(1&s&&e._UZ(0,"c-chart",17),2&s){const r=e.oxw();e.Q6J("data",r.data[1])("options",r.options[1])}}function f(s,i){1&s&&(e._uU(0,"\n        "),e.TgZ(1,"span"),e._uU(2,"2.49"),e.qZA(),e._uU(3,"\n        "),e.TgZ(4,"span",8),e._uU(5,"\n          (84.7% "),e.O4$(),e._UZ(6,"svg",18),e._uU(7,")\n        "),e.qZA(),e._uU(8,"\n      "))}function v(s,i){1&s&&(e.TgZ(0,"c-dropdown",10)(1,"button",11),e.O4$(),e._UZ(2,"svg",12),e.qZA(),e.kcU(),e.TgZ(3,"ul",13)(4,"li")(5,"a",14),e._uU(6,"Action"),e.qZA()(),e.TgZ(7,"li")(8,"a",14),e._uU(9,"Another action"),e.qZA()(),e.TgZ(10,"li")(11,"a",14),e._uU(12,"Something else here"),e.qZA()(),e.TgZ(13,"li")(14,"a",19),e._uU(15,"Disabled"),e.qZA()()()()),2&s&&(e.xp6(1),e.Q6J("caret",!1),e.xp6(13),e.Q6J("disabled",!0))}function y(s,i){if(1&s&&e._UZ(0,"c-chart",20),2&s){const r=e.oxw();e.Q6J("data",r.data[2])("options",r.options[2])}}function D(s,i){1&s&&(e._uU(0,"\n        "),e.TgZ(1,"span"),e._uU(2,"44K"),e.qZA(),e._uU(3,"\n        "),e.TgZ(4,"span",8),e._uU(5,"\n          (-23.6% "),e.O4$(),e._UZ(6,"svg",9),e._uU(7,")\n        "),e.qZA(),e._uU(8,"\n      "))}function q(s,i){1&s&&(e.TgZ(0,"c-dropdown",10)(1,"button",11),e.O4$(),e._UZ(2,"svg",12),e.qZA(),e.kcU(),e.TgZ(3,"ul",13)(4,"li")(5,"a",14),e._uU(6,"Action"),e.qZA()(),e.TgZ(7,"li")(8,"a",14),e._uU(9,"Another action"),e.qZA()(),e.TgZ(10,"li")(11,"a",14),e._uU(12,"Something else here"),e.qZA()(),e.TgZ(13,"li")(14,"a",19),e._uU(15,"Disabled"),e.qZA()()()()),2&s&&(e.xp6(1),e.Q6J("caret",!1),e.xp6(13),e.Q6J("disabled",!0))}function N(s,i){if(1&s&&e._UZ(0,"c-chart",21),2&s){const r=e.oxw();e.Q6J("data",r.data[3])("options",r.options[3])}}const Y=["chart"];class b{constructor(i){this.changeDetectorRef=i,this.data=[],this.options=[],this.labels=["January","February","March","April","May","June","July","August","September","October","November","December","January","February","March","April"],this.datasets=[[{label:"My First dataset",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.55)",pointBackgroundColor:(0,o.Z)("--cui-primary"),pointHoverBorderColor:(0,o.Z)("--cui-primary"),data:[65,59,84,84,51,55,40]}],[{label:"My Second dataset",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.55)",pointBackgroundColor:(0,o.Z)("--cui-info"),pointHoverBorderColor:(0,o.Z)("--cui-info"),data:[1,18,9,17,34,22,11]}],[{label:"My Third dataset",backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",pointBackgroundColor:(0,o.Z)("--cui-warning"),pointHoverBorderColor:(0,o.Z)("--cui-warning"),data:[78,81,80,45,34,12,40],fill:!0}],[{label:"My Fourth dataset",backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",data:[78,81,80,45,34,12,40,85,65,23,12,98,34,84,67,82],barPercentage:.7}]],this.optionsDefault={plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{grid:{display:!1,drawBorder:!1},ticks:{display:!1}},y:{min:30,max:89,display:!1,grid:{display:!1},ticks:{display:!1}}},elements:{line:{borderWidth:1,tension:.4},point:{radius:4,hitRadius:10,hoverRadius:4}}}}ngOnInit(){this.setData()}ngAfterContentInit(){this.changeDetectorRef.detectChanges()}setData(){for(let i=0;i<4;i++)this.data[i]={labels:i<3?this.labels.slice(0,7):this.labels,datasets:this.datasets[i]};this.setOptions()}setOptions(){for(let i=0;i<4;i++){const r=JSON.parse(JSON.stringify(this.optionsDefault));switch(i){case 0:this.options.push(r);break;case 1:r.scales.y.min=-9,r.scales.y.max=39,this.options.push(r);break;case 2:r.scales.x={display:!1},r.scales.y={display:!1},r.elements.line.borderWidth=2,r.elements.point.radius=0,this.options.push(r);break;case 3:r.scales.x.grid={display:!1,drawTicks:!1},r.scales.x.grid={display:!1,drawTicks:!1,drawBorder:!1},r.scales.y.min=void 0,r.scales.y.max=void 0,r.elements={},this.options.push(r)}}}}b.\u0275fac=function(i){return new(i||b)(e.Y36(e.sBO))},b.\u0275cmp=e.Xpm({type:b,selectors:[["app-widgets-dropdown"]],decls:21,vars:3,consts:[["sm","6","xl","3"],["color","primary","title","Users",1,"mb-4"],["cTemplateId","widgetValueTemplate"],["cTemplateId","widgetActionTemplate"],["cTemplateId","widgetChartTemplate"],["color","info",1,"mb-4",3,"title"],["color","warning",1,"mb-4",3,"title"],["color","danger",1,"mb-4",3,"title"],[1,"fs-6","fw-normal"],["cIcon","","name","cilArrowBottom"],["alignment","end","variant","btn-group"],["cButton","","cDropdownToggle","","color","transparent",1,"p-0",3,"caret"],["cIcon","","name","cilOptions",1,"text-high-emphasis-inverse"],["cDropdownMenu",""],["routerLink","./","cDropdownItem",""],["cDropdownDivider",""],["cDropdownItem",""],["height","70","type","line",1,"mt-3","mx-3",3,"data","options"],["cIcon","","name","cilArrowTop"],["routerLink","./","cDropdownItem","",3,"disabled"],["height","70","type","line",1,"mt-3",3,"data","options"],["height","70","type","bar",1,"mt-3","mx-3",3,"data","options"]],template:function(i,r){1&i&&(e.TgZ(0,"c-row")(1,"c-col",0)(2,"c-widget-stat-a",1),e.YNc(3,t,6,0,"ng-template",2),e.YNc(4,d,18,1,"ng-template",3),e.YNc(5,m,1,2,"ng-template",4),e.qZA()(),e.TgZ(6,"c-col",0)(7,"c-widget-stat-a",5),e.YNc(8,l,9,0,"ng-template",2),e.YNc(9,g,16,2,"ng-template",3),e.YNc(10,_,1,2,"ng-template",4),e.qZA()(),e.TgZ(11,"c-col",0)(12,"c-widget-stat-a",6),e.YNc(13,f,9,0,"ng-template",2),e.YNc(14,v,16,2,"ng-template",3),e.YNc(15,y,1,2,"ng-template",4),e.qZA()(),e.TgZ(16,"c-col",0)(17,"c-widget-stat-a",7),e.YNc(18,D,9,0,"ng-template",2),e.YNc(19,q,16,2,"ng-template",3),e.YNc(20,N,1,2,"ng-template",4),e.qZA()()()),2&i&&(e.xp6(7),e.Q6J("title","Income"),e.xp6(5),e.Q6J("title","Conversion Rate"),e.xp6(5),e.Q6J("title","Sessions"))},dependencies:[Z.rH,u.iok,u.Yp0,u.Eqf,T.ar,u.JOL,u.GY_,u.HH4,u.RUe,u.bQk,u.y1J,u.Hq3,x.d]});class C{constructor(){this.colors={label:"My dataset",backgroundColor:"rgba(77,189,116,.2)",borderColor:"#4dbd74",pointHoverBackgroundColor:"#fff"},this.labels=["Mo","Tu","We","Th","Fr","Sa","Su"],this.data={labels:this.labels,datasets:[{data:[65,59,84,84,51,55,40],...this.colors,fill:{value:65}}]},this.options={maintainAspectRatio:!1,plugins:{legend:{display:!1}},elements:{line:{tension:.4}}}}ngAfterViewInit(){setTimeout(()=>{const I=this.chartComponent?.chart?.data.datasets.length;console.log("before",I),this.data={...this.data,datasets:[{...this.data.datasets[0],data:[42,88,42,66,77]},{...this.data.datasets[0],borderColor:"#ffbd47",data:[88,42,66,77,42]}],labels:["Jan","Feb","Mar","Apr","May"]},setTimeout(()=>{const M=this.chartComponent?.chart?.data.datasets.length;console.log("after",M)})},5e3)}}C.\u0275fac=function(i){return new(i||C)},C.\u0275cmp=e.Xpm({type:C,selectors:[["app-chart-sample"]],viewQuery:function(i,r){if(1&i&&e.Gf(Y,5),2&i){let A;e.iGM(A=e.CRH())&&(r.chartComponent=A.first)}},decls:2,vars:2,consts:[["type","line","width","300",3,"data","options"],["chart",""]],template:function(i,r){1&i&&e._UZ(0,"c-chart",0,1),2&i&&e.Q6J("data",r.data)("options",r.options)},dependencies:[x.d],encapsulation:2})},7143:(Q,h,c)=>{c.r(h),c.d(h,{WidgetsModule:()=>W});var o=c(6895),e=c(2554),Z=c(1334),u=c(7834),T=c(7642),x=c(5263),t=c(4650),d=c(2592),m=c(8747),l=c(5792),g=c(1445);class _{constructor(n){this.changeDetectorRef=n,this.datasets=[],this.labels=[],this.data=[],this.barOptions={maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{display:!1},y:{display:!1}}},this.lineOptions={maintainAspectRatio:!1,elements:{line:{tension:.4},point:{radius:0}},plugins:{legend:{display:!1}},scales:{x:{display:!1},y:{display:!1}}},this.prepareLabels(),this.prepareDatasets(),this.prepareData()}get random(){return Math.floor(61*Math.random()+40)}get randomData(){const n=[];for(let p=0;p<15;p++)n.push(this.random);return n}get baseDatasets(){return[{data:this.randomData,barThickness:"flex",borderColor:"transparent",backgroundColor:"transparent",borderWidth:1}]}ngAfterContentInit(){this.changeDetectorRef.detectChanges()}prepareData(){for(let n=0;n<6;n++)this.data.push({labels:this.labels,datasets:this.datasets[n]})}prepareLabels(){for(let n=0;n<15;n++)this.labels.push(this.getDayName(n))}prepareDatasets(){const n=[{backgroundColor:"danger"},{backgroundColor:"primary"},{backgroundColor:"dark"},{borderColor:"danger",borderWidth:2},{borderColor:"success",borderWidth:2},{borderColor:"info",borderWidth:2}];for(let p=0;p<6;p++)this.datasets.push(this.getDataset(n[p]))}getDataset({backgroundColor:n="transparent",borderColor:p="transparent",borderWidth:w=1}){const J=this.baseDatasets;return J[0].backgroundColor="transparent"!==n?(0,g.Z)(`--cui-${n}`):n,J[0].borderColor="transparent"!==p?(0,g.Z)(`--cui-${p}`):p,J[0].borderWidth=w,J}getDayName(n=0){const p=navigator.language??navigator.userLanguage??navigator.systemLanguage??navigator.browserLanguage??"en-US",w=new Date(Date.UTC(2e3,1,0));return w.setDate(w.getDate()+n),w.toLocaleDateString(p,{weekday:"short"})}}function f(a,n){1&a&&(t.O4$(),t._UZ(0,"svg",58))}function v(a,n){1&a&&(t.O4$(),t._UZ(0,"svg",59))}function y(a,n){1&a&&(t.O4$(),t._UZ(0,"svg",60))}function D(a,n){1&a&&(t.O4$(),t._UZ(0,"svg",61))}function q(a,n){1&a&&(t.O4$(),t._UZ(0,"svg",58))}function N(a,n){1&a&&(t.TgZ(0,"a",62),t._uU(1," View more "),t.O4$(),t._UZ(2,"svg",63),t.qZA())}function Y(a,n){1&a&&(t.O4$(),t._UZ(0,"svg",59))}function b(a,n){1&a&&(t.TgZ(0,"a",62),t._uU(1," View more "),t.O4$(),t._UZ(2,"svg",63),t.qZA())}function C(a,n){1&a&&(t.O4$(),t._UZ(0,"svg",60))}function s(a,n){1&a&&(t.TgZ(0,"a",62),t._uU(1," View more "),t.O4$(),t._UZ(2,"svg",63),t.qZA())}function i(a,n){1&a&&(t.O4$(),t._UZ(0,"svg",61))}function r(a,n){1&a&&(t.TgZ(0,"a",62),t._uU(1," View more "),t.O4$(),t._UZ(2,"svg",63),t.qZA())}function A(a,n){1&a&&(t.O4$(),t._UZ(0,"svg",58))}function $(a,n){1&a&&(t.O4$(),t._UZ(0,"svg",59))}function B(a,n){1&a&&(t.O4$(),t._UZ(0,"svg",60))}function I(a,n){1&a&&(t.O4$(),t._UZ(0,"svg",61))}function M(a,n){1&a&&(t.O4$(),t._UZ(0,"svg",64))}function E(a,n){1&a&&(t.TgZ(0,"c-progress",65),t._UZ(1,"c-progress-bar",8),t.qZA()),2&a&&(t.xp6(1),t.Q6J("value",75))}function P(a,n){1&a&&(t.O4$(),t._UZ(0,"svg",66))}function R(a,n){1&a&&(t.TgZ(0,"c-progress",65),t._UZ(1,"c-progress-bar",6),t.qZA()),2&a&&(t.xp6(1),t.Q6J("value",75))}function k(a,n){1&a&&(t.O4$(),t._UZ(0,"svg",67))}function L(a,n){1&a&&(t.TgZ(0,"c-progress",65),t._UZ(1,"c-progress-bar",10),t.qZA()),2&a&&(t.xp6(1),t.Q6J("value",75))}function S(a,n){1&a&&(t.O4$(),t._UZ(0,"svg",68))}function F(a,n){1&a&&(t.TgZ(0,"c-progress",65),t._UZ(1,"c-progress-bar",12),t.qZA()),2&a&&(t.xp6(1),t.Q6J("value",75))}function K(a,n){1&a&&(t.O4$(),t._UZ(0,"svg",69))}function V(a,n){1&a&&(t.TgZ(0,"c-progress",65),t._UZ(1,"c-progress-bar",70),t.qZA()),2&a&&(t.xp6(1),t.Q6J("value",75))}function H(a,n){1&a&&(t.O4$(),t._UZ(0,"svg",64))}function z(a,n){1&a&&(t.TgZ(0,"c-progress",65),t._UZ(1,"c-progress-bar",8),t.qZA()),2&a&&(t.xp6(1),t.Q6J("value",75))}function j(a,n){1&a&&(t.O4$(),t._UZ(0,"svg",66))}function X(a,n){1&a&&(t.TgZ(0,"c-progress",65),t._UZ(1,"c-progress-bar",6),t.qZA()),2&a&&(t.xp6(1),t.Q6J("value",75))}function G(a,n){1&a&&(t.O4$(),t._UZ(0,"svg",67))}function tt(a,n){1&a&&(t.TgZ(0,"c-progress",65),t._UZ(1,"c-progress-bar",10),t.qZA()),2&a&&(t.xp6(1),t.Q6J("value",75))}function et(a,n){1&a&&(t.O4$(),t._UZ(0,"svg",68))}function at(a,n){1&a&&(t.TgZ(0,"c-progress",65),t._UZ(1,"c-progress-bar",12),t.qZA()),2&a&&(t.xp6(1),t.Q6J("value",75))}function nt(a,n){1&a&&(t.O4$(),t._UZ(0,"svg",69))}function ot(a,n){1&a&&(t.TgZ(0,"c-progress",65),t._UZ(1,"c-progress-bar",70),t.qZA()),2&a&&(t.xp6(1),t.Q6J("value",75))}function st(a,n){1&a&&(t.O4$(),t._UZ(0,"svg",71))}function it(a,n){1&a&&(t.TgZ(0,"c-progress",65),t._UZ(1,"c-progress-bar",72),t.qZA()),2&a&&(t.xp6(1),t.Q6J("value",75))}function ct(a,n){1&a&&(t.O4$(),t._UZ(0,"svg",64))}function lt(a,n){1&a&&(t.TgZ(0,"c-progress",73),t._UZ(1,"c-progress-bar",16),t.qZA()),2&a&&(t.xp6(1),t.Q6J("value",75))}function rt(a,n){1&a&&(t.O4$(),t._UZ(0,"svg",66))}function pt(a,n){1&a&&(t.TgZ(0,"c-progress",73),t._UZ(1,"c-progress-bar",16),t.qZA()),2&a&&(t.xp6(1),t.Q6J("value",75))}function gt(a,n){1&a&&(t.O4$(),t._UZ(0,"svg",67))}function dt(a,n){1&a&&(t.TgZ(0,"c-progress",73),t._UZ(1,"c-progress-bar",16),t.qZA()),2&a&&(t.xp6(1),t.Q6J("value",75))}function mt(a,n){1&a&&(t.O4$(),t._UZ(0,"svg",68))}function _t(a,n){1&a&&(t.TgZ(0,"c-progress",73),t._UZ(1,"c-progress-bar",16),t.qZA()),2&a&&(t.xp6(1),t.Q6J("value",75))}function ut(a,n){1&a&&(t.O4$(),t._UZ(0,"svg",69))}function ft(a,n){1&a&&(t.TgZ(0,"c-progress",73),t._UZ(1,"c-progress-bar",16),t.qZA()),2&a&&(t.xp6(1),t.Q6J("value",75))}function Zt(a,n){1&a&&(t.O4$(),t._UZ(0,"svg",71))}function ht(a,n){1&a&&(t.TgZ(0,"c-progress",73),t._UZ(1,"c-progress-bar",16),t.qZA()),2&a&&(t.xp6(1),t.Q6J("value",75))}_.\u0275fac=function(n){return new(n||_)(t.Y36(t.sBO))},_.\u0275cmp=t.Xpm({type:_,selectors:[["app-widgets-e"]],decls:19,vars:24,consts:[["lg","2","md","4"],[1,"mb-4",3,"title","value"],["height","40","width","80",1,"mx-auto",3,"data","options"],["height","40","type","line","width","80",1,"mx-auto",3,"data","options"]],template:function(n,p){1&n&&(t.TgZ(0,"c-row")(1,"c-col",0)(2,"c-widget-stat-e",1),t._UZ(3,"c-chart",2),t.qZA()(),t.TgZ(4,"c-col",0)(5,"c-widget-stat-e",1),t._UZ(6,"c-chart",2),t.qZA()(),t.TgZ(7,"c-col",0)(8,"c-widget-stat-e",1),t._UZ(9,"c-chart",2),t.qZA()(),t.TgZ(10,"c-col",0)(11,"c-widget-stat-e",1),t._UZ(12,"c-chart",3),t.qZA()(),t.TgZ(13,"c-col",0)(14,"c-widget-stat-e",1),t._UZ(15,"c-chart",3),t.qZA()(),t.TgZ(16,"c-col",0)(17,"c-widget-stat-e",1),t._UZ(18,"c-chart",3),t.qZA()()()),2&n&&(t.xp6(2),t.Q6J("title","title")("value","1,123"),t.xp6(1),t.Q6J("data",p.data[0])("options",p.barOptions),t.xp6(2),t.Q6J("title","title")("value","1,123"),t.xp6(1),t.Q6J("data",p.data[1])("options",p.barOptions),t.xp6(2),t.Q6J("title","title")("value","1,123"),t.xp6(1),t.Q6J("data",p.data[2])("options",p.barOptions),t.xp6(2),t.Q6J("title","title")("value","1,123"),t.xp6(1),t.Q6J("data",p.data[3])("options",p.lineOptions),t.xp6(2),t.Q6J("title","title")("value","1,123"),t.xp6(1),t.Q6J("data",p.data[4])("options",p.lineOptions),t.xp6(2),t.Q6J("title","title")("value","1,123"),t.xp6(1),t.Q6J("data",p.data[5])("options",p.lineOptions))},dependencies:[e.iok,e.Yp0,e.gDu,u.d]});class O{constructor(n){this.changeDetectorRef=n}ngAfterContentInit(){this.changeDetectorRef.detectChanges()}}O.\u0275fac=function(n){return new(n||O)(t.Y36(t.sBO))},O.\u0275cmp=t.Xpm({type:O,selectors:[["app-widgets"]],decls:167,vars:50,consts:[[1,"mb-4"],["href","components/"],["href","components/widgets/#cwidgetstatsb"],["lg","3","md","6","xs","12"],["text","Lorem ipsum dolor sit amet enim.","value","89.9%",1,"mb-4",3,"title"],["thin","",1,"my-2"],["color","success",3,"value"],["text","Lorem ipsum dolor sit amet enim.","value","12.124",1,"mb-4",3,"title"],["color","info",3,"value"],["text","Lorem ipsum dolor sit amet enim.","value","$98,111.00",1,"mb-4",3,"title"],["color","warning",3,"value"],["text","Lorem ipsum dolor sit amet enim.","value","2 TB",1,"mb-4",3,"title"],["color","primary",3,"value"],["color","success","inverse","","text","Lorem ipsum dolor sit amet enim.","value","89.9%",1,"mb-4",3,"title"],["widgetStatB1inv","cWidgetStatB"],["thin","",1,"my-2",3,"white"],[3,"value"],["color","info","inverse","","text","Lorem ipsum dolor sit amet enim.","value","12.124",1,"mb-4",3,"title"],["widgetStatB2inv","cWidgetStatB"],["color","warning","inverse","","text","Lorem ipsum dolor sit amet enim.","value","$98,111.00",1,"mb-4",3,"title"],["widgetStatB3inv","cWidgetStatB"],["color","primary","inverse","","text","Lorem ipsum dolor sit amet enim.","value","2 TB",1,"mb-4",3,"title"],["widgetStatB4inv","cWidgetStatB"],["href","components/widgets/#cwidgetstatse"],["href","components/widgets/#cwidgetstatsf"],["lg","3","sm","6","xs","12"],["color","primary","padding","","value","$1,999.50",1,"mb-3",3,"title"],["cTemplateId","widgetIconTemplate"],["color","info","padding","","value","$1,999.50",1,"mb-3",3,"title"],["color","warning","padding","","value","$1,999.50",1,"mb-3",3,"title"],["color","danger","padding","","value","$1,999.50",1,"mb-3",3,"title"],["cTemplateId","widgetFooterTemplate"],["color","primary","value","$1,999.50",1,"mb-3",3,"title"],["color","info","value","$1,999.50",1,"mb-3",3,"title"],["color","warning","value","$1,999.50",1,"mb-3",3,"title"],["color","danger","value","$1,999.50",1,"mb-3",3,"title"],["href","components/widgets/#cwidgetstatsd"],[3,"withCharts"],["href","components/widgets/#cwidgetstatsc"],["value","87,500",3,"title"],["cTemplateId","widgetProgressTemplate"],["value","385",3,"title"],["value","1238",3,"title"],["value","28%",3,"title"],["value","5:34:11",3,"title"],["md","2","sm","6"],["value","87,500",1,"mb-4",3,"title"],["value","385",1,"mb-4",3,"title"],["value","1238",1,"mb-4",3,"title"],["value","28%",1,"mb-4",3,"title"],["value","5:34:11",1,"mb-4",3,"title"],["value","972",1,"mb-4",3,"title"],["color","info","inverse","","value","87,500",1,"mb-4",3,"title"],["color","success","inverse","","value","385",1,"mb-4",3,"title"],["color","warning","inverse","","value","1238",1,"mb-4",3,"title"],["color","primary","inverse","","value","28%",1,"mb-4",3,"title"],["color","danger","inverse","","value","5:34:11",1,"mb-4",3,"title"],["color","dark","inverse","","value","972",1,"mb-4",3,"title"],["cIcon","","name","cilSettings","size","xl","width","24"],["cIcon","","name","cilUser","size","xl","width","24"],["cIcon","","name","cilMoon","size","xl","width","24"],["cIcon","","name","cilBell","size","xl","width","24"],["href","https://coreui.io/","rel","noopener norefferer","target","_blank",1,"font-weight-bold","font-xs","text-medium-emphasis"],["cIcon","","name","cilArrowRight","width","16",1,"float-end"],["cIcon","","height","36","name","cilPeople"],["thin","",1,"mt-3","mb-0"],["cIcon","","height","36","name","cilUserFollow"],["cIcon","","height","36","name","cilBasket"],["cIcon","","height","36","name","cilChartPie"],["cIcon","","height","36","name","cilSpeedometer"],["color","danger",3,"value"],["cIcon","","height","36","name","cilSpeech"],["color","dark",3,"value"],["thin","","white","",1,"mt-3","mb-0"]],template:function(n,p){if(1&n&&(t.TgZ(0,"c-card",0)(1,"c-card-header"),t._uU(2,"Widgets"),t.qZA(),t.TgZ(3,"c-card-body")(4,"app-docs-example",1),t._UZ(5,"app-widgets-dropdown"),t.qZA(),t.TgZ(6,"app-docs-example",2)(7,"c-row")(8,"c-col",3)(9,"c-widget-stat-b",4)(10,"c-progress",5),t._UZ(11,"c-progress-bar",6),t.qZA()()(),t.TgZ(12,"c-col",3)(13,"c-widget-stat-b",7)(14,"c-progress",5),t._UZ(15,"c-progress-bar",8),t.qZA()()(),t.TgZ(16,"c-col",3)(17,"c-widget-stat-b",9)(18,"c-progress",5),t._UZ(19,"c-progress-bar",10),t.qZA()()(),t.TgZ(20,"c-col",3)(21,"c-widget-stat-b",11)(22,"c-progress",5),t._UZ(23,"c-progress-bar",12),t.qZA()()()()(),t.TgZ(24,"app-docs-example",2)(25,"c-row")(26,"c-col",3)(27,"c-widget-stat-b",13,14)(29,"c-progress",15),t._UZ(30,"c-progress-bar",16),t.qZA()()(),t.TgZ(31,"c-col",3)(32,"c-widget-stat-b",17,18)(34,"c-progress",15),t._UZ(35,"c-progress-bar",16),t.qZA()()(),t.TgZ(36,"c-col",3)(37,"c-widget-stat-b",19,20)(39,"c-progress",15),t._UZ(40,"c-progress-bar",16),t.qZA()()(),t.TgZ(41,"c-col",3)(42,"c-widget-stat-b",21,22)(44,"c-progress",15),t._UZ(45,"c-progress-bar",16),t.qZA()()()()(),t.TgZ(46,"app-docs-example",23),t._UZ(47,"app-widgets-e"),t.qZA(),t.TgZ(48,"app-docs-example",24)(49,"c-row")(50,"c-col",25)(51,"c-widget-stat-f",26),t.YNc(52,f,1,0,"ng-template",27),t.qZA()(),t.TgZ(53,"c-col",25)(54,"c-widget-stat-f",28),t.YNc(55,v,1,0,"ng-template",27),t.qZA()(),t.TgZ(56,"c-col",25)(57,"c-widget-stat-f",29),t.YNc(58,y,1,0,"ng-template",27),t.qZA()(),t.TgZ(59,"c-col",25)(60,"c-widget-stat-f",30),t.YNc(61,D,1,0,"ng-template",27),t.qZA()()()(),t.TgZ(62,"app-docs-example",24)(63,"c-row")(64,"c-col",25)(65,"c-widget-stat-f",26),t.YNc(66,q,1,0,"ng-template",27),t.YNc(67,N,3,0,"ng-template",31),t.qZA()(),t.TgZ(68,"c-col",25)(69,"c-widget-stat-f",28),t.YNc(70,Y,1,0,"ng-template",27),t.YNc(71,b,3,0,"ng-template",31),t.qZA()(),t.TgZ(72,"c-col",25)(73,"c-widget-stat-f",29),t.YNc(74,C,1,0,"ng-template",27),t.YNc(75,s,3,0,"ng-template",31),t.qZA()(),t.TgZ(76,"c-col",25)(77,"c-widget-stat-f",30),t.YNc(78,i,1,0,"ng-template",27),t.YNc(79,r,3,0,"ng-template",31),t.qZA()()()(),t.TgZ(80,"app-docs-example",24)(81,"c-row")(82,"c-col",25)(83,"c-widget-stat-f",32),t.YNc(84,A,1,0,"ng-template",27),t.qZA()(),t.TgZ(85,"c-col",25)(86,"c-widget-stat-f",33),t.YNc(87,$,1,0,"ng-template",27),t.qZA()(),t.TgZ(88,"c-col",25)(89,"c-widget-stat-f",34),t.YNc(90,B,1,0,"ng-template",27),t.qZA()(),t.TgZ(91,"c-col",25)(92,"c-widget-stat-f",35),t.YNc(93,I,1,0,"ng-template",27),t.qZA()()()(),t.TgZ(94,"app-docs-example",36),t._UZ(95,"app-widgets-brand"),t.qZA(),t.TgZ(96,"app-docs-example",36),t._UZ(97,"app-widgets-brand",37),t.qZA(),t.TgZ(98,"app-docs-example",38)(99,"c-card-group",0)(100,"c-widget-stat-c",39),t.YNc(101,M,1,0,"ng-template",27),t.YNc(102,E,2,1,"ng-template",40),t.qZA(),t.TgZ(103,"c-widget-stat-c",41),t.YNc(104,P,1,0,"ng-template",27),t.YNc(105,R,2,1,"ng-template",40),t.qZA(),t.TgZ(106,"c-widget-stat-c",42),t.YNc(107,k,1,0,"ng-template",27),t.YNc(108,L,2,1,"ng-template",40),t.qZA(),t.TgZ(109,"c-widget-stat-c",43),t.YNc(110,S,1,0,"ng-template",27),t.YNc(111,F,2,1,"ng-template",40),t.qZA(),t.TgZ(112,"c-widget-stat-c",44),t.YNc(113,K,1,0,"ng-template",27),t.YNc(114,V,2,1,"ng-template",40),t.qZA()()(),t.TgZ(115,"app-docs-example",38)(116,"c-row")(117,"c-col",45)(118,"c-widget-stat-c",46),t.YNc(119,H,1,0,"ng-template",27),t.YNc(120,z,2,1,"ng-template",40),t.qZA()(),t.TgZ(121,"c-col",45)(122,"c-widget-stat-c",47),t.YNc(123,j,1,0,"ng-template",27),t.YNc(124,X,2,1,"ng-template",40),t.qZA()(),t.TgZ(125,"c-col",45)(126,"c-widget-stat-c",48),t.YNc(127,G,1,0,"ng-template",27),t.YNc(128,tt,2,1,"ng-template",40),t.qZA()(),t.TgZ(129,"c-col",45)(130,"c-widget-stat-c",49),t.YNc(131,et,1,0,"ng-template",27),t.YNc(132,at,2,1,"ng-template",40),t.qZA()(),t.TgZ(133,"c-col",45)(134,"c-widget-stat-c",50),t.YNc(135,nt,1,0,"ng-template",27),t.YNc(136,ot,2,1,"ng-template",40),t.qZA()(),t.TgZ(137,"c-col",45)(138,"c-widget-stat-c",51),t.YNc(139,st,1,0,"ng-template",27),t.YNc(140,it,2,1,"ng-template",40),t.qZA()()()(),t.TgZ(141,"app-docs-example",38)(142,"c-row")(143,"c-col",45)(144,"c-widget-stat-c",52),t.YNc(145,ct,1,0,"ng-template",27),t.YNc(146,lt,2,1,"ng-template",40),t.qZA()(),t.TgZ(147,"c-col",45)(148,"c-widget-stat-c",53),t.YNc(149,rt,1,0,"ng-template",27),t.YNc(150,pt,2,1,"ng-template",40),t.qZA()(),t.TgZ(151,"c-col",45)(152,"c-widget-stat-c",54),t.YNc(153,gt,1,0,"ng-template",27),t.YNc(154,dt,2,1,"ng-template",40),t.qZA()(),t.TgZ(155,"c-col",45)(156,"c-widget-stat-c",55),t.YNc(157,mt,1,0,"ng-template",27),t.YNc(158,_t,2,1,"ng-template",40),t.qZA()(),t.TgZ(159,"c-col",45)(160,"c-widget-stat-c",56),t.YNc(161,ut,1,0,"ng-template",27),t.YNc(162,ft,2,1,"ng-template",40),t.qZA()(),t.TgZ(163,"c-col",45)(164,"c-widget-stat-c",57),t.YNc(165,Zt,1,0,"ng-template",27),t.YNc(166,ht,2,1,"ng-template",40),t.qZA()()()()()()),2&n){const w=t.MAs(28),J=t.MAs(33),Tt=t.MAs(38),vt=t.MAs(43);t.xp6(9),t.Q6J("title","Widget title"),t.xp6(2),t.Q6J("value",89.9),t.xp6(2),t.Q6J("title","Widget title"),t.xp6(2),t.Q6J("value",89.9),t.xp6(2),t.Q6J("title","Widget title"),t.xp6(2),t.Q6J("value",89.9),t.xp6(2),t.Q6J("title","Widget title"),t.xp6(2),t.Q6J("value",89.9),t.xp6(4),t.Q6J("title","Widget title"),t.xp6(2),t.Q6J("white",w.inverse),t.xp6(1),t.Q6J("value",89.9),t.xp6(2),t.Q6J("title","Widget title"),t.xp6(2),t.Q6J("white",J.inverse),t.xp6(1),t.Q6J("value",89.9),t.xp6(2),t.Q6J("title","Widget title"),t.xp6(2),t.Q6J("white",Tt.inverse),t.xp6(1),t.Q6J("value",89.9),t.xp6(2),t.Q6J("title","Widget title"),t.xp6(2),t.Q6J("white",vt.inverse),t.xp6(1),t.Q6J("value",89.9),t.xp6(6),t.Q6J("title","Income"),t.xp6(3),t.Q6J("title","Income"),t.xp6(3),t.Q6J("title","Income"),t.xp6(3),t.Q6J("title","Income"),t.xp6(5),t.Q6J("title","Income"),t.xp6(4),t.Q6J("title","Income"),t.xp6(4),t.Q6J("title","Income"),t.xp6(4),t.Q6J("title","Income"),t.xp6(6),t.Q6J("title","Income"),t.xp6(3),t.Q6J("title","Income"),t.xp6(3),t.Q6J("title","Income"),t.xp6(3),t.Q6J("title","Income"),t.xp6(5),t.Q6J("withCharts",!0),t.xp6(3),t.Q6J("title","Visitors"),t.xp6(3),t.Q6J("title","New Clients"),t.xp6(3),t.Q6J("title","Products sold"),t.xp6(3),t.Q6J("title","Returning Visitors"),t.xp6(3),t.Q6J("title","Avg. Time"),t.xp6(6),t.Q6J("title","Visitors"),t.xp6(4),t.Q6J("title","New Clients"),t.xp6(4),t.Q6J("title","Products sold"),t.xp6(4),t.Q6J("title","Returning Visitors"),t.xp6(4),t.Q6J("title","Avg. Time"),t.xp6(4),t.Q6J("title","Comments"),t.xp6(6),t.Q6J("title","Visitors"),t.xp6(4),t.Q6J("title","New Clients"),t.xp6(4),t.Q6J("title","Products sold"),t.xp6(4),t.Q6J("title","Returning Visitors"),t.xp6(4),t.Q6J("title","Avg. Time"),t.xp6(4),t.Q6J("title","Comments")}},dependencies:[e.iok,e.Yp0,e.Pvw,e.S0f,e.bvG,Z.ar,e.y1J,e.AkF,e.yue,e.RMw,e.nkx,d.U,e.t15,e.RIQ,m.O,l.c,_]});const xt=[{path:"",component:O,data:{title:"Widgets"}}];class U{}U.\u0275fac=function(n){return new(n||U)},U.\u0275mod=t.oAB({type:U}),U.\u0275inj=t.cJS({imports:[x.Bz.forChild(xt),x.Bz]});class W{}W.\u0275fac=function(n){return new(n||W)},W.\u0275mod=t.oAB({type:W}),W.\u0275inj=t.cJS({imports:[o.ez,U,e.zE6,e.yF7,Z.QX,e.kWm,e.m81,e.hJ1,e.dTQ,T.E,e.qek,u.N]})},2592:(Q,h,c)=>{c.d(h,{U:()=>d});var o=c(4147),e=c(4650),Z=c(2554),u=c(1334),T=c(5263);const x=function(){return[]};class d{constructor(l){this.changeDetectorRef=l,this._href="https://coreui.io/angular/docs/"}get href(){return this._href}set href(l){this._href=`${o?.config?.coreui_library_docs_url??"https://coreui.io/angular/"}${l}`}ngAfterContentInit(){this.changeDetectorRef.detectChanges()}ngAfterViewInit(){this.changeDetectorRef.markForCheck()}}d.\u0275fac=function(l){return new(l||d)(e.Y36(e.sBO))},d.\u0275cmp=e.Xpm({type:d,selectors:[["app-docs-example"]],inputs:{fragment:"fragment",href:"href"},ngContentSelectors:["*"],decls:13,vars:5,consts:[[1,"example","mb-3"],["variant","tabs"],["cNavLink","",3,"active","fragment","routerLink"],["cIcon","","name","cilMediaPlay",1,"me-2"],["cNavLink","","target","_blank",3,"href"],["cIcon","","name","cilCode",1,"me-2"],[1,"tab-content","rounded-bottom"],[1,"tab-pane","active","show","p-3","preview","fade"]],template:function(l,g){1&l&&(e.F$t(),e.TgZ(0,"div",0)(1,"c-nav",1)(2,"c-nav-item")(3,"a",2),e.O4$(),e._UZ(4,"svg",3),e._uU(5," Preview "),e.qZA()(),e.kcU(),e.TgZ(6,"c-nav-item")(7,"a",4),e.O4$(),e._UZ(8,"svg",5),e._uU(9," Code "),e.qZA()()(),e.kcU(),e.TgZ(10,"div",6)(11,"div",7),e.Hsn(12),e.qZA()()()),2&l&&(e.xp6(3),e.Q6J("active",!0)("fragment",g.fragment)("routerLink",e.DdM(4,x)),e.xp6(4),e.Q6J("href",g.href,e.LSH))},dependencies:[Z.rZi,Z.HOP,Z.Vh3,u.ar,T.rH],changeDetection:0})}}]);