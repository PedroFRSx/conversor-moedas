const API_KEY = 'e936deb07c8314dc075b4407';
const URL_BASE = `https://v6.exchangerate-api.com/v6/${API_KEY}`;

export async function buscarMoedas() {
  const resposta = await fetch(`${URL_BASE}/latest/USD`);
  const dados = await resposta.json();

  if (dados.result !== 'success') {
    throw new Error('Não foi possível buscar as moedas.');
  }

  return Object.keys(dados.conversion_rates).sort();
}

export async function converterMoeda(origem, destino, valor) {
  const resposta = await fetch(
    `${URL_BASE}/pair/${origem}/${destino}/${valor}`
  );
  const dados = await resposta.json();

  if (dados.result !== 'success') {
    throw new Error('Não foi possível realizar a conversão.');
  }

  return {
    taxa: dados.conversion_rate,
    valorConvertido: dados.conversion_result,
  };
}
