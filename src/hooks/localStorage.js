export const setUser =(user)=>{
  localStorage.setItem('user',JSON.stringify(user));
}

export const getUser=()=>{
  const user=localStorage.getItem('user');
  return user===null ? null :JSON.parse(user);
}

export const removeUserFromLocal=()=>{
  localStorage.clear();
}
