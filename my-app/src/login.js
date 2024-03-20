import React from 'react';

function Login() {
  return (
    <div className="container">
      <h1>Bem-vindo ao Sistema de Matrículas da Universidade</h1>
      <div className="row">
        <div className="col-md-6">
          <h2>Login</h2>
          <form id="loginForm">
            <div className="form-group">
              <label htmlFor="username">Usuário:</label>
              <input type="text" className="form-control" id="username" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Senha:</label>
              <input type="password" className="form-control" id="password" required />
            </div>
            <button type="submit" className="btn btn-primary">Entrar</button>
          </form>
        </div>
        <div className="col-md-6">
          <h2>Registrar</h2>
          <form id="registerForm">
            <div className="form-group">
              <label htmlFor="newUsername">Novo Usuário:</label>
              <input type="text" className="form-control" id="newUsername" required />
            </div>
            <div className="form-group">
              <label htmlFor="newPassword">Nova Senha:</label>
              <input type="password" className="form-control" id="newPassword" required />
            </div>
            <button type="submit" className="btn btn-primary">Registrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
