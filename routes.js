
import {homePage,aboutPage,notFoundPage,adminPage,contactPage} from "./views.js";

export function route(request, response) {
  const { method, url } = request;

  // Rota inicial
  if (method === "GET" && url === "/") {
    response.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8"
    });
    response.end(homePage());
    return;
  }

  // Página sobre
  if (method === "GET" && url === "/sobre") {
    response.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8"
    });
    response.end(aboutPage());
    return;
  }

  // Redirecionamento 
  if (method === "GET" && url === "/antigo") {
    response.writeHead(301, {
      "Location": "/sobre"
    });
    response.end();
    return;
  }

  // Busca
  if (method === "GET" && url.startsWith("/busca")) {
    const endereco = new URL(url, "http://localhost:3000");
    const termo = endereco.searchParams.get("termo");

    if (!termo) {
      response.writeHead(400, {
        "Content-Type": "text/html; charset=utf-8"
      });
      response.end("<h1>Erro 400</h1>");
      return;
    }

    response.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8"
    });
    response.end(
      `<h1>Resultado da busca</h1><p>Você pesquisou por: ${termo}</p>`
    );
    return;
  }

  // Acesso não autorizado
  if (method === "GET" && url === "/admin") {
    response.writeHead(403, {
      "Content-Type": "text/html; charset=utf-8"
    });
    response.end(adminPage());
    return;
  }

  // Contato
  if (url.split("?")[0] === "/contato") {
    if (method !== "GET") {
      response.writeHead(405, {
        "Content-Type": "text/html; charset=utf-8",
        "Allow": "GET"
      });
      response.end("<h1>405 - Método não permitido</h1>");
      return;
    }

    response.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8"
    });
    response.end(contactPage());
    return;
  }

  // Página não encontrada
  response.writeHead(404, {
    "Content-Type": "text/html; charset=utf-8"
  });
  response.end(notFoundPage());
}
