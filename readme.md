<h1>Bem vindos ao projeto Games Library API</h1>

<h1>Sumário</h1>
<ul>
  <li><a href="#objective">Objetivo</a></li>
  <li><a href="#development">Desenvolvimento</a></li>
  <li><a href="#deploy">Deploy</a></li>
  <li>
    <a href="#endpoints">Endpoints</a>
    <ul>
      <li><a href="#register">Registrar</a></li>
      <li><a href="#login">Login</a></li>
      <li><a href="#add-category">Adicionar nova categoria</a></li>
      <li><a href="#get-categories">Listar todas as categorias</a></li>
      <li><a href="#add-games">Adicionar novo jogo</a></li>
      <li><a href="#get-games">Listar todos os jogos</a></li>
      <li><a href="#del-game">Deletar um jogo</a></li>
      <li><a href="#update-game">Atualizar um jogo</a></li>
      <li><a href="#game-by-id">Listar jogo específico</a></li>
    </ul>
  </li>
  <li><a href="#contacts">Contatos</a></li>
</ul>

<h1 id="objective">Objetivo</h1>
<p>Esse projeto consiste em uma api para armazenar e buscar dados sobre jogos cadastrados por usuários em um banco de dados (MongoDB).</p>

<h1 id="development">Desenvolvimento</h1>
<p>Para desenvolver esse projeto utilizei as seguintes tecnologias:</p>
<ul>
  <li>Express</li>
  <li>DotEnv</li>
  <li>Http-Status-Codes</li>
  <li>Joi</li>
  <li>JsonWebToken</li>
  <li>MongoDB</li>
  <li>Nodemon</li>
</ul>

<h1 id="deploy">Deploy</h1>
<p>Essa api foi publicada no <a href="https://render.com/" target="_blank">Render</a>, um serviço de hospedagem de sites e serviços na nuvem, você poderá acessar a api no link a seguir:</p>
<a>https://games-library-api.onrender.com/games</a>

<h1 id="endpoints">Endpoints</h1>
<h2 id="register">POST: /user/register</h2>
<h3>Registra um novo usuário!</h3>
<hr />
<p>Exemplo de body:</p>
<hr />
<pre>
  {
    "username": | string, min = 5, max = 25, necessário |
    "email": | email valido, necessário |
    "password": | Uma letra maiúscula, uma minúscula, um número, e um caracter especial, min = 8, max = 12 |
  }
</pre>
<p>Exemplos de respostas:</p>
<hr />
<p>Status: 500 Internal Server Error</p>
<pre>
  {
    "message": "Internal server error"
  }
</pre>
<hr />
<p>Status: 400 Bad Request</p>
<pre>
  {
    "message": "\"field\" is required" ou mensagem de campo inválido
  }
</pre>
<hr />
<p>Status: 400 Bad Request</p>
<pre>
  {
    "message": "User already registered"
  }
</pre>
<hr />
<p>Status: 201 Created</p>
<pre>
  {
    "newUser": {
      "username": "Nome de usuário",
      "email": "Email do usuário",
      "_id": "Id do usuário
    }
  }
</pre>

<hr />

<h2 id="login">POST: /user/login</h2>
<h3>Loga em uma conta cadastrada (consegue o token de acesso)</h3>
<hr />
<p>Exemplo de body</p>
<pre>
  {
    "email": | email valido, necessário |
    "password": | Uma letra maiúscula, uma minúscula, um número, e um caracter especial, min = 8, max = 12 |
  }
</pre>
<p>Exemplos de respostas</p>
<hr />
<p>Status: 500 Internal Server Error</p>
<pre>
  {
    "message": "Internal server error"
  }
</pre>
<hr />
<p>Status: 400 Bad Request</p>
<pre>
  {
    "message": "\"field\" is required" ou mensagem de campo inválido
  }
</pre>
<hr />
<p>Status: 400 Bad Request</p>
<pre>
  {
    "message": "Invalid email or password"
  }
</pre>
<hr />
<p>Status: 200 ok</p>
<pre>
  {
    "token": | token de acesso |
  }
</pre>

<hr />

