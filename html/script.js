const allUsers=document.getElementsByClassName('users')[0];
const message=document.getElementsByClassName('message')[0];
const searchField=document.getElementsByName('search')[0]; 
var allUserData;
searchField.addEventListener('keyup',function(){
   const value= this.value;
   const filteredUsers=allUserData.filter((user)=>{
    return user.firstName.toLowerCase().startsWith(value);
   })
   removeotherusers();
   loadUsers(filteredUsers);
   showUsers();
});

function removeotherusers(){
    allUsers.innerHTML='';
}

fetch("https://dummyapi.io/data/v1/user",{
    headers:{
        "app-id":"64c02a1cfeb3de7ea02b75e3"
    }})
.then(response=>response.json())
.then(data=>{
    allUserData=data.data;
    loadUsers(data.data);
    hideloadingmessage();
    showUsers();
 } );
 function hideloadingmessage(){
    message.style.display="none";
 }
 function showUsers(){
    allUsers.style.display="flex";
 }

function loadUsers(users){
    users.forEach((user) => {
        const userscard=createUserCard(user);
        allUsers.appendChild(userscard);
        
    });

}

function createUserCard(user){
    const userDiv=document.createElement('div');
    userDiv.className="user";
    userDiv.id=user.id;

    const userImageDiv=document.createElement('div');
    userImageDiv.className="user-image";
    const imageElement=document.createElement('img');
    imageElement.setAttribute("src",user.picture);
    userImageDiv.appendChild(imageElement);
    const userDetailsDiv=document.createElement('div');
    userDetailsDiv.className="user-details";
    const heading=document.createElement('h1');
    heading.textContent='${user.title} ${user.firstName} ${user.lastName}';
    userDetailsDiv.appendChild(heading);
    const button=document.createElement('button');
    button.textContent="See Complete Details";
    userDiv.appendChild(userImageDiv);
    userDiv.appendChild(userDetailsDiv);
    userDiv.appendChild(button);
    return userDiv;



}



