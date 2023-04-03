import { formatDate } from "./template-string-helpers.js";
import { nullChecker } from "./template-string-helpers.js";
export function applyApiAtHtml(api) {
    return `
        <header>
            <nav class="cabecalho">
                <button class="cabecalho__botao-voltar" data-botao="voltar"></button>
                <h1 class="cabecalho__titulo">PersonalHub</h1>
                <a class="cabecalho__botao-github" href="${api.html_url ? api.html_url : '#'}"></a>
            </nav>
        </header>
        <main class="principal">
            ${api.html_url ? `
                    <article class="principal__cartao">
                        <img class="cartao__profile${nullChecker(api.avatar_url)}" src="${api.avatar_url}" alt="Foto de Perfil do usuário">
                        <h2 class="cartao__nome${nullChecker(api.name)}">${api.name}</h2>
                        <h3 class="cartao__apelido${nullChecker(api.login)}">${api.login}</h3>
                        <p class="cartao__localizacao${nullChecker(api.location)}">${api.location}</p>
                    </article>
                    
                    <div class="principal__numbers">
                        <p class="numbers__following">${api.following}</p>
                        <p class="numbers__followers">${api.followers}</p>
                    </div>
                    
                    <div class="principal__info">
                        <p class="info__bio${nullChecker(api.bio)}">${api.bio}</p>
                        <p class="info__repos">${api.public_repos} Repositórios</p>
                        <p class="info__data${nullChecker(api.created_at)}">Criado em: ${formatDate(api.created_at)}</p>
                        <div>
                            <a class="info__site${nullChecker(api.blog)}" href="${api.blog}">Site</a>
                            <a class="info__twitter${nullChecker(api.twitter_username)}" href="${'https://twitter.com/' + api.twitter_username}">Twitter</a>
                        </div>
                    </div>
                ` : `<h2 class="cartao__nome centralizar">Esse usuário não existe!</h2>`}
        </main>
            
        <footer class="rodape">
            <p class="rodape__paragrafo">Created By: <a href="https://github.com/delfo2">Delfo</a></p>
            <p class="rodape__ano">2023</p>
        </footer>
    `;
}
export const formIndex = `
    <form method="submit" class="formulario" data-formulario="">
        <fieldset class="formulario__campo">
            <h2 class="formulario__titulo">Qual conta você quer acessar?</h2>
            <div class="formulario__aria">
                <input type="text" id="nickname" required
                    data-input title="Digite um nickname de um usuário do GitHub" placeholder="Exemplo: delfo2">
                <label for="nickname">Nome</label>
                <button type="submit" data-botao="enviar">Procurar</button>
            </div>
        </fieldset>
    </form>
    <script src="assets/js/index.js" type="module"></script>
    <script src="assets/js/update/dom-updater.js" type="module"></script>
`;
