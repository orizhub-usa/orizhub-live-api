export default function handler(req, res) {
  const { symbol } = req.query;

  if (!symbol) {
    return res.status(400).json({
      success: false,
      error: "Missing symbol"
    });
  }

  return res.status(200).json({
    success: true,
    symbol: symbol.toUpperCase(),
    message: "ORIZ.HUB API is working 🚀"
  });
}
