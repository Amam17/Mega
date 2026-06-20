import { supabase } from "./supabase.js";

const form =
document.getElementById(
"registerForm"
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

message.innerHTML=
"Creating account...";

const fullName =
document.getElementById(
"fullName"
).value.trim();

const username =
document.getElementById(
"username"
).value.trim();

const phone =
document.getElementById(
"phone"
).value.trim();

const email =
document.getElementById(
"email"
).value.trim();

const password =
document.getElementById(
"password"
).value;

const referral =
document.getElementById(
"referral"
).value.trim();


/* AUTH */

const {
data,
error
}
=
await supabase.auth.signUp({

email,

password

});

if(error){

throw error;

}

const user =
data.user;


/* PROFILE */

const {
error:
profileError

}
=
await supabase
.from(
"profiles"
)
.insert([{

id:
user.id,

full_name:
fullName,

username,

phone,

email,

wallet_balance:0,

role:
"customer",

referral_code:
referral ||

null

}]);


if(profileError){

throw profileError;

}


message.innerHTML=
"<span class='text-green-600'>Account Created Successfully</span>";

setTimeout(()=>{

window.location.href=
"login.html";

},1500);


}catch(error){

console.error(error);

message.innerHTML=
`<span class='text-red-600'>${error.message}</span>`;

}

}

);
