
function requireAuth(){
  if(localStorage.getItem('serno_logged_in')!=='true'){
    window.location.replace('Login.html');
    return false;
  }
  return true;
}
function logout(){
  localStorage.removeItem('serno_logged_in');
  window.location.replace('Login.html');
}
function getUsers(){try{return JSON.parse(localStorage.getItem('serno_users')||'[]')}catch(e){return[]}}
function setUsers(u){localStorage.setItem('serno_users',JSON.stringify(u))}
function loginUser(e){
  e.preventDefault();
  const email=document.getElementById('email').value.trim().toLowerCase();
  const password=document.getElementById('password').value;
  const msg=document.getElementById('msg');
  const users=getUsers();
  const ok=(users.length===0 && password.length>0) || users.some(u=>u.email===email && u.password===password);
  if(ok){localStorage.setItem('serno_logged_in','true');localStorage.setItem('serno_user',email);window.location.replace('Home.html')}
  else{msg.textContent='Invalid email or password.';msg.style.color='#ff6b9f'}
}
function registerUser(e){
  e.preventDefault();
  const name=document.getElementById('name').value.trim();
  const email=document.getElementById('email').value.trim().toLowerCase();
  const password=document.getElementById('password').value;
  const confirm=document.getElementById('confirm').value;
  const msg=document.getElementById('msg');
  if(password.length<6){msg.textContent='Password must contain at least 6 characters.';msg.style.color='#ff6b9f';return}
  if(password!==confirm){msg.textContent='Passwords do not match.';msg.style.color='#ff6b9f';return}
  const users=getUsers();
  if(users.some(u=>u.email===email)){msg.textContent='Account already exists. Please login.';msg.style.color='#ff6b9f';return}
  users.push({name,email,password});setUsers(users);
  localStorage.setItem('serno_logged_in','true');localStorage.setItem('serno_user',email);
  window.location.replace('Home.html');
}
function submitContact(e){
  e.preventDefault();
  const msg=document.getElementById('msg');
  msg.textContent='✓ Message Sent Successfully!';
  msg.style.color='#00ff99';
  e.target.reset();
}
function joinTeam(name){
  alert('Team request sent for '+name+'!');
}
function registerTournament(name){
  alert('Tournament registration opened for '+name+'!');
}