<h2 id="add-category">POST: /category</h2>
<h3>Adiciona um nova categoria<h3>
<hr />
<p>Para esse endpoint é necessário enviar um token de acesso nos headers da requisição</p>
<p>Exemplo:</p>
<pre>
  {
    "authorization": | token |
  }
</pre>
<hr />
<p>Exemplo de body</p>
<pre>
  {
    "category": | string, min = 3, max = 35, necessário
  }
</pre>
<p>Exemplos de respostas</p>
<hr />
<p>Status: 500 Internal Server Error</p>
<pre>
  {
    "message": "Internal server error"
  }
</pre>
<hr />
<p>Status: 401 Unauthorized</p>
<pre>
  {
    "message": "Invalid token"
  }
</pre>
<hr />
<p>Status: 401 Unauthorized</p>
<pre>
  {
    "message": "token not found"
  }
</pre>
<hr />
<p>Status: 400 Bad Request</p>
<pre>
  {
    "message": "\"field\" is required" ou mensagem de campo inválido
  }
</pre>
<hr />
<p>Status: 201 Created</p>
<pre>
  {
    "category": {
      "category": "Categoria adicionada",
      "user": "Usuário que cadastrou a categoria",
      "_id": "Id da categoria"
    }
  }
</pre>

<hr />

<h2 id="get-categories">GET: /category</h2>
<h3>Lista todas as categorias que o usuário cadastrou</h3>
<hr />
<p>Para esse endpoint é necessário enviar um token de acesso nos headers da requisição</p>
<p>Exemplo:</p>
<pre>
  {
    "authorization": | token |
  }
</pre>
<hr />
<p>Exemplos de respostas</p>
<hr />
<p>Status: 500 Internal Server Error</p>
<pre>
  {
    "message": "Internal server error"
  }
</pre>
<hr />
<p>Status: 401 Unauthorized</p>
<pre>
  {
    "message": "Invalid token"
  }
</pre>
<hr />
<p>Status: 401 Unauthorized</p>
<pre>
  {
    "message": "token not found"
  }
</pre>
<hr />
<p>Status: 200 Ok</p>
<pre>
  {
    "categories": [
      {
        "_id": "Id da categoria",
        "category": "Categoria cadastrada",
        "user": "Usuário que cadastrou"
      },
      {
        "_id": "Id da categoria",
        "category": "Categoria cadastrada",
        "user": "Usuário que cadastrou"
      }
    ]
  }
</pre>

<hr />

<h2 id="add-games">POST: /games</h2>
<h3>Cadastra um novo game</h3>
<hr />
<p>Para esse endpoint é necessário enviar um token de acesso nos headers da requisição</p>
<p>Exemplo:</p>
<pre>
  {
    "authorization": | token |
  }
</pre>
<hr />
<p>Exemplo de body</p>
<pre>
  {
    "title": | string, min = 3, max = 35, necessário |,
    "releaseYear": | string, no formato dd/mm/aaaa, necessário |,
    "sinopse": | string, min = 10, max = 1000, necessário |,
    "developer": | string, min = 5, necessário |,
    "publisher": | string, min = 5, necessário |,
    "platforms": [
      | string, min = 5, necessário |
    ]
    "trailerURL": | url válida, necessário|,
    "metacritic": {
      "metascore": | number, necessário |,
      "userscore": | number, necessário |
    },
    "image": | string, url válida, necessário |,
    "backdrop": | string, url válida, necessário |,
    "category": | string, min = 3, max = 35, necessário |
  }
</pre>
<p>Exemplos de respostas</p>
<hr />
<p>Status: 500 Internal Server Error</p>
<pre>
  {
    "message": "Internal server error"
  }
</pre>
<hr />
<p>Status: 401 Unauthorized</p>
<pre>
  {
    "message": "Invalid token"
  }
</pre>
<hr />
<p>Status: 401 Unauthorized</p>
<pre>
  {
    "message": "token not found"
  }
</pre>
<hr />
<p>Status: 400 Bad Request</p>
<pre>
  {
    "message": "\"field\" is required" ou mensagem de campo inválido
  }
</pre>
<hr />
<p>Status: 201 Created</p>
<pre>
  {
    "newGame": {
      "_id": "Id do game",
      "title": "Nome do game",
      "releaseYear": "Data de lançamento do game",
      "sinopse": "Sinopse do game",
      "developer": "Desenvolvedora do game",
      "publisher": "Publicadora do game",
      "platforms": [
        "Plataformas para qual o game foi lançado",
      ],
      "trailerURL": "Url para acessar o trailer do game",
      "metacritc" {
        "metascore": "Nota do game pelos criticos do metacritic",
        "userscore": "Nota do game pelos usuários do metacritic",
      },
      "user": "Usuário que cadastrou o game",
      "image": "Url da imagem do game",
      "backdrop": "Url da imagem de backdrop do game",
      "category": "Categoria do game"
    }
  }
</pre>

<hr />

<h2 id="get-games">GET: /games</h2>
<h3>Lista todos os games cadastrados</h3>
<hr />
<p>Para esse endpoint é necessário enviar um token de acesso nos headers da requisição</p>
<p>Exemplo:</p>
<pre>
  {
    "authorization": | token |
  }
</pre>
<p>Exemplos de respostas</p>
<hr />
<p>Status: 500 Internal Server Error</p>
<pre>
  {
    "message": "Internal server error"
  }
</pre>
<hr />
<p>Status: 401 Unauthorized</p>
<pre>
  {
    "message": "Invalid token"
  }
</pre>
<hr />
<p>Status: 401 Unauthorized</p>
<pre>
  {
    "message": "token not found"
  }
</pre>
<hr />
<p>Status: 200 Ok</p>
<pre>
  {
    "games": [
      {
        "_id": "Id do game 1",
        "title": "Nome do game 1",
        "releaseYear": "Data de lançamento do game 1",
        "sinopse": "Sinopse do game 1",
        "developer": "Desenvolvedora do game 1",
        "publisher": "Publicadora do game 1",
        "platforms": [
          "Plataformas para qual o game 1 foi lançado",
        ],
        "trailerURL": "Url para acessar o trailer do game 1",
        "metacritc" {
          "metascore": "Nota do game 1 pelos criticos do metacritic",
          "userscore": "Nota do game 1 pelos usuários do metacritic",
        },
        "user": "Usuário que cadastrou o game 1",
        "image": "Url da imagem do game 1",
        "backdrop": "Url da imagem de backdrop do game 1",
        "category": "Categoria do game 1"
      }
      {
        "_id": "Id do game 2",
        "title": "Nome do game 2,
        "releaseYear": "Data de lançamento do game 2",
        "sinopse": "Sinopse do game 2",
        "developer": "Desenvolvedora do game 2",
        "publisher": "Publicadora do game 2",
        "platforms": [
          "Plataformas para qual o game 2 foi lançado",
        ],
        "trailerURL": "Url para acessar o trailer do game 2",
        "metacritc" {
          "metascore": "Nota do game 2 pelos criticos do metacritic",
          "userscore": "Nota do game 2 pelos usuários do metacritic",
        },
        "user": "Usuário que cadastrou o game 2",
        "image": "Url da imagem do game 2",
        "backdrop": "Url da imagem de backdrop do game 2",
        "category": "Categoria do game 2"
      }
      {
        "_id": "Id do game 3",
        "title": "Nome do game 3,
        "releaseYear": "Data de lançamento do game 3",
        "sinopse": "Sinopse do game 3",
        "developer": "Desenvolvedora do game 3",
        "publisher": "Publicadora do game 3",
        "platforms": [
          "Plataformas para qual o game 3 foi lançado",
        ],
        "trailerURL": "Url para acessar o trailer do game 3",
        "metacritc" {
          "metascore": "Nota do game 3 pelos criticos do metacritic",
          "userscore": "Nota do game 3 pelos usuários do metacritic",
        },
        "user": "Usuário que cadastrou o game 3",
        "image": "Url da imagem do game 3",
        "backdrop": "Url da imagem de backdrop do game 3",
        "category": "Categoria do game 3"
      }
      ...
    ]
  }
</pre>

<hr />

