export function applyApiAtHtml(api) {
    return `
        <header>
            <nav class="cabecalho">
                <button class="cabecalho__botao-voltar" data-botao="voltar"></button>
                <h1 class="cabecalho__titulo">PersonalHub</h1>
                <a class="cabecalho__botao-github" href="${api.login}"></a>
            </nav>
        </header>
        <main class="principal">
            <article class="principal__cartao">
                <img class="cartao__profile" src="${api.avatar_url}" alt="Foto de Perfil do usuário">
                <h2 class="cartao__nome">${api.name}</h2>
                <h3 class="cartao__apelido">${api.login}</h3>
                <p class="cartao__localizacao">${api.location}</p>
            </article>
            
            <div class="principal__numbers">
                <p class="numbers__following">${api.following}</p>
                <p class="numbers__followers">${api.followers}</p>
            </div>
            
            <div class="principal__info">
                <p class="info__bio">${api.bio}</p>
                <p class="info__repos">${api.public_repos}</p>
                <p class="info__data">Criado em:${api.created_at}</p>
                <div>
                    <a class="info__site" href="${api.html_url}">Site</a>
                    <a class="info__twitter" href="${'https://twitter.com/' + api.twitter_username}">Twitter</a>
                </div>
            </div>
            </main>
            
            <footer class="rodape">
                <p class="rodape__paragrafo">Created By: <a href="https://github.com/delfo2">Delfo</a></p>
                <p class="rodape__ano">2023</p>
            </footer>
    `;
}
export const formIndex = `
            <form method="submit" class="formulario">
            <fieldset class="formulario__campo">
            <h2 class="formulario__titulo">Qual conta você quer acessar?</h2>
            <div class="formulario__aria">
                <input type="text" id="nickname" required
                    title="Digite um nickname de um usuário do GitHub" placeholder="Exemplo: delfo2">
                <label for="nickname">Nome</label>
                <button type="submit">Procurar</button>
            </div>
        </fieldset>
    </form>
`;
