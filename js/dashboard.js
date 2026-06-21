import { supabase } from "./supabase.js";

const welcomeName =
document.getElementById("welcomeName");

const walletBalance =
document.getElementById("walletBalance");

async function loadDashboard(){

const {
data:{session}
}
=
await supabase.auth.getSession();

if(!session){

window.location.href =
"login.html";

return;

}

const user =
session.user;

const {
data,
error
}
=
await supabase
.from("profiles")
.select("*")
.eq("id",user.id)
.single();

if(error){

console.error(error);

return;

}

welcomeName.textContent =
`Welcome, ${data.full_name}`;

walletBalance.textContent =
`₦${Number(
data.wallet_balance || 0
).toLocaleString()}`;

}

loadDashboard();


document
.getElementById("logoutBtn")
.addEventListener(
"click",
async()=>{

await supabase.auth.signOut();

window.location.href =
"login.html";

}
);
