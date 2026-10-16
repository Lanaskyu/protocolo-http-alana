
function layout(title, content) {
  return `
    <!DOCTYPE html>
    <html lang="pt-br">
      <head><meta charset="UTF-8"><title>${title}</title></head>
      <body>
        <nav>
          <a href="/">Home</a>
          <a href="/sobre">Sobre</a>
          <a href="/contato">Contato</a>
        </nav>
        ${content}
      </body>
    </html>
  `;
}

export function homePage() {
  return layout('Home', '<h1>Seja bem vindo</h1>');
}

export function aboutPage() {
     return layout('Sobre', '<h1>Sobre nós</h1>');

}
  
export function contactPage() {
     return layout('Contato', '<h1>Entre em contato</h1>');

}



export function adminPage() {
  return layout('Admin', '<h1>403 - Acesso não autorizado</h1>');
}

export function notFoundPage() {
  return layout('Not found', '<h1>404- Página não encontrada</h1>');
}