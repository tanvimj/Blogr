function validateEmail() 
{
    const email = document.getElementById('emailInput').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (emailPattern.test(email)) 
        {
        document.getElementById('signupForm').style.display = 'none';
        document.getElementById('successMessage').style.display = 'block';
        document.getElementById('userEmail').textContent = email;
    } else 
    {
        alert("Please enter a valid email address.");
    }
}

function dismissMessage() 
{
    document.getElementById('successMessage').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
}
