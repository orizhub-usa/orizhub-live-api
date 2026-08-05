export default async function handler(req, res) {
  const { symbol } = req.query;

  const response = await fetch(
    `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${process.env.FINNHUB_API_KEY}`
  );

  const data = await response.json();

  return res.status(200).json({
    apiKeyExists: !!process.env.FINNHUB_API_KEY,
    finnhubResponse: data
  });
}
