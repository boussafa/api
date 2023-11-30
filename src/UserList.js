

async function get() {
const response =await fetch("https://jsonplaceholder.typicode.com/users");
const data = await response.json()
data.map((user)=>console.log(user.name, user.address));
}
get().then((response)=> console.log("Api Fetched")).catch((error)=> console.error("error404"));
export default get;