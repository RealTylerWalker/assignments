const form = document.form;

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const firstName = form.firstName.value;
  const lastName = form.lastName.value;
  const age = form.age.value;
  const gender = form.gender.value;
  const destination = form.destination.value;

  const checkedRestrictions = [];

  for (let i = 0; i < form.restrictions.length; i++) {
    if (form.restrictions[i].checked) {
      checkedRestrictions.push(form.restrictions[i].value);
    }
  }

  const formContent = `First Name: ${firstName}\nLast Name: ${lastName}\nAge: ${age}\nGender: ${gender}\nDestination: ${destination}\nHealth Restrictions: ${checkedRestrictions}`;
  alert(formContent);
});
