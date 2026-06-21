import { supabase }
from "./supabase.js";

const form =
document.getElementById(
"fundForm"
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

const amount =
Number(
document
.getElementById(
"amount"
)
.value
);

const {
data
}
=
await supabase
.auth
.getSession();

const user =
data.session.user;

const reference =
"MGN-"+
Date.now();

const {
error
}
=
await supabase
.from(
"wallet_transactions"
)
.insert([{

user_id:
user.id,

type:
"deposit",

amount,

status:
"pending",

reference

}]);

if(error){

throw error;

}

message.innerHTML =
"Transaction Created";

}
catch(error){

message.innerHTML =
error.message;

}

});
