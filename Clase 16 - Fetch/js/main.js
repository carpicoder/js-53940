
//! SOLICITUD GET A API
const listado = document.querySelector("#listado");
// let posts = [];

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((resp) => resp.json())
//     .then((data) => {
//         posts = [...data];
//         mostrarPosts(posts);
//     })

    
// function mostrarPosts(notas) {
//     notas.forEach(post => {
//         const li = document.createElement("li");
//         li.innerHTML = `
//             <div>
//                 <h2>${post.title}</h2>
//                 <p>${post.body}</p>
//             </div>
//         `;
//         listado.append(li);
//     });
// }


//! SOLICITUD POST A API
// const usuario = {
//     nombre: "Carpi",
//     edad: 28,
//     pais: "Argentina",
// }


// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: "POST",
//     body: JSON.stringify(usuario),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8'
//     }
// })
//     .then((resp) => resp.json())
//     .then((data) => console.log(data))


//! SOLICITUD GET A NUESTRO JSON
// fetch("/data.json")
//     .then((resp) => resp.json())
//     .then((data) => {
//         data.forEach((usuario) => {
//             const li = document.createElement("li");
//             li.innerHTML = `
//                 <h2>${usuario.nombre}</h2>
//                 <p>Edad: ${usuario.edad}</p>
//                 <p>País: ${usuario.pais}</p>
//             `;
//             listado.append(li);
//         })
//     });

//! ASYNC - AWAIT

// async function pedirPosts() {
//     const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
//     console.log(resp);
// }

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((resp) => resp.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))
//     .finally(() => console.log("Finalizado"))


const pedirPosts = async () => {
    try {
        const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await resp.json();
        
        data.forEach(post => {
            const li = document.createElement("li");
            li.innerHTML = `
                <div>
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                </div>
            `;
            listado.append(li);
        });
    } catch {
        const li = document.createElement("li");
        li.innerText = "No se encontraron posts";
        listado.append(li);
    } finally {
        console.log("Finalizado");
    }
}

pedirPosts();