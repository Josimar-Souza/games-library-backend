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
<pre>
  {
    "username": | string, min = 5, max = 25, necessário |
    "email": | email valido, necessário |
    "password": | Uma letra maiúscula, uma minúscula, um número, e um caracter especial, min = 8, max = 12 |
  }
</pre>
<p>Exemplos de respostas:</p>
<p>Status: 500 Internal Server Error</p>
<pre>
  {
    "message": "Internal server error"
  }
</pre>
<p>Status: 400 Bad Request</p>
<pre>
  {
    "message": "\"field\" is required or an invalid field error message"
  }
</pre>
<p>Status: 400 Bad Request</p>
<pre>
  {
    "message": "User already registered"
  }
</pre>
<p>Status: 201 Created</p>
<pre>
  {
    "newUser": {
      "username": | nome de usuário |,
      "email": | email do usuário |,
      "_id": | id do usuário |
    }
  }
</pre>

<h2>POST: /user/login</h2>
<p>Exemplo de body</p>
<pre>
  {
    "email": | email valido, necessário |
    "password": | Uma letra maiúscula, uma minúscula, um número, e um caracter especial, min = 8, max = 12 |
  }
</pre>
<p>Exemplos de respostas</p>
<p>Status: 500 Internal Server Error</p>
<pre>
  {
    "message": "Internal server error"
  }
</pre>
<p>Status: 400 Bad Request</p>
<pre>
  {
    "message": "\"field\" is required or an invalid field error message"
  }
</pre>
<p>Status: 400 Bad Request</p>
<pre>
  {
    "message": "Invalid email or password"
  }
</pre>
<p>Status: 200 ok</p>
<pre>
  {
    "token": | token de acesso |
  }
</pre>
