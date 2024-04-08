"use strict";(self.webpackChunkWeatherApp=self.webpackChunkWeatherApp||[]).push([[370],{2370:(Y,x,c)=>{c.d(x,{r:()=>R});var t=c(4946),i=c(6814),_=c(1993),f=c(2181),h=c(4664);const C=function(e){return{"active-tab":e}};function T(e,s){if(1&e){const a=t.EpF();t.TgZ(0,"div",2),t.NdJ("click",function(){const p=t.CHM(a).$implicit,o=t.oxw();return t.KtG(o.tabPick.emit(p))}),t._uU(1),t.qZA()}if(2&e){const a=s.$implicit,n=t.oxw();t.Q6J("ngClass",t.VKq(2,C,n.activeTab.value===a.value)),t.xp6(1),t.hij(" ",a.display?a.display:a," ")}}let O=(()=>{class e{constructor(){this.tabsConfig=[],this.tabPick=new t.vpe}static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-base-tabs"]],inputs:{tabsConfig:"tabsConfig",activeTab:"activeTab"},outputs:{tabPick:"tabPick"},standalone:!0,features:[t.jDz],decls:2,vars:1,consts:[[1,"base-tabs"],["class","base-tabs__tab subtitle-1",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"base-tabs__tab","subtitle-1",3,"ngClass","click"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0),t.YNc(1,T,2,4,"div",1),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngForOf",r.tabsConfig))},dependencies:[i.ez,i.mk,i.sg],styles:[".base-tabs[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%}.base-tabs__tab[_ngcontent-%COMP%]{transition:.3s ease;text-align:center;flex:1;padding:6px;color:#989898;border-radius:4px;cursor:pointer}.base-tabs__tab.active-tab[_ngcontent-%COMP%]{color:#fff;background:#1F438A;cursor:initial;pointer-events:none}"],changeDetection:0})}return e})();var u=function(e){return e.TODAY="today",e.TOMORROW="tomorrow",e.ONE_WEEK="one_week",e.TWO_WEEKS="two_weeks",e}(u||{});const m=[{display:"Today",value:u.TODAY},{display:"Tomorrow",value:u.TOMORROW},{display:"This week",value:u.ONE_WEEK},{display:"Two weeks",value:u.TWO_WEEKS}],l={max:0,min:0,date:0,sunrise:0,sunset:0,current_temp:0},D=[40,20,0,-20,-40];let d=(()=>{class e{constructor(){this.currentDayWeatherUI=l,this.thermometerStamps=D}setDayWeatherUi(a){this.currentDayWeatherUI=function v(e){return e?"name"in e?{date:e.dt,sunset:e.sys.sunset,sunrise:e.sys.sunrise,max:e.main.temp_max,min:e.main.temp_min,current_temp:e.main.temp}:{date:e.dt,sunset:e.sunset,sunrise:e.sunrise,max:e.temp.max,min:e.temp.min,current_temp:e.temp.day}:l}(a)}static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275dir=t.lG2({type:e})}return e})(),b=(()=>{class e{transform(a,n,r,p="decimal"){const o=r-n,w=a-n;return"percentage_string"===p?w/o*100+"%":w/o}static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275pipe=t.Yjl({name:"barHeight",type:e,pure:!0,standalone:!0})}return e})(),g=(()=>{class e{transform(a){return a+"\xb0C"}static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275pipe=t.Yjl({name:"temperature",type:e,pure:!0,standalone:!0})}return e})();function Z(e,s){if(1&e&&(t.TgZ(0,"div",15)(1,"div",16)(2,"div",17),t._uU(3),t.ALo(4,"temperature"),t.ALo(5,"number"),t.qZA()()()),2&e){const a=s.$implicit;t.xp6(3),t.Oqu(t.lcZ(4,1,t.xi3(5,3,a,"1.0-1")))}}function M(e,s){1&e&&(t.TgZ(0,"p",9),t._uU(1," Wind speed "),t.qZA())}let A=(()=>{class e extends d{constructor(){super(...arguments),this.today=!1}ngOnChanges(a){a.weatherData&&this.setDayWeatherUi(a.weatherData.currentValue)}get tempTitle(){return this.today?"Current temperature ":"Temperature at 14:00 "}static#t=this.\u0275fac=function(){let a;return function(r){return(a||(a=t.n5z(e)))(r||e)}}();static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-weather-tab"]],inputs:{weatherData:"weatherData",today:"today"},standalone:!0,features:[t.qOj,t.TTD,t.jDz],decls:40,vars:40,consts:[[1,"weather-tab"],[1,"weather-tab__single"],[1,"weather-tab__time"],[1,"weather-tab__time-date","headline-1"],[1,"weather-tab__time-sun","subtitle-1"],[1,"weather-tab__temperature"],[1,"weather-tab__temperature-thermometer"],["class","weather-tab__temperature-thermometer-stamp",4,"ngFor","ngForOf"],[1,"weather-tab__temperature-thermometer-bar"],[1,"weather-tab__temperature-section","subtitle-1"],["class","weather-tab__temperature-section subtitle-1",4,"ngIf"],[1,"weather-tab__stats"],[1,"weather-tab__stats-title","subtitle-1"],[1,"weather-tab__stats-temp","subtitle-1"],[1,"weather-tab__stats-temp-span"],[1,"weather-tab__temperature-thermometer-stamp"],[1,"hr"],[1,"text","tiny-text"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t._uU(4),t.ALo(5,"date"),t.qZA(),t.TgZ(6,"div",4),t._uU(7),t.ALo(8,"date"),t._UZ(9,"br"),t._uU(10),t.ALo(11,"date"),t.qZA()(),t.TgZ(12,"div",5)(13,"div",6),t.YNc(14,Z,6,6,"div",7),t.TgZ(15,"div",8),t.ALo(16,"barHeight"),t.qZA()(),t.TgZ(17,"div")(18,"p",9),t._uU(19),t._UZ(20,"br"),t._uU(21),t.ALo(22,"temperature"),t.ALo(23,"number"),t.qZA(),t.YNc(24,M,2,0,"p",10),t.qZA()(),t.TgZ(25,"div",11)(26,"p",12),t._uU(27," Temperature"),t.qZA(),t.TgZ(28,"p",13)(29,"span",14),t._uU(30,"min. "),t.qZA(),t._uU(31),t.ALo(32,"temperature"),t.ALo(33,"number"),t.qZA(),t.TgZ(34,"p",13)(35,"span",14),t._uU(36,"max. "),t.qZA(),t._uU(37),t.ALo(38,"temperature"),t.ALo(39,"number"),t.qZA()()()()),2&n&&(t.xp6(4),t.hij(" ",t.xi3(5,11,r.currentDayWeatherUI.date,"MMMM d, y")," "),t.xp6(3),t.hij(" Sunrise ",t.xi3(8,14,r.currentDayWeatherUI.sunrise,"shortTime")," "),t.xp6(3),t.hij(" Sunset ",t.xi3(11,17,r.currentDayWeatherUI.sunset,"shortTime")," "),t.xp6(4),t.Q6J("ngForOf",r.thermometerStamps),t.xp6(1),t.Udp("height",t.gM2(16,20,null==r.currentDayWeatherUI?null:r.currentDayWeatherUI.current_temp,-40,40,"percentage_string")),t.xp6(4),t.hij(" ",r.tempTitle," "),t.xp6(2),t.hij(" ",t.lcZ(22,25,t.xi3(23,27,r.currentDayWeatherUI.current_temp,"1.0-1"))," "),t.xp6(3),t.Q6J("ngIf",r.currentDayWeatherUI.wind_speed),t.xp6(7),t.hij("",t.lcZ(32,30,t.xi3(33,32,r.currentDayWeatherUI.min,"1.0-1"))," "),t.xp6(6),t.hij(" ",t.lcZ(38,35,t.xi3(39,37,r.currentDayWeatherUI.max,"1.0-1"))," "))},dependencies:[i.ez,i.sg,i.O5,i.JJ,i.uU,b,g],styles:[".weather-tab[_ngcontent-%COMP%]{border:1px solid #F8F9FB;border-radius:4px;padding:12px 20px}.weather-tab__single[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.weather-tab__time-date[_ngcontent-%COMP%]{color:#151515;margin-bottom:16px}.weather-tab__time-sun[_ngcontent-%COMP%]{border-radius:3px;border:.5px solid #F8F9FB;padding:6px 10px;width:max-content;color:#686868}.weather-tab__temperature[_ngcontent-%COMP%]{display:flex}.weather-tab__temperature-thermometer[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;justify-content:space-between;margin-right:32px}.weather-tab__temperature-thermometer-stamp[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.weather-tab__temperature-thermometer-stamp[_ngcontent-%COMP%]   .hr[_ngcontent-%COMP%]{background:#151515;height:1px;width:18px;border-radius:8px;position:relative}.weather-tab__temperature-thermometer-stamp[_ngcontent-%COMP%]   .hr[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{position:absolute;left:-25px;bottom:-6px}.weather-tab__temperature-thermometer-bar[_ngcontent-%COMP%]{position:absolute;right:6px;bottom:0;border-radius:8px;width:5px;z-index:1;background:#DD1C1C}.weather-tab__temperature-section[_ngcontent-%COMP%]{margin-bottom:8px}.weather-tab__stats-title[_ngcontent-%COMP%]{margin-bottom:16px}.weather-tab__stats-temp[_ngcontent-%COMP%]{display:flex;align-self:center;color:#151515}.weather-tab__stats-temp-span[_ngcontent-%COMP%]{color:#989898;margin-right:4px}.weather-tab__days[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin-bottom:32px}.weather-tab__days-item[_ngcontent-%COMP%]{border-radius:4px;border:2px solid #E5E9EE;padding:6px 12px;color:#686868;cursor:pointer;transition:.3s ease-in;width:max-content;text-align:center;margin:0 5px 10px}.weather-tab__days-item.active-day[_ngcontent-%COMP%]{border-color:#1f438a}.weather-tab__days-item-text[_ngcontent-%COMP%]{color:#151515}.weather-tab__days-item-temp[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%;align-items:center}"],changeDetection:0})}return e})();function U(e,s){if(1&e){const a=t.EpF();t.TgZ(0,"div",17),t.NdJ("click",function(){const p=t.CHM(a).$implicit,o=t.oxw();return t.KtG(o.onDayPick(p))}),t.TgZ(1,"p",18),t._uU(2),t.ALo(3,"date"),t.qZA(),t.TgZ(4,"p",19),t._uU(5),t.ALo(6,"date"),t.qZA(),t.TgZ(7,"p",18),t._uU(8),t.ALo(9,"date"),t.qZA()()}if(2&e){const a=s.$implicit,n=t.oxw();t.ekj("active-day",n.currentDayWeatherUI.date===a.dt),t.xp6(2),t.Oqu(t.xi3(3,5,a.dt,"EEE")),t.xp6(3),t.Oqu(t.xi3(6,8,a.dt,"dd")),t.xp6(3),t.Oqu(t.xi3(9,11,a.dt,"MMMM"))}}function F(e,s){if(1&e&&(t.TgZ(0,"div",20)(1,"div",21)(2,"div",22),t._uU(3),t.ALo(4,"temperature"),t.ALo(5,"number"),t.qZA()()()),2&e){const a=s.$implicit;t.xp6(3),t.Oqu(t.lcZ(4,1,t.xi3(5,3,a,"1.0-1")))}}function k(e,s){1&e&&(t.TgZ(0,"p",11),t._uU(1," Wind speed "),t.qZA())}let q=(()=>{class e extends d{constructor(a){super(),this.cdRef=a,this.weatherDays=[],this.trackDays=(n,r)=>r.dt}ngOnInit(){this.weatherDays.length>0&&this.setDayWeatherUi(this.weatherDays[0])}onDayPick(a){this.setDayWeatherUi(a),this.cdRef.detectChanges()}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(t.sBO))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-multi-day-weather-card"]],inputs:{weatherDays:"weatherDays"},standalone:!0,features:[t.qOj,t.jDz],decls:42,vars:41,consts:[[1,"weather-tab"],[1,"weather-tab__days"],["class","weather-tab__days-item",3,"active-day","click",4,"ngFor","ngForOf","ngForTrackBy"],[1,"weather-tab__single"],[1,"weather-tab__time"],[1,"weather-tab__time-date","headline-1"],[1,"weather-tab__time-sun","subtitle-1"],[1,"weather-tab__temperature"],[1,"weather-tab__temperature-thermometer"],["class","weather-tab__temperature-thermometer-stamp",4,"ngFor","ngForOf"],[1,"weather-tab__temperature-thermometer-bar"],[1,"weather-tab__temperature-section","subtitle-1"],["class","weather-tab__temperature-section subtitle-1",4,"ngIf"],[1,"weather-tab__stats"],[1,"weather-tab__stats-title","subtitle-1"],[1,"weather-tab__stats-temp","subtitle-1"],[1,"weather-tab__stats-temp-span"],[1,"weather-tab__days-item",3,"click"],[1,"subtitle-1"],[1,"headline-2","weather-tab__days-item-text"],[1,"weather-tab__temperature-thermometer-stamp"],[1,"hr"],[1,"text","tiny-text"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,U,10,14,"div",2),t.qZA(),t.TgZ(3,"div",3)(4,"div",4)(5,"div",5),t._uU(6),t.ALo(7,"date"),t.qZA(),t.TgZ(8,"div",6),t._uU(9),t.ALo(10,"date"),t._UZ(11,"br"),t._uU(12),t.ALo(13,"date"),t.qZA()(),t.TgZ(14,"div",7)(15,"div",8),t.YNc(16,F,6,6,"div",9),t.TgZ(17,"div",10),t.ALo(18,"barHeight"),t.qZA()(),t.TgZ(19,"div")(20,"p",11),t._uU(21," Temperature at 14:00 "),t._UZ(22,"br"),t._uU(23),t.ALo(24,"temperature"),t.ALo(25,"number"),t.qZA(),t.YNc(26,k,2,0,"p",12),t.qZA()(),t.TgZ(27,"div",13)(28,"p",14),t._uU(29," Temperature"),t.qZA(),t.TgZ(30,"p",15)(31,"span",16),t._uU(32,"min. "),t.qZA(),t._uU(33),t.ALo(34,"temperature"),t.ALo(35,"number"),t.qZA(),t.TgZ(36,"p",15)(37,"span",16),t._uU(38,"max. "),t.qZA(),t._uU(39),t.ALo(40,"temperature"),t.ALo(41,"number"),t.qZA()()()()),2&n&&(t.xp6(2),t.Q6J("ngForOf",r.weatherDays)("ngForTrackBy",r.trackDays),t.xp6(4),t.hij(" ",t.xi3(7,12,r.currentDayWeatherUI.date,"MMMM d, y")," "),t.xp6(3),t.hij(" Sunrise ",t.xi3(10,15,r.currentDayWeatherUI.sunrise,"shortTime")," "),t.xp6(3),t.hij(" Sunset ",t.xi3(13,18,r.currentDayWeatherUI.sunset,"shortTime")," "),t.xp6(4),t.Q6J("ngForOf",r.thermometerStamps),t.xp6(1),t.Udp("height",t.gM2(18,21,null==r.currentDayWeatherUI?null:r.currentDayWeatherUI.current_temp,-40,40,"percentage_string")),t.xp6(6),t.hij(" ",t.lcZ(24,26,t.xi3(25,28,r.currentDayWeatherUI.current_temp,"1.0-1"))," "),t.xp6(3),t.Q6J("ngIf",r.currentDayWeatherUI.wind_speed),t.xp6(7),t.hij("",t.lcZ(34,31,t.xi3(35,33,r.currentDayWeatherUI.min,"1.0-1"))," "),t.xp6(6),t.hij(" ",t.lcZ(40,36,t.xi3(41,38,r.currentDayWeatherUI.max,"1.0-1"))," "))},dependencies:[i.ez,i.sg,i.O5,i.JJ,i.uU,b,g],styles:[".weather-tab[_ngcontent-%COMP%]{border:1px solid #F8F9FB;border-radius:4px;padding:12px 20px}.weather-tab__single[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.weather-tab__time-date[_ngcontent-%COMP%]{color:#151515;margin-bottom:16px}.weather-tab__time-sun[_ngcontent-%COMP%]{border-radius:3px;border:.5px solid #F8F9FB;padding:6px 10px;width:max-content;color:#686868}.weather-tab__temperature[_ngcontent-%COMP%]{display:flex}.weather-tab__temperature-thermometer[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;justify-content:space-between;margin-right:32px}.weather-tab__temperature-thermometer-stamp[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.weather-tab__temperature-thermometer-stamp[_ngcontent-%COMP%]   .hr[_ngcontent-%COMP%]{background:#151515;height:1px;width:18px;border-radius:8px;position:relative}.weather-tab__temperature-thermometer-stamp[_ngcontent-%COMP%]   .hr[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{position:absolute;left:-25px;bottom:-6px}.weather-tab__temperature-thermometer-bar[_ngcontent-%COMP%]{position:absolute;right:6px;bottom:0;border-radius:8px;width:5px;z-index:1;background:#DD1C1C}.weather-tab__temperature-section[_ngcontent-%COMP%]{margin-bottom:8px}.weather-tab__stats-title[_ngcontent-%COMP%]{margin-bottom:16px}.weather-tab__stats-temp[_ngcontent-%COMP%]{display:flex;align-self:center;color:#151515}.weather-tab__stats-temp-span[_ngcontent-%COMP%]{color:#989898;margin-right:4px}.weather-tab__days[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin-bottom:32px}.weather-tab__days-item[_ngcontent-%COMP%]{border-radius:4px;border:2px solid #E5E9EE;padding:6px 12px;color:#686868;cursor:pointer;transition:.3s ease-in;width:max-content;text-align:center;margin:0 5px 10px}.weather-tab__days-item.active-day[_ngcontent-%COMP%]{border-color:#1f438a}.weather-tab__days-item-text[_ngcontent-%COMP%]{color:#151515}.weather-tab__days-item-temp[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%;align-items:center}"],changeDetection:0})}return e})();var I=c(8444),y=c(5117),j=c(9862);let L=(()=>{class e extends I.b{constructor(a){super(a),this.http=a}getCurrentWeather(a){return this.httpGetRequest(y.H.CURRENT_WEATHER_API,a)}getClimateForecast(a){return this.httpGetRequest(y.H.DAILY_FORECAST_16_API,a)}static#t=this.\u0275fac=function(n){return new(n||e)(t.LFG(j.eN))};static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function E(e,s){if(1&e&&(t.ynx(0),t._UZ(1,"app-weather-tab",11),t.BQk()),2&e){const a=t.oxw();t.xp6(1),t.Q6J("weatherData",a.currentDayForecast)("today",!0)}}function J(e,s){if(1&e&&(t.ynx(0),t._UZ(1,"app-weather-tab",12),t.BQk()),2&e){const a=t.oxw();t.xp6(1),t.Q6J("weatherData",null==a.multipleDaysForecast?null:a.multipleDaysForecast.list[1])}}function S(e,s){if(1&e&&(t.ynx(0),t._UZ(1,"app-multi-day-weather-card",13),t.BQk()),2&e){const a=t.oxw();t.xp6(1),t.Q6J("weatherDays",a.oneWeekWeatherDays)}}function Q(e,s){if(1&e&&(t.ynx(0),t._UZ(1,"app-multi-day-weather-card",13),t.BQk()),2&e){const a=t.oxw();t.xp6(1),t.Q6J("weatherDays",a.twoWeeksWeatherDays)}}let R=(()=>{class e{constructor(a,n){this.weatherAPI=a,this.cdRef=n,this.destroyRef$=(0,t.f3M)(t.ktI),this.activeTab=m[0],this.cardTabs=m,this.multipleDaysForecast=null,this.currentDayForecast=null,this.weatherTabs=u}ngOnInit(){this.subOnCity()}subOnCity(){this.city.pipe((0,_.sL)(this.destroyRef$),(0,f.h)(a=>!!a),(0,h.w)(a=>this.fetchWeatherData(a))).subscribe({next:a=>{this.processForecastData(a),this.cdRef.detectChanges()},error:a=>{console.error("Failed to load data",a)}})}fetchWeatherData(a){const n=function P(e){return{lat:e.lat,lon:e.lon,units:"metric"}}(a);return this.weatherAPI.getCurrentWeather(n).pipe((0,_.sL)(this.destroyRef$),(0,h.w)(r=>(this.currentDayForecast=function W(e){return e.dt=1e3*e.dt,e.sys.sunset=1e3*e.sys.sunset,e.sys.sunrise=1e3*e.sys.sunrise,e}(r),this.weatherAPI.getClimateForecast({...n,cnt:16}))))}processForecastData(a){a.list=a.list.map(n=>({...n,dt:1e3*n.dt,sunrise:1e3*n.sunrise,sunset:1e3*n.sunset})),this.multipleDaysForecast=a}onTabPick(a){this.activeTab=a,this.cdRef.detectChanges()}get oneWeekWeatherDays(){return this.multipleDaysForecast.list.slice(0,7)}get twoWeeksWeatherDays(){return this.multipleDaysForecast.list.slice(0,14)}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(L),t.Y36(t.sBO))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-city-weather-card"]],inputs:{city:"city"},standalone:!0,features:[t.jDz],decls:18,vars:13,consts:[[1,"weather-card"],[1,"weather-card__main"],[1,"weather-card__main-heading"],[1,"weather-card__main-title","headline-1"],[1,"weather-card__main-state","subtitle-1"],[1,"weather-card__main-tabs"],[1,"weather-card__main-tabs-container"],[3,"tabsConfig","activeTab","tabPick"],[1,"weather-card__main-content"],[3,"ngSwitch"],[4,"ngSwitchCase"],[3,"weatherData","today"],[3,"weatherData"],[3,"weatherDays"]],template:function(n,r){if(1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),t._uU(4),t.ALo(5,"async"),t.qZA(),t.TgZ(6,"h3",4),t._uU(7),t.ALo(8,"async"),t.qZA()(),t.TgZ(9,"div",5)(10,"div",6)(11,"app-base-tabs",7),t.NdJ("tabPick",function(o){return r.onTabPick(o)}),t.qZA()()(),t.TgZ(12,"div",8),t.ynx(13,9),t.YNc(14,E,2,2,"ng-container",10),t.YNc(15,J,2,1,"ng-container",10),t.YNc(16,S,2,1,"ng-container",10),t.YNc(17,Q,2,1,"ng-container",10),t.BQk(),t.qZA()()()),2&n){let p,o;t.xp6(4),t.hij("Weather in ",null==(p=t.lcZ(5,9,r.city))?null:p.name,""),t.xp6(3),t.Oqu(null==(o=t.lcZ(8,11,r.city))?null:o.state),t.xp6(4),t.Q6J("tabsConfig",r.cardTabs)("activeTab",r.activeTab),t.xp6(2),t.Q6J("ngSwitch",r.activeTab.value),t.xp6(1),t.Q6J("ngSwitchCase",r.weatherTabs.TODAY),t.xp6(1),t.Q6J("ngSwitchCase",r.weatherTabs.TOMORROW),t.xp6(1),t.Q6J("ngSwitchCase",r.weatherTabs.ONE_WEEK),t.xp6(1),t.Q6J("ngSwitchCase",r.weatherTabs.TWO_WEEKS)}},dependencies:[i.ez,i.RF,i.n9,i.Ov,O,A,q],styles:[".weather-card__main-heading[_ngcontent-%COMP%]{margin-bottom:32px}.weather-card__main-title[_ngcontent-%COMP%]{margin-bottom:8px;color:#151515}.weather-card__main-state[_ngcontent-%COMP%]{color:#50535a}.weather-card__main-tabs[_ngcontent-%COMP%]{width:100%;margin-bottom:16px}.weather-card__main-tabs-container[_ngcontent-%COMP%]{width:350px}"],changeDetection:0})}return e})()}}]);