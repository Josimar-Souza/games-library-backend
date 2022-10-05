<h1>Bem vindos ao projeto Games Library API</h1>

<h1>Objetivo</h1>
<p>Esse projeto consiste em uma api para armazenar e buscar dados sobre jogos cadastrados por usuários em um banco de dados (MongoDB).</p>

<h1>Desenvolvimento</h1>
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

<h1>Deploy</h1>
<p>Essa api foi publicada no <a href="https://render.com/" target="_blank">Render</a>, um serviço de hospedagem de sites e serviços na nuvem, você poderá acessar a api no link a seguir:</p>
<a>https://games-library-api.onrender.com/games</a>

<h1>Endpoints</h1>
<h2>POST: /user/register</h2>
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

<h2>POST: /user/login</h2>
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

<h2>POST: /games</h2>
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
    "sinopse": | string, min = 10, max = 100, necessário |,
    "developer": | string, min = 5, necessário |,
    "publisher": | string, min = 5, necessário |,
    "platforms": [
      | string, min = 5, necessário |
    ]
    "trailerURL": | url válida, necessário|,
    "metacritic": {
      "metascore": | number, necessário |,
      "userscore": | number, necessário |
    }
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
    "newGames": {
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