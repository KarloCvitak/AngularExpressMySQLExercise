import{A as O,B as M,C as $,D as j,E as V,F as J,H as P,I as Q,J as X,K as Y,L as Z,M as U,N,O as H,P as tt,Q as D,R as x,S as et,U as nt,Y as it,a as B,aa as ot,b as K,c as W,ca as rt,d as q,e as F,f as G,g as v,h as T,i as f,j as h,k as a,l as d,m as g,n as p,o as s,p as c,q as u,r as w,s as I,t as S,u as _,v as l,w as L,x as m,y as k,z as b}from"./chunk-5EQMPUE5.js";var C=class{constructor(){this.userId="",this.timestamp=new Date,this.comment=""}};var R=(()=>{let n=class n{constructor(t){this.http=t,this.postsUrl=tt.API_URL+"/api/posts"}getPosts(){return this.http.get(this.postsUrl).pipe(W(t=>t.posts))}addPost(t){return this.http.post(this.postsUrl,t)}deletePost(t){return this.http.delete(`${this.postsUrl}/${t}`)}editPost(t){return this.http.put(`${this.postsUrl}`,t)}};n.\u0275fac=function(i){return new(i||n)(G(P))},n.\u0275prov=q({token:n,factory:n.\u0275fac,providedIn:"root"});let e=n;return e})();function ht(e,n){if(e&1){let o=S();w(0),s(1,"button",6),_("click",function(){f(o);let i=l(2).index,r=l();return h(r.deletePost(i))}),m(2,"Delete"),c(),s(3,"button",6),_("click",function(){f(o);let i=l(2).index,r=l();return h(r.setEdit(i))}),m(4,"Uredi"),c(),I()}}function xt(e,n){if(e&1&&(w(0),s(1,"div",11),m(2),c(),u(3,"hr"),s(4,"div",12),m(5),c(),u(6,"hr"),s(7,"div",13),g(8,ht,5,0,"ng-container",7),c(),I()),e&2){let o=l().$implicit,t=l(),i;a(2),O(" by ",(i=t.findUserById(o.userId))==null?null:i.username," at ",o.timestamp," "),a(3),k(o.comment),a(3),p("ngIf",(t.user==null?null:t.user._id)===o.userId)}}function Ct(e,n){if(e&1){let o=S();s(0,"textarea",14),_("ngModelChange",function(i){f(o);let r=l(2);return h(r.editingComment.comment=i)}),c(),s(1,"button",2),_("click",function(){f(o);let i=l().index,r=l();return h(r.doneEditing(i))}),m(2,"Save"),c()}if(e&2){let o=l(2);p("ngModel",o.editingComment.comment)}}function bt(e,n){if(e&1&&(s(0,"div",8),g(1,xt,9,4,"ng-container",9)(2,Ct,3,1,"ng-template",null,10,$),c()),e&2){let o=n.index,t=L(3),i=l();a(),p("ngIf",i.editingIndex!==o)("ngIfElse",t)}}var vt=()=>({background:"green"});function wt(e,n){if(e&1){let o=S();s(0,"div")(1,"button",19),_("click",function(){f(o);let i=l(2);return h(i.addPost())}),m(2,"Post"),c()()}e&2&&(a(),p("ngStyle",M(1,vt)))}var It=()=>({background:"red"});function St(e,n){if(e&1){let o=S();s(0,"button",20),_("click",function(){f(o);let i=l(2);return h(i.addPost())}),m(1,"Post"),c()}e&2&&p("ngStyle",M(2,It))("disabled",!0)}function Mt(e,n){if(e&1){let o=S();w(0),s(1,"div",15),u(2,"input",16)(3,"br"),s(4,"textarea",17),_("ngModelChange",function(i){f(o);let r=l();return h(r.new.comment=i)}),c()(),g(5,wt,3,2,"div",9)(6,St,2,3,"ng-template",null,18,$),I()}if(e&2){let o=L(7),t=l(),i;a(2),p("value",(i=t.findUserById(t.new.userId))==null?null:i.username),a(2),p("ngModel",t.new.comment),a(),p("ngIf",t.new.comment.length>0)("ngIfElse",o)}}var Pt=()=>["profile"],lt=(()=>{let n=class n{ngOnInit(){this.user=this.auth.getUser(),this.authenticated=this.auth.isAuthenticated(),console.log(this.user),this.authChangeSubscription=this.auth.authChange.subscribe(t=>{this.authenticated=t}),this.authenticated||(console.log("Navigating to login..."),this.router.navigate(["login"])),this.postsService.getPosts().subscribe(t=>{console.log(t),this.posts=t}),this.user&&this.user._id&&(this.new.userId=this.user._id)}constructor(t,i,r,y,A){this.router=t,this.http=i,this.postsService=r,this.userService=y,this.auth=A,this.posts=[],this.user=null,this.authenticated=!1,this.authChangeSubscription=null,this.new=new C,this.users=[],this.usersSubject=new K([]),this.editingIndex=-1,this.editingComment={_id:"",userId:"",timestamp:new Date,comment:""},this.showDiv=!1,this.userService.getUsers().subscribe(z=>{console.log(z),this.users=z,this.usersSubject.next([...this.users])})}findUserById(t){let i=this.users.find(r=>r._id===t);return i?B({},i):null}addPost(){this.new.userId&&this.new.comment.length>0&&(console.log(this.new),this.postsService.addPost(this.new).subscribe(t=>{console.log(t),this.posts.push(this.new),this.new=new C,this.user&&this.user._id&&(this.new.userId=this.user._id),this.ngOnInit()}))}deletePost(t){console.log(t);let i=this.posts[t];console.log(i._id),i._id&&this.postsService.deletePost(i._id).subscribe(r=>{console.log(r),this.posts.splice(t,1)})}setEdit(t){this.editingComment=B({},this.posts[t]),this.editingIndex=t,console.log(this.editingComment+"trouble1")}doneEditing(t){let i=this.posts[t];this.postsService.editPost(this.editingComment).subscribe({next:r=>{console.log(r),this.editingIndex=-1,this.posts[t]=this.editingComment,this.editingComment=new C},error:r=>{console.log(r)}}),this.editingIndex=-1}ngOnDestroy(){this.authChangeSubscription&&this.authChangeSubscription.unsubscribe()}};n.\u0275fac=function(i){return new(i||n)(d(U),d(P),d(R),d(D),d(x))},n.\u0275cmp=v({type:n,selectors:[["app-forum"]],decls:14,vars:7,consts:[[1,"user-container"],[3,"routerLink"],[1,"post-button",3,"click"],[1,"comments-container"],["class","well-container",4,"ngFor","ngForOf"],[1,"new-comment-container"],[3,"click"],[4,"ngIf"],[1,"well-container"],[4,"ngIf","ngIfElse"],["editComment",""],[1,"comment-info"],[1,"comment"],[1,"comment-buttons"],[3,"ngModel","ngModelChange"],[1,"new-comment-inputs"],["type","text","placeholder","username","disabled","",3,"value"],["placeholder","write a comment...",3,"ngModel","ngModelChange"],["disabledButton",""],[1,"post-button",3,"ngStyle","click"],[1,"post-button",3,"ngStyle","disabled","click"]],template:function(i,r){i&1&&(s(0,"div",0),m(1," Welcome "),s(2,"a",1),m(3),c(),m(4),s(5,"button",2),_("click",function(){return r.auth.logout()}),m(6,"Logout"),c()(),s(7,"div",3),m(8),c(),g(9,bt,4,2,"div",4),s(10,"div",5)(11,"button",6),_("click",function(){return r.showDiv=!r.showDiv}),m(12,"New Comment"),c(),g(13,Mt,8,4,"ng-container",7),c()),i&2&&(a(2),p("routerLink",M(6,Pt)),a(),k(r.user==null?null:r.user.name),a(),b(" (",r.user==null?null:r.user.email,") "),a(4),b(" Comments: (",r.posts.length,`)
`),a(),p("ngForOf",r.posts),a(4),p("ngIf",r.showDiv))},dependencies:[j,V,J,N,et,nt,it],styles:['body[_ngcontent-%COMP%]{font-family:Arial,sans-serif;background-color:#f0f0f0;margin:0}.container[_ngcontent-%COMP%]{width:80%;margin:0 auto}.comments-container[_ngcontent-%COMP%]{margin-top:20px;font-size:18px;color:#333}.well-container[_ngcontent-%COMP%]{background-color:#fff;margin-top:20px;padding:15px;border:1px solid #ddd;border-radius:5px}.comment-info[_ngcontent-%COMP%]{font-size:14px;color:#888}.comment[_ngcontent-%COMP%]{margin:10px 0}.comment-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-right:10px;padding:8px 15px;background-color:#3498db;color:#fff;border:none;border-radius:3px;cursor:pointer}.comment-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#2980b9}textarea[_ngcontent-%COMP%]{width:100%;padding:10px;margin-bottom:10px;border:1px solid #ddd;border-radius:3px}.post-button[_ngcontent-%COMP%]{padding:10px 20px;background-color:#00dead;color:#fff;border:none;border-radius:3px;cursor:pointer}.post-button[disabled][_ngcontent-%COMP%]{background-color:#00dead;cursor:not-allowed}.new-comment-container[_ngcontent-%COMP%]{margin-top:20px}.new-comment-inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .new-comment-inputs[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;padding:10px;margin-bottom:10px;border:1px solid #ddd;border-radius:3px}button[_ngcontent-%COMP%]{padding:10px 20px;color:#00dead;border:none;border-radius:3px;cursor:pointer}button[ngStyle][_ngcontent-%COMP%]{margin-right:10px}button[ngStyle="background: green"][_ngcontent-%COMP%]{background-color:#27ae60}button[ngStyle="background: red"][_ngcontent-%COMP%]{background-color:#e74c3c}.user-container[_ngcontent-%COMP%]{background-color:#4caf50;color:#fff;padding:15px;border-radius:8px;box-shadow:0 4px 8px #0000001a;text-align:center;font-size:18px}.user-container[_ngcontent-%COMP%]:hover{background-color:#45a049;transition:background-color .3s ease}']});let e=n;return e})();function yt(e,n){if(e&1&&(w(0),s(1,"div",5),m(2),c(),u(3,"hr"),s(4,"div",6),m(5),c(),u(6,"hr"),I()),e&2){let o=l().$implicit;a(2),O(" by ",o.userId," at ",o.timestamp," "),a(3),k(o.comment)}}function kt(e,n){if(e&1&&(s(0,"div",4),g(1,yt,7,3,"ng-container",0),c()),e&2){let o=n.$implicit,t=l(2);a(),p("ngIf",t.user._id===o.userId)}}var Ot=()=>[""];function Et(e,n){if(e&1&&(s(0,"div")(1,"h2"),m(2,"User data"),c(),s(3,"p"),m(4),c(),u(5,"p"),s(6,"p"),m(7),c(),s(8,"p"),m(9),c(),u(10,"hr"),s(11,"div",1),m(12),c(),g(13,kt,2,1,"div",2),s(14,"a",3),m(15,"BACK"),c()()),e&2){let o=l();a(4),b("Username: ",o.user.username,""),a(3),b("Email: ",o.user.email,""),a(2),b("Name: ",o.user.name,""),a(3),O(" Posts by ",o.user.username,": (",o.posts.length,") "),a(),p("ngForOf",o.posts),a(),p("routerLink",M(7,Ot))}}var pt=(()=>{let n=class n{constructor(t,i,r,y,A){this.userService=t,this.router=i,this.http=r,this.postsService=y,this.auth=A,this.users=[],this.posts=[],this.user=null,this.ForumComment=C}ngOnInit(){this.user=this.auth.getUser(),this.userService.getUsers().subscribe(t=>{console.log(t),this.users=t}),this.postsService.getPosts().subscribe(t=>{console.log(t),this.posts=t.filter(i=>i.userId===this.user?._id)})}};n.\u0275fac=function(i){return new(i||n)(d(D),d(U),d(P),d(R),d(x))},n.\u0275cmp=v({type:n,selectors:[["app-profile"]],decls:1,vars:1,consts:[[4,"ngIf"],[1,"comments-container"],["class","well-container",4,"ngFor","ngForOf"],[3,"routerLink"],[1,"well-container"],[1,"comment-info"],[1,"comment"]],template:function(i,r){i&1&&g(0,Et,16,8,"div",0),i&2&&p("ngIf",r.user)},dependencies:[j,V,N],styles:["body[_ngcontent-%COMP%]{font-family:Roboto,Helvetica,sans-serif;background-color:#f5f5f5;margin:0}.container[_ngcontent-%COMP%]{max-width:800px;margin:0 auto;padding:20px}h2[_ngcontent-%COMP%]{color:#333}p[_ngcontent-%COMP%]{margin-bottom:10px;line-height:1.6}.well-container[_ngcontent-%COMP%]{margin-top:20px;border:1px solid #ddd;padding:15px;background-color:#fff;box-shadow:0 0 15px #0000001a;border-radius:8px}.comment-info[_ngcontent-%COMP%]{font-size:14px;color:#888}.comment[_ngcontent-%COMP%]{margin-top:15px;line-height:1.4}a[_ngcontent-%COMP%]{display:inline-block;margin-top:20px;padding:12px 24px;text-decoration:none;background-color:#4285f4;color:#fff;border-radius:8px;transition:background-color .3s}a[_ngcontent-%COMP%]:hover{background-color:#1a73e8}"]});let e=n;return e})();var Ft=[{path:"",component:lt},{path:"login",loadChildren:()=>import("./chunk-A2KZOTID.js").then(e=>e.AuthModule)},{path:"register",component:rt},{path:"profile",component:pt}],dt=(()=>{let n=class n{};n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=T({type:n}),n.\u0275inj=F({imports:[H.forRoot(Ft),H]});let e=n;return e})();var ut=(()=>{let n=class n{constructor(t){this.auth=t,this.title="untitled8"}ngOnInit(){let t=this.auth.getUser()}};n.\u0275fac=function(i){return new(i||n)(d(x))},n.\u0275cmp=v({type:n,selectors:[["app-root"]],decls:1,vars:0,template:function(i,r){i&1&&u(0,"router-outlet")},dependencies:[Z]});let e=n;return e})();var gt=(()=>{let n=class n{};n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=T({type:n,bootstrap:[ut]}),n.\u0275inj=F({providers:[x],imports:[Y,dt,ot,Q]});let e=n;return e})();X().bootstrapModule(gt).catch(e=>console.error(e));
