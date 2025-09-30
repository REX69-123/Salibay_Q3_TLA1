window.onload = function() {
  const outputDiv = document.getElementById('outputContainer');
  const data = sessionStorage.getItem('formData');
  if (!data) {
    outputDiv.innerHTML = '<p>No submitted data found.</p>';
    return;
  }
  const formData = JSON.parse(data);

  let html = '';

  if(formData.photoData) {
    html += '<p><strong>Photo:</strong><br><img src="' + formData.photoData + '" alt="Photo" class="preview"></p>';
  } else {
    html += '<p><strong>Photo:</strong> No photo uploaded</p>';
  }

  const fields = [
    { label: 'First Name', name: 'firstName' },
    { label: 'Middle Name', name: 'middleName' },
    { label: 'Last Name', name: 'lastName' },
    { label: 'Date of Birth', name: 'dob' },
    { label: 'Birth Location', name: 'birthLocation' },
    { label: 'Sex/Gender', name: 'gender' },
    { label: 'Civil Status', name: 'civilStatus' },
    { label: 'Nationality', name: 'nationality' },
    { label: 'Religion', name: 'religion' },
    { label: 'Contact Number', name: 'contactNumber' },
    { label: 'Email Address', name: 'email' },
    { label: 'Home Address', name: 'homeAddress' },
    { label: 'Emergency Contact Name', name: 'emergencyName' },
    { label: 'Emergency Contact Relationship', name: 'emergencyRelationship' },
    { label: 'Emergency Contact Number', name: 'emergencyContactNumber' },
    { label: 'Username', name: 'username' }
  ];

  fields.forEach(field => {
    let val = formData[field.name] || '';
    if(field.name === 'homeAddress') {
      val = val.replace(/\n/g, '<br>');
    }
    html += '<p><strong>' + field.label + ':</strong> ' + val + '</p>';
  });

  outputDiv.innerHTML = html;
};