var myPromise = function() {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();

        xhr.open('GET', 'https://api.github.com/users/rafaeloliverone');
        xhr.send(null);

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Error in the request');
                }
            } 
        }
    });
}

myPromise() 
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    });

    
// with axios

axios.get('https://api.github.com/users/rafaeloliverone') 
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    });