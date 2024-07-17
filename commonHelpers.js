import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as C,i as l}from"./assets/vendor-77e16229.js";const a=document.querySelector("[data-start]"),d=document.querySelector("#datetime-picker"),o={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};let i=null,s=null;const S={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){i=e[0],i<=new Date?(l.error({title:"Error",message:"Please choose a date in the future"}),a.disabled=!0):a.disabled=!1}};C(d,S);a.addEventListener("click",x);function x(){s&&clearInterval(s),s=setInterval(()=>{const t=i-new Date;if(t<=0){clearInterval(s),u({days:0,hours:0,minutes:0,seconds:0}),l.success({title:"Success",message:"Countdown finished!"}),d.disabled=!1;return}const n=b(t);u(n)},1e3),a.disabled=!0,d.disabled=!0}function b(e){const f=Math.floor(e/864e5),h=Math.floor(e%864e5/36e5),y=Math.floor(e%864e5%36e5/6e4),p=Math.floor(e%864e5%36e5%6e4/1e3);return{days:f,hours:h,minutes:y,seconds:p}}function u({days:e,hours:t,minutes:n,seconds:c}){o.days.textContent=r(e),o.hours.textContent=r(t),o.minutes.textContent=r(n),o.seconds.textContent=r(c)}function r(e){return String(e).padStart(2,"0")}const m=document.createElement("style");m.textContent=`
            .timer {
            display: flex;
            gap: 10px;
        }
        .field {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .value {
            font-size: 2em;
        }
        .label {
            font-size: 1em;
        }`;document.head.appendChild(m);
//# sourceMappingURL=commonHelpers.js.map
