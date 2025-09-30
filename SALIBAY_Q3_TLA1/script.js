document.getElementById('infoForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const pwd = document.getElementById('password').value;
  const confirmPwd = document.getElementById('confirmPassword').value;
  if(pwd !== confirmPwd) {
    alert('Passwords do not match!');
    return;
  }

  const formData = new FormData(this);
  const obj = {};
  formData.forEach((value, key) => {
    if(key !== 'photo') {
      obj[key] = value;
    }
  });

  const photoInput = document.getElementById('photo');
  if(photoInput.files.length > 0) {
    const reader = new FileReader();
    reader.onload = function(event) {
      obj.photoData = event.target.result;
      sessionStorage.setItem('formData', JSON.stringify(obj));
      window.open('output.html', '_blank');
    };
    reader.readAsDataURL(photoInput.files[0]);
  } else {
    sessionStorage.setItem('formData', JSON.stringify(obj));
    window.open('output.html', '_blank');
  }
});