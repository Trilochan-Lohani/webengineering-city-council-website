document.querySelector("form").addEventListener("submit", function(event) {
    var name = document.getElementById("name").value;
    var wardno = document.getElementById("wardno").value;
    var details = document.getElementById("details").value;

    // Validate Name
    var nameRegex = /^[a-zA-Z\s]+$/;
    if (!name.match(nameRegex)) {
        alert("Please enter a valid name with only alphabets and white spaces.");
        event.preventDefault();
        return;
    }

    // Validate Ward No
    var wardnoRegex = /^[1-9]|[1-2][0-8]$/;
    if (!wardno.match(wardnoRegex)) {
        alert("Please enter a valid ward number between 1 and 28.");
        event.preventDefault();
        return;
    }

    // Validate Details
    if (details.length > 256) {
        alert("Details cannot exceed 256 characters.");
        event.preventDefault();
        return;
    }
});