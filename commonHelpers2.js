import"./assets/styles-659146e3.js";const e=document.querySelector(".feedback-form"),a="feedback-form-state";n();e.addEventListener("input",m);e.addEventListener("submit",s);function m(){const t={email:e.elements.email.value.trim(),message:e.elements.message.value.trim()};localStorage.setItem(a,JSON.stringify(t))}function s(t){if(t.preventDefault(),e.elements.email.value===""||e.elements.message.value==="")return;const l={mail:e.elements.email.value.trim(),message:e.elements.message.value.trim()};console.log(l),localStorage.removeItem(a),e.reset()}function n(){const t=JSON.parse(localStorage.getItem(a));t!==null&&(e.elements.email.value=t.email,e.elements.message.value=t.message)}
//# sourceMappingURL=commonHelpers2.js.map
