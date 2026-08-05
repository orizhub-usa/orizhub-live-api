export default async function handler(req, res) {
  const { symbol } = req.query;

  if (!symbol) {
    return res.status(400).json({
      success: false,
      error: "Missing symbol parameter"
    });
  }

  try {
    const response = await fetch(
      `https://finnhub.io/api/v1/quote?symbol=${symbol.toUpperCase()}&token=${process.env.FINNHUB_API_KEY}`
    );

    const data = await response.json();

    return res.status(200).json({
      success: true,
      symbol: symbol.toUpperCase(),
      price: data.c,
      change: data.d,
      percent: data.dp,
      high: data.h,
      low: data.l,
      open: data.o,
      previousClose: data.pc
    });

  } catch (err) {

    return res.status(500).json({
      success: false,
      error: err.message
    });

  }
}
