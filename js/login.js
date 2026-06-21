import { supabase } from "./supabase.js";

const form =
document.getElementById(
"loginForm"
);

const message =
document.getElementById(
"message"
);

form.addEventListener(
"submit",
async(e)=>{

e.preventDefault();

try{

message.innerHTML =
"Logging in...";

const email =
document
.getElementById(
"email"
)
.value
.trim();

const password =
document
.getElementById(
"password"
)
.value;

const {
data,
error
}
=
await supabase
.auth
.signInWithPassword({

email,
password

});

if(error){

throw error;

}

message.innerHTML =
"<span class='text-green-600'>Login Successful</span>";

setTimeout(()=>{

window.location.href =
"dashboard.html";

},1000);

}catch(error){

console.error(error);

message.innerHTML =
`<span class="text-red-600">${error.message}</span>`;

}

});
