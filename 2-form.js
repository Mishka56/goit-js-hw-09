import"./assets/modulepreload-polyfill-B5Qt9EMX.js";const t=document.querySelector(".feedback-form");let e={email:"",message:""};const l=localStorage.getItem("feedback-form-state");l&&(e=JSON.parse(l),t.elements.email.value=e.email,t.elements.message.value=e.message);t.addEventListener("input",a=>{e.email=t.elements.email.value,e.message=t.elements.message.value,localStorage.setItem("feedback-form-state",JSON.stringify(e))});const s=t.querySelector("input");s.addEventListener("click",()=>s.setAttribute("placeholder","Type area"));t.addEventListener("submit",a=>{if(a.preventDefault(),e.email.trim()===""||e.message.trim()==="")return alert("Fill please all fields");console.log(e),localStorage.removeItem("feedback-form-state"),e={email:"",message:""},t.elements.email.value="",t.elements.message.value=""});
//# sourceMappingURL=2-form.js.map