<h2 id="del-game">DEL: /games/:id</h2>
<h3>Deleta um game pelo seu id</h3>
<hr />
<p>Para esse endpoint é necessário enviar um token de acesso nos headers da requisição</p>
<p>Exemplo:</p>
<pre>
  {
    "authorization": | token |
  }
</pre>
<p>Exemplos de respostas</p>
<hr />
<p>Status: 500 Internal Server Error</p>
<pre>
  {
    "message": "Internal server error"
  }
</pre>
<hr />
<p>Status: 401 Unauthorized</p>
<pre>
  {
    "message": "Invalid token"
  }
</pre>
<hr />
<p>Status: 401 Unauthorized</p>
<pre>
  {
    "message": "token not found"
  }
</pre>
<hr />
<p>Status: 404 Not Found</p>
<pre>
  {
    "message": "Game not found!"
  }
</pre>
<hr />
<p>Status: 200 Ok</p>
<pre>
  {
    "message": "Game successfully deleted!"
  }
</pre>

<hr />

<h2 id="update-game">POST: /games/:id</h2>
<h3>Atualiza um game pelo seu id</h3>
<hr />
<p>Para esse endpoint é necessário enviar um token de acesso nos headers da requisição</p>
<p>Exemplo:</p>
<pre>
  {
    "authorization": | token |
  }
</pre>
<p>Exemplos de respostas</p>
<hr />
<p>Status: 500 Internal Server Error</p>
<pre>
  {
    "message": "Internal server error"
  }
</pre>
<hr />
<p>Status: 401 Unauthorized</p>
<pre>
  {
    "message": "Invalid token"
  }
</pre>
<hr />
<p>Status: 401 Unauthorized</p>
<pre>
  {
    "message": "token not found"
  }
</pre>
<hr />
<p>Status: 400 Bad Request</p>
<pre>
  {
    "message": | mensagem de campo inválido |
  }
</pre>
<hr />
<p>Status: 404 Not Found</p>
<pre>
  {
    "message": "Game not found!"
  }
</pre>
<hr />
<p>Status: 200 Ok</p>
<pre>
  {
    "message": "Game successfully updated!"
  }
</pre>

<hr />

<h2 id="game-by-id">GET: /games/:id</h2>
<h3>Lista um game pelo seu id</h3>
<hr />
<p>Para esse endpoint é necessário enviar um token de acesso nos headers da requisição</p>
<p>Exemplo:</p>
<pre>
  {
    "authorization": | token |
  }
</pre>
<p>Exemplos de respostas</p>
<hr />
<p>Status: 500 Internal Server Error</p>
<pre>
  {
    "message": "Internal server error"
  }
</pre>
<hr />
<p>Status: 401 Unauthorized</p>
<pre>
  {
    "message": "Invalid token"
  }
</pre>
<hr />
<p>Status: 401 Unauthorized</p>
<pre>
  {
    "message": "token not found"
  }
</pre>
<hr />
<p>Status: 401 Unauthorized</p>
<pre>
  {
    "message": "You can only list games that you registered!"
  }
</pre>
<hr />
<p>Status: 404 Not Found</p>
<pre>
  {
    "message": "Game not found!"
  }
</pre>
<hr />
<p>Status: 200 Ok</p>
<pre>
  {
    "game": {
      "title": "Nome do game",
      "releaseYear": "Data de lançamento do game",
      "sinopse": "Sinopse do game",
      "developer": "Desenvolvedora do game",
      "publisher": "Publicadora do game",
      "platforms": [
        "Plataformas para qual o game foi lançado",
      ],
      "trailerURL": "Url para acessar o trailer do game",
      "metacritc" {
        "metascore": "Nota do game pelos criticos do metacritic",
        "userscore": "Nota do game pelos usuários do metacritic",
      },
      "user": "Usuário que cadastrou o game",
      "_id": "Id do game"
    }
  }
</pre>

<h1 id="contacts">Contatos</h1>
<p>Email: contact.josimarsouza@gmail.com</p>
<p>linkedin: <a href="https://www.linkedin.com/in/josimar-souza-brito/" target="_blank">Josimar Souza</a></p>
