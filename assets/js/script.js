// https://randomuser.me/api/?results=10

const getUsuarios = (async () => {

    //URL base
    const url = 'https://randomuser.me/api/?results=10';

    //Try/catch
    try {
        const response = await fetch(url);
        const { results } = await response.json();

        let lista = document.querySelector('#user-data');

        results.forEach((elemento)=>{
            lista.innerHTML += `<br>
                                <div class="container">
                                    <div class="card text-center" style="width: 30rem;">
                                        <img src="${elemento.picture.large}" class="card-img-top" mr-6 alt="...">
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item">${elemento.name.first} ${elemento.name.last}</li>
                                                <li class="list-group-item">${elemento.email}</li>
                                                 <li class="list-group-item">${elemento.phone}</li>
                                            </ul>
                                        </div>
                                </div>
                                <br>`;
        });
    } 
    catch(err) {
        console.log(err);
    }
    
})();