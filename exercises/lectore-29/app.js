
class AuthException extends Error {
  constructor(code, message) {
    const mess = message ? `${code}:${message}` : code;
    super(mess);       
    this.name = code;
    this.code = code;
    this.message = mess;   
  }  
  toString() {
    return this.message;
  }
}

let checkAuth=document.querySelector('.check-auth')


let isAuth = (auth) => auth ?? false;
checkAuth.addEventListener('click', () => {
  try {
    if (!isAuth) {
      throw new AuthException('FORBIDDEN', 'You don\'t have access to this page')
    }
    window.open('./success.html')
  
  } catch (e) {
    console.error(e);
    console.error(e.toString());
    console.error(e.code==='FORBIDDEN');
 
  }
});

let dialogBoxId=document.getElementById("dialogBox");



function showDialog(e){
  dialogBoxId.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
    }
  });
  
  dialogBoxId.showModal();
}

function closeDialog(){
  dialogBoxId.close(); 
}

