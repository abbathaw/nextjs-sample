export default function handler(req, res) {
  try {
    const query = req.query;
    const { type, offset, size } = query;
    const date = new Date();
    res.status(200).json({ type, offset, size, time: date.toUTCString() });
  } catch (e) {
    res.status(500).json({
      error: {
        code: 500,
        message: e.message,
      },
    });
  }
}
