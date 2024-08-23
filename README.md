# Teste técnico: Clientes e contatos

<!---Esses são exemplos. Veja https://shields.io para outras pessoas ou para personalizar este conjunto de escudos. Você pode querer incluir dependências, status do projeto e informações de licença aqui--->

![GitHub repo size](https://img.shields.io/github/repo-size/uitalorss/teste-tecnico-cliente-contatos?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/uitalorss/teste-tecnico-cliente-contatos?style=for-the-badge)

### 💡 Um pouco sobre o projeto.

Esse projeto é um teste técnico disponibilizado pela empresa Casa de Apostas para uma vaga de Desenvolvedor Fullstack. Mais detalhes sobre o teste está nesse [link](https://github.com/Casa-de-Apostas-Tecnologia/fullstack-challenge).

### Ajustes e melhorias

O projeto está em desenvolvimento e, apesar do teste não cobrir algumas das situações abaixo, eu continuarei as desenvolvendo para meu aprendizado. As próximas atualizações serão voltadas nas seguintes tarefas:

- [x] Desenvolvimento da API do projeto
- [x] Desenvolvimento da interface responsiva da aplicação
- [x] Implementação da interface em um servidor web com Ngnix.
- [x] Implementação do ecossistema da aplicação com Docker 
- [ ] Implementação da cobertura de testes unitários.
- [ ] Implementação dos testes de ponta-a-ponta.
- [ ] Construção da documentação em Swagger

## 💻 Tecnologias utilizadas

- Back-end
    - Node
    - NestJS
- Front-end
    - React
    - Styled-components
- Docker
- Nginx

## 🚀 Instalando o projeto
- Faça o clone do projeto através do comando `git clone https://github.com/uitalorss/teste-tecnico-cliente-contatos.git`

**Você pode pular as etapas de instalação e deploy do projeto caso tenha o Docker e o docker compose instalado em sua máquina, basta configurar as variáveis de ambiente na pasta `backend` e utilizar o comando `docker compose up` para subir todo o ambiente. e acessar a aplicação no link `http://localhost:80`.**

- Para instalar o projeto:
    - Configure as variáveis de ambiente em um arquivo `.env`
    - Acesse as pastas **backend** e **frontend** e rode o comando para instalar as dependências no gerenciador de pacotes de sua preferência. `npm`, `yarn`, `pnpm`, etc.
    - Crie um *database* com o nome do banco de dados que você colocou no parâmetro `DB_NAME` do arquivo `.env`.

## ☕ Usando o projeto
    
Para inicializar o projeto, acesse as pastas **backend** e **frontend** e rode os comando abaixo:
- back-end
    
    npm:

    ```
    npm run migration:run
    npm run start:dev
    ```

    yarn:

    ```
    yarn migration:run
    yarn start:dev
    ```
    
- front-end
    
    npm:

    ```
    npm run dev
    ```

    yarn:

    ```
    yarn dev
    ```
**Lembrando que caso tenha o Docker instalado não é necessário fazer nada disso acima.**

## ✅ Requisitos funcionais

- [x] É possível cadastrar um usuário
- [x] É possível fazer login na aplicação
- [x] É possível atualizar os dados de usuário
- [x] É possível cadastrar um novo contato para o usuário
- [x] É possível visualizar os dados cadastrados
- [x] É possível visualizar os dados dos contatos cadastrados
- [x] É possível atualizar os dados dos contatos
- [x] É possível excluir os contatos
- [x] É possível excluir o usuário
- [x] É possível visualizar os dados de todos os usuários em uma área restrita


## 📫 Contribuindo para o projeto

<!---Se o seu README for longo ou se você tiver algum processo ou etapas específicas que deseja que os contribuidores sigam, considere a criação de um arquivo CONTRIBUTING.md separado--->

Para contribuir com o projeto, siga estas etapas:

1. Bifurque este repositório.
2. Crie um branch: `git checkout -b <nome_branch>`.
3. Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
4. Envie para o branch original: `git push origin <nome_do_projeto> / <local>`
5. Crie a solicitação de pull.

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## 🤝 Colaboradores

Agradecemos às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/15834173?v=4" width="100px;" alt="Foto do Uítalo Souza no GitHub"/><br>
        <sub>
          <b>Uítalo Souza</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

[⬆ Voltar ao topo](#Catalogo-de-filmes)<br>
