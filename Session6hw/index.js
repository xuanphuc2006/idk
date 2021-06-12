const defaultAccount = {
    email: 'mindx@email.com',
    password: '12345678'
  }
  localStorage.setItem("user", JSON.stringify(defaultAccount))
  
  const form = document.getElementById("myForm")
  
  function displayErrorMessage(title){
    Swal.fire({
      title,
      icon: 'error',
      confirmButtonColor: '#3ac162'
    })
  }
  
  function displaySuccessMessage(title){
    Swal.fire({
      title,
      icon: 'success',
      showConfirmButton: false
    })
  }
  
  function handleSubmitForm(e){
    e.preventDefault()
  
    // Lấy thông tin đăng nhập của người dùng từ form input (email và password)
  const emailInput = document.getElementById("mail").value
  const passwordInput = document.getElementById("password").value

    // Lấy thông tin account có sẵn trong localStorage có key là 'user'
  localStorage.getItem("user")
  // So sánh email người dùng nhập và email đúng của account, nếu không khớp thì show error "User not found!"" và kết thúc hàm
  // So sánh password người dùng nhập và password đúng, nếu không khớp thì show error "Password does not match!" và kết thúc hàm
  // Nếu cả email và password đều trùng thì show success message "Welcome back!"

  if(emailInput != defaultAccount.email){
    alert("User not found!")
  }else if(passwordInput != defaultAccount.password){
    alert("Password does not match!")
  }else{
    alert("Welcome back!")
  }
  }
  
  form.onsubmit = handleSubmitForm