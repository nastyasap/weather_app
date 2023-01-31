(function(){"use strict";var e={5865:function(e,t,r){var a=r(9242),n=r(3396);const o={class:"container"};function i(e,t,r,a,i,s){const c=(0,n.up)("search-field"),u=(0,n.up)("card-list");return(0,n.wg)(),(0,n.iD)("div",o,[(0,n.Wm)(c,{"is-loading":this.store.getLoading,"is-error":this.store.getError,onAddCity:this.store.addCity},null,8,["is-loading","is-error","onAddCity"]),(0,n.Wm)(u,{cards:this.store.getCards},null,8,["cards"])])}r(7658);var s=r(2594),c=r(6943),u=r(6331);const d="https://geocoding-api.open-meteo.com/v1/search",l="https://api.open-meteo.com/v1/forecast",h=(0,s.Q_)("weather",{state:()=>({isError:!1,isLoading:!1,weatherData:(0,u.y$C)("weatherData",[])}),getters:{getCards(e){return e.weatherData},getError(e){return e.isError},getLoading(e){return e.isLoading}},actions:{async addCity(e){try{this.isError=!1,this.isLoading=!0;const t=await c.Z.get(`${d}?name=${e}`),r=t.data.results[0].latitude,a=t.data.results[0].longitude,n=t.data.results[0].name,o=await c.Z.get(`${l}?latitude=${r}&longitude=${a}&current_weather=true&hourly=temperature_2m`);if(-1===this.weatherData.findIndex((({cityName:e})=>e===n))){const e={cityName:n,country:t.data.results[0].country,locationData:{latitude:r,longitude:a},temperatureHistory:o.data.hourly,currentWeather:o.data["current_weather"]};this.weatherData.length===this.weatherData.push(e)?this.isError=!0:this.isError=!1}}catch(t){this.isError=!0}finally{this.isLoading=!1}},removeCity(e){const t=this.weatherData.findIndex((t=>t.cityName===e));t>-1&&this.weatherData.splice(t,1)}}}),p=e=>((0,n.dD)("data-v-07fe5ec2"),e=e(),(0,n.Cn)(),e),y={class:"wrapper"},f=p((()=>(0,n._)("h2",{class:"title"},"Weather",-1))),m={class:"searchField"},g={key:0,class:"error"};function v(e,t,r,o,i,s){const c=(0,n.up)("custom-loader");return(0,n.wg)(),(0,n.iD)("div",y,[f,(0,n._)("div",m,[(0,n.wy)((0,n._)("input",{class:"input",type:"text",placeholder:"Enter a city...","onUpdate:modelValue":t[0]||(t[0]=e=>i.search=e),onKeydown:t[1]||(t[1]=(0,a.D2)(((...e)=>s.addCity&&s.addCity(...e)),["enter"]))},null,544),[[a.nr,i.search,void 0,{trim:!0}]]),(0,n._)("button",{class:"button",onClick:t[2]||(t[2]=(...e)=>s.addCity&&s.addCity(...e))},"Search"),r.isLoading?((0,n.wg)(),(0,n.j4)(c,{key:0})):(0,n.kq)("",!0)]),r.isError?((0,n.wg)(),(0,n.iD)("span",g,"City is not found")):(0,n.kq)("",!0)])}const w={class:"lds-dual-ring"};function C(e,t,r,a,o,i){return(0,n.wg)(),(0,n.iD)("div",w)}var b={name:"CustomLoader"},_=r(89);const D=(0,_.Z)(b,[["render",C],["__scopeId","data-v-5e4cb7c3"]]);var O=D,k={name:"SearchField",components:{CustomLoader:O},data(){return{search:""}},props:{isError:{type:Boolean,required:!0},isLoading:{type:Boolean,required:!0}},methods:{addCity(){this.$emit("addCity",this.search),this.search=""}}};const j=(0,_.Z)(k,[["render",v],["__scopeId","data-v-07fe5ec2"]]);var x=j;const L={key:0,class:"cards"},E={key:1};function S(e,t,r,a,o,i){const s=(0,n.up)("weather-card");return r.cards.length>0?((0,n.wg)(),(0,n.iD)("div",L,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.cards,(e=>((0,n.wg)(),(0,n.j4)(s,{card:e,key:e.cityName,onRemove:i.removeCard},null,8,["card","onRemove"])))),128))])):((0,n.wg)(),(0,n.iD)("h2",E,"List of cities is empty"))}var W=r(7139);const z=e=>((0,n.dD)("data-v-0692addc"),e=e(),(0,n.Cn)(),e),Z={class:"card"},$={class:"deleteWrapper"},q={class:"title"},F=z((()=>(0,n._)("strong",null,"Tonight: ",-1)));function I(e,t,r,a,o,i){const s=(0,n.up)("chart-weather");return(0,n.wg)(),(0,n.iD)("div",Z,[(0,n._)("div",$,[(0,n._)("button",{class:"delete",onClick:t[0]||(t[0]=t=>e.$emit("remove",r.card.cityName))},"x")]),(0,n._)("h2",q,(0,W.zw)(r.card.cityName)+", "+(0,W.zw)(r.card.country),1),(0,n._)("span",null,[F,(0,n.Uk)(" "+(0,W.zw)(r.card.currentWeather.temperature)+"°C, "+(0,W.zw)(o.weatherDescription),1)]),(0,n.Wm)(s,{"temperature-history":r.card.temperatureHistory},null,8,["temperature-history"])])}function M(e,t,r,a,o,i){const s=(0,n.up)("apexchart");return(0,n.wg)(),(0,n.j4)(s,{width:"400",type:"line",options:o.chartOptions,series:o.series},null,8,["options","series"])}var T={name:"ChartWeather",props:{temperatureHistory:{type:Object,required:!0}},data(){return{chartOptions:{chart:{toolbar:{show:!1},dropShadow:{enabled:!0,color:"#760cb0",top:18,left:7,blur:10,opacity:.2}},fill:{type:"gradient",gradient:{shadeIntensity:.5,inverseColors:!0}},colors:["rgba(183,168,234,0.97)","rgba(148,122,250,0.97)"],yaxis:{title:{text:"temperature, °C"}},xaxis:{labels:{format:"dd MMM"},type:"datetime",categories:this.temperatureHistory.time}},series:[{name:"temperature",data:this.temperatureHistory["temperature_2m"]}]}}};const H=(0,_.Z)(T,[["render",M]]);var N=H;function P(e){switch(e){case 0:return"Clear sky";case 1:return"Mainly clear";case 2:return"Partly cloudy";case 3:return"Overcast";case 45:return"Fog";case 48:return"Depositing rime fog";case 51:return"Drizzle";case 56:return"Freezing Drizzle";case 61:return"Rain";case 66:return"Freezing Rain";case 71:return"Snow fall";case 77:return"Snow grains";case 80:return"Rain showers";case 85:return"Snow showers";case 95:return"Thunderstorm";case 96:return"Thunderstorm";default:return""}}var R={components:{ChartWeather:N},data(){return{weatherDescription:P(this.card.currentWeather.weathercode)}},props:{card:{type:Object,required:!0}}};const A=(0,_.Z)(R,[["render",I],["__scopeId","data-v-0692addc"]]);var B=A,K={name:"CardsList",components:{WeatherCard:B},props:{cards:{type:Array,required:!0}},setup(){const e=h();return{store:e}},methods:{removeCard(e){this.store.removeCity(e)}}};const U=(0,_.Z)(K,[["render",S],["__scopeId","data-v-679b9acc"]]);var Q=U,V={name:"App",components:{SearchField:x,CardList:Q},setup(){const e=h();return{store:e}}};const Y=(0,_.Z)(V,[["render",i]]);var G=Y,J=r(407),X=r.n(J);(0,a.ri)(G).use((0,s.WB)()).use(X()).mount("#app")}},t={};function r(a){var n=t[a];if(void 0!==n)return n.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,r),o.exports}r.m=e,function(){var e=[];r.O=function(t,a,n,o){if(!a){var i=1/0;for(d=0;d<e.length;d++){a=e[d][0],n=e[d][1],o=e[d][2];for(var s=!0,c=0;c<a.length;c++)(!1&o||i>=o)&&Object.keys(r.O).every((function(e){return r.O[e](a[c])}))?a.splice(c--,1):(s=!1,o<i&&(i=o));if(s){e.splice(d--,1);var u=n();void 0!==u&&(t=u)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[a,n,o]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,a){var n,o,i=a[0],s=a[1],c=a[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(c)var d=c(r)}for(t&&t(a);u<i.length;u++)o=i[u],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(d)},a=self["webpackChunkweather_app"]=self["webpackChunkweather_app"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(5865)}));a=r.O(a)})();
//# sourceMappingURL=app.f8729fb0.js.map