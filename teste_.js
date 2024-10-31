

const express = require("express");
const cors = require("cors");
const { Pool } = require("pg"); // Use pg para PostgreSQL
const helmet = require("helmet");

const app = express();
app.use(express.json());
app.use(cors());

app.use(helmet.noSniff());
app.use(helmet.xssFilter());
app.use(helmet.crossOriginEmbedderPolicy());
app.use(helmet.ieNoOpen());
app.use(
  helmet.hsts({
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true,
  })
);

// Configurações do banco de dados
const pool = new Pool({
  host: "ep-fragrant-breeze-a5al88f4.us-east-2.aws.neon.tech",
  user: "cantina_teste_owner",
  password: "jUdifXRwlx72",
  database: "cantina_teste",
  port: 3000, // A porta padrão do PostgreSQL
  ssl: {
    rejectUnauthorized: false, // Desative a verificação de certificado SSL
  },
});

// Endpoint para obter dados
app.get('/cantina_dados', async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM cantina_mira");
    console.log('Dados pegos:', result.rows);

    var dades=JSON.stringify(result.rows)

    res.json(dades); 
    // Retorna os dados em formato JSON
  } catch (err) {
    console.error('Erro ao executar a consulta:', err);
    res.status(500).json({ error: 'Erro ao obter dados' });
  }
});

// Inicialização do servidor
const porta = 3000;
app.listen(porta, (err) => {
  if (err) {
    console.error('Tivemos um pequeno erro: ' + err);
    return;
  }
  console.log('Servidor conectado na porta ' + porta);
});
