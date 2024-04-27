Installing json-server
> npm install -g json-server

running json-server
> json-server --watch src/assets/data/data.json

//supposedly the json server will handle ids if you don't send them,
//but this is means having 2 types? 
//haven't figured out how to send NewUser type (sans ID) as the response will then be
//expected to be newUser and then we can't see ID presumably


//ids in the data.json file seem to need to be strings to be able to get by id