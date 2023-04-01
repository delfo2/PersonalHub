export const absoluteIndex = `
    <header>
        <nav class="cabecalho">
            <button class="cabecalho__botao-voltar"></button>
            <h1 class="cabecalho__titulo">PersonalHub</h1>
            <a class="cabecalho__botao-github" href="https://github.com/delfo2"></a>
        </nav>
    </header>
    <main class="principal">
        <article class="principal__cartao">
            <img class="cartao__profile" src="./assets/img/profile.jpg" alt="Foto de Perfil do usuário">
            <h2 class="cartao__nome">Nome usuário</h2>
            <h3 class="cartao__apelido">Apelido</h3>
            <p class="cartao__localizacao">Local</p>
        </article>

        <div class="principal__numbers">
            <p class="numbers__following">Seguindo</p>
            <p class="numbers__followers">Seguidores</p>
        </div>

        <div class="principal__info">
            <p class="info__bio">Bio</p>
            <p class="info__repos">Repositórios</p>
            <p class="info__data">Criado em:</p>
            <div>
                <a class="info__site" href="#">Site</a>
                <a class="info__twitter" href="#">Twitter</a>
            </div>
        </div>
    </main>

    <footer class="rodape">
        <p class="rodape__paragrafo">Created By: <a href="https://github.com/delfo2">Delfo</a></p>
        <p class="rodape__ano">2023</p>
    </footer>
`;
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
