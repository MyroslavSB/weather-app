"use strict";(self.webpackChunkWeatherApp=self.webpackChunkWeatherApp||[]).push([[888],{6888:(x,a,r)=>{r.r(a),r.d(a,{CityPageComponent:()=>E});var t=r(4946),c=r(6814),y=r(2370),l=r(1993),f=r(8645),p=r(4664),u=r(6306),d=r(6232),g=function(n){return n.BAD_NAME="Looks like you have entered a wrong city name.",n.FAILED_TO_FETCH="We have failed to fetch forecast for your city. Please try again later",n}(g||{}),h=r(86),m=r(8966);function C(n,A){if(1&n&&(t.TgZ(0,"div",3),t._UZ(1,"app-city-weather-card",4),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("city",e.currentCity$)}}function v(n,A){if(1&n&&(t.TgZ(0,"div",5)(1,"p",6),t._uU(2),t.qZA()()),2&n){const e=t.oxw();t.xp6(2),t.hij(" ",e.getCityError," ")}}let E=(()=>{class n{constructor(e,i,s,o){this.route=e,this.router=i,this.geocodingAPI=s,this.cdRef=o,this.destroyRef$=(0,t.f3M)(t.ktI),this.isLoading=!1,this.currentCity$=new f.x,this.getCityError=null,this.getErrors=g}ngOnInit(){this.subOnRouteParams()}subOnRouteParams(){this.route.params.pipe((0,l.sL)(this.destroyRef$),(0,p.w)(e=>(e.city||this.router.navigateByUrl(""),this.geocodingAPI.getCitiesByParams({q:e.city,limit:1}))),(0,u.K)(e=>(this.getCityError=this.getErrors.FAILED_TO_FETCH,this.cdRef.detectChanges(),d.E))).subscribe(e=>{e.length>0?this.currentCity$.next(e[0]):(console.log(e),this.getCityError=this.getErrors.BAD_NAME,this.cdRef.detectChanges())})}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(h.gz),t.Y36(h.F0),t.Y36(m.F),t.Y36(t.sBO))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-city-page"]],standalone:!0,features:[t.jDz],decls:4,vars:2,consts:[[1,"city"],["class","city__main",4,"ngIf","ngIfElse"],["error_template",""],[1,"city__main"],[3,"city"],[1,"city__error"],[1,"headline-1"]],template:function(i,s){if(1&i&&(t.TgZ(0,"div",0),t.YNc(1,C,2,1,"div",1),t.YNc(2,v,3,1,"ng-template",null,2,t.W1O),t.qZA()),2&i){const o=t.MAs(3);t.xp6(1),t.Q6J("ngIf",!s.getCityError)("ngIfElse",o)}},dependencies:[c.ez,c.O5,y.r],styles:[".city__error[_ngcontent-%COMP%]{margin:48px auto 0;text-align:center}"],changeDetection:0})}return n})()}}]);