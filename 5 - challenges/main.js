// QUESTION 1 

function checkYear(year) {
    return new Promise(function(resolve, reject) {
        if (year > 18) {
            resolve('Over 18 years old');
        } else {
            reject('Under 18 years');
        }

    });
}

checkYear(10) 
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    });


// QUESTION 2 and 3

var listElement = document.querySelector('#app ul');
var buttonElement = document.querySelector('#app button');

function getUser() {
    var inputElement = document.querySelector('#app #user').value;
    listElement.innerHTML = '';
    
    axios.get(`https://api.github.com/users/${inputElement}/repos`) 
        .then(function(response) {
            var load = document.createElement('li');
            var textLoad = document.createTextNode('Loading');

            load.appendChild(textLoad);
            listElement.appendChild(load);

            if (response.request.readyState == 4 && response.request.status == 200) {
                var repositories = response.data;
                inputElement.value = '';
                listElement.innerHTML = '';
    
                for (let repository of repositories) {
                    var repo = document.createElement('li');
                    var nameRepository = document.createTextNode(repository.name);
    
                    repo.appendChild(nameRepository);
                    listElement.appendChild(repo);
                }
            } 
        })
        .catch(function(error) {
            alert('User not found');
    });
}

