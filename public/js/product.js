const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const productInput = document.getElementById('product');
    const productName = productInput.value.trim();

    if (!productName) {
        alert('Please enter a product name');
        return;
    }

    try {
        const response = await axios.post('/products', {
            productName: productName
        });

        console.log('Server response:', response.data);
        alert('Product added successfully');
        productInput.value = '';
    } catch (error) {
        console.error('Error submitting product:', error);
    }
});