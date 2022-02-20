document.getElementById('login-submit'),addEventListener('click',function(){
//get email
    const emailFeild = document.getElementById('user-email');
    const userEmail = emailFeild.value; 
    
  //get password
 
  const passFeild = document.getElementById('user-password');
  const userPassword = passFeild.value;
  
  if(userEmail=='bhuiyanaman71@gmail.com' && userPassword=='amanbhuiyan'){
    window.location.href = 'banking.html';
  }
  else {
    console.log('Invalid User');
  }
}) 
