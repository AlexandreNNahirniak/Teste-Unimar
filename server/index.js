import express from 'express';
const app = express();
const PORT = 3001;

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'API rodando perfeitamente!' });
});

app.listen(PORT, () => {
  console.log(`Servidor da ONG rodando na porta ${PORT}`);
});
