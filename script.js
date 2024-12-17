document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const location = document.getElementById('location').value.trim();
    const price = document.getElementById('price').value.trim();
    const type = document.getElementById('type').value;

    if (!location || !price) {
        alert('Please fill in all fields!');
        return;
    }

    alert(`Searching for ${type || 'all types'} in ${location} under GHS ${price}`);
    // Implement search functionality here (e.g., fetch results from a server)
});
