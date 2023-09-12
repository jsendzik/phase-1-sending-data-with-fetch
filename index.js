// Add your code here

const bodyText = document.querySelector('body');

function submitData(name, email) {
    const configurationObject = {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "accept": "application/json"
        },
        body: JSON.stringify({
            name: `${name}`,
            email: `${email}`
        }),
    };
    console.log(configurationObject.headers);
    return fetch("http://localhost:3000/users", configurationObject)
    .then((response) => response.json())
    .then((data) => {
        bodyText.innerHTML = data.id
    })
    .catch(error => {
        bodyText.innerHTML = error.message
    });
   
}
