
document.querySelector('.switch input[type="checkbox"]').addEventListener('change', function() 
{
    const prices = document.querySelectorAll('.price');

    prices.forEach(price => 
        {
        const annualPrice = price.getAttribute('data-annual');
        const monthlyPrice = price.getAttribute('data-monthly');

        if (this.checked) 
            {
            price.innerHTML = `$${monthlyPrice}`;
        } else 
        {
            price.innerHTML = `$${annualPrice}`;
            }
        });
    });
