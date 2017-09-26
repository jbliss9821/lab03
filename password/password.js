function pass_validate()
{
	var pass1 = document.getElementById("password1").value;
	var pass2 = document.getElementById("password2").value;
	if (pass1.length < 8 || pass2.length < 8)
	{
		alert("Passwords must be at least 8 characters long")
	}
	else if (pass1 == pass2)
	{
		alert("Passwords match.")
	}
	else
	{
		alert("Passwords do not match.")
	}
}