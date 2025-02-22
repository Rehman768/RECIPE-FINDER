document.addEventListener('DOMContentLoaded', () => {
    const uploadImageButton = document.getElementById('uploadImageButton');
    const fileInput = document.getElementById('fileInput');

    uploadImageButton.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            // Handle the file upload process here
            console.log('File selected:', file.name);
            // You can add your file upload logic here
        }
    });
});
