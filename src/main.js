document.querySelector('#app').innerHTML = `
  <div style="font-family: sans-serif; text-align: center; margin-top: 50px;">
    <h1>Projeto da nossa ONG 🌍</h1>
    <p>Status da Conexão: <strong id="api-status" style="color: orange;">Conectando...</strong></p>
  </div>
`;

fetch('/api/health')
  .then((res) => res.json())
  .then((data) => {
    document.getElementById('api-status').innerText = `${data.status} - ${data.message}`;
    document.getElementById('api-status').style.color = 'green';
  })
  .catch(() => {
    document.getElementById('api-status').innerText = 'Erro ao conectar com a API';
    document.getElementById('api-status').style.color = 'red';
  });
