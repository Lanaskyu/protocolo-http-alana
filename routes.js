import {homePage, aboutPage, notFoundPage, adminPage, contactPage} from "./src/viwes.js"

export function route(request, response) {
    //rota (/)

  if (request.method === 'GET' && request.url === '/') {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(homePage());
    return;
  }

  if (res.method === 'GET' && req.url==='sobre') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(aboutPage());

    return;
  }

  if (res.method === 'GET' && req.url==='antigo') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(aboutPage());

    return;
  }

  if (req.url.startsWith("/busca")) {
        if (req.url.includes("?termo=")) {
            const termo = req.url.split("?termo=")[1];

            if (termo) {
                res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
                res.end(`<h1>Resultado da busca</h1><p>Você pesquisou por: ${termo}</p>`);
                console.log(`${req.method} ${req.url} 200`);
                return;
            }
        }

    }

        if (res.method === 'GET' && req.url==='admin') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(aboutPage());

    return;
  }

  if (res.method === 'GET' && req.url==='contato') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(aboutPage());

    return;
  }

  res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" })
    res.end(notFoundPage())
    console.log(`${req.method} ${req.url} 404`)
}