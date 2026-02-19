//XMLHttpRequest
(() => {
    const xhr = new XMLHttpRequest(),
        $xhr = document.getElementById("xhr"),
        $fragment = document.createDocumentFragment();


    xhr.addEventListener("readystatechange", e => {

        if(xhr.readyState !== 4) return;
        //console.log(xhr);

        if(xhr.status >= 200 && xhr.status < 300) {
            //console.log("éxito");
            //console.log(xhr.responseText);
            let json = JSON.parse(xhr.responseText);
            //console.log(json);

            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.username} -- ${el.email}`;
                $fragment.appendChild($li);
            });

            $xhr.appendChild($fragment);
        }
        else {
            //console.log("error");
            let message = xhr.statusText || "Ocurrió un error";
            $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
        }

        //console.log("este mensaje carga de cualquier forma");
    });

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    xhr.send();
})();

//Fetch
(() => {
    const $fetch = document.getElementById("fetch"),
        $fragment = document.createDocumentFragment();

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(json => {
        //console.log(json);
        json.forEach(el => {
            let $li = document.createElement("li");
            $li.innerHTML = `${el.name} -- ${el.username} -- ${el.email}`;
            $fragment.appendChild($li);
        })
        $fetch.appendChild($fragment);
    })
    .catch(err => {
        //console.log(err);
        let message = err.statusText || "Ha ocurrido un error."
        //console.log(`Error ${err.status}: ${message}`);
    })
    .finally(() => {
        //console.log("Esto se ejecuta de cualquier manera")
    });
})();

//Fetch con funciones asíncronas
(() => {
    const $fetchAsync = document.getElementById("fetch-async"),
        $fragment = document.createDocumentFragment();


    async function getData(){
        try{
            let res = await fetch("https://jsonplaceholder.typicode.com/user"),
                json = await res.json();
            
            if(!res.ok) throw {status: res.status, statusText: res.statusText}

            json.forEach(el => {
                let $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.username} -- ${el.email}`;
                $fragment.appendChild($li);
            })
            $fetchAsync.appendChild($fragment);
        }
        catch(err){
            console.log(err);
            let message = err.statusText || "Ocurrió un error";
            $fetchAsync.innerHTML = `Error ${err.status} : ${message}`;
        }
        finally{
            console.log("Esto se ejecuta independientemente del try... catch")
        }

        
    }

    getData()
})();
