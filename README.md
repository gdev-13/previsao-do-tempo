# 🌤️ Previsão do Tempo

Um pequeno app em React + Vite que consulta a API do OpenWeatherMap e exibe a previsão do tempo para a cidade informada. Possui layout simples, componentes para exibir dados atuais e forecast, e estilos responsivos para mobile e tablet.

---

## ⚙️ Tecnologias utilizadas

- Vite
- React
- Axios
- CSS (com media queries)

---

## 🚀 Funcionalidades

- Buscar clima atual por cidade
- Exibir temperatura, sensação térmica, umidade e pressão
- Mostrar ícone e descrição do tempo
- Exibir previsão (forecast) com lista
- Responsivo para tablets e celulares

---

## ▶️ Como executar o projeto

1. Instale as dependências:

```bash
npm install
```

2. Crie um arquivo `.env` na raiz com sua chave da OpenWeatherMap:

```text
VITE_API_KEY=SUA_CHAVE_AQUI
```

3. Rode em modo desenvolvimento:

```bash
npm run dev
```

4. Abra no navegador em `http://localhost:5173` (ou a porta informada pelo Vite).

---

## 🔒 Variáveis de ambiente

- `VITE_API_KEY` — chave da API do OpenWeatherMap. Não compartilhe essa chave publicamente.

---

## 📁 Estrutura do projeto

```
src/
├── components/
│   ├── Weather/
│   │   ├── Weather.jsx
│   │   └── Weather.css
│   └── WeatherForecast/
│       ├── WeatherForecast.jsx
│       └── WeatherForecast.css
├── App.jsx
├── App.css
├── index.css
├── main.jsx
└── index.html

```

---

## 🧪 Testes rápidos

- Verifique responsividade reduzindo a largura do navegador.
- Teste com diferentes cidades (ex.: `São Paulo`, `Lisboa`, `Tokyo`).

---

## 📄 Licença

Projeto livre para estudo e uso pessoal. Adapte conforme necessário.