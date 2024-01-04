
// A mock function to mimic making an async request for data
export function  createUser(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch("/auth/signup",{
      method:'POST',
      body: JSON.stringify(userData),
      headers:{
        "content-type":"application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    resolve({ data });
  });
}
export function  checkUser(userData) {
  return new Promise(async (resolve, reject) => {
    const response = await fetch("/auth/login",{
      method:'POST',
      body: JSON.stringify(userData),
      headers:{
        "content-type":"application/json",
      },
    });
    const data = await response.json();
    if (response.ok) {
      resolve({ data });
    } else {
      const errorMessage = data.message;
      reject(new Error(errorMessage));
    }
  });
}
export function  signOut(id) {
  return new Promise(async (resolve) => {
  resolve({data : 'success'})
  });
}


