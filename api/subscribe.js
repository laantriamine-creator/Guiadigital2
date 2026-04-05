export default async function handler(req, res) {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, name, score, level } = req.body;

  if (!email || !name) {
    return res.status(400).json({ error: "Email and name are required" });
  }

  try {
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        email: email,
        attributes: {
          NOMBRE: name,
          QUIZ_SCORE: score || "",
          QUIZ_LEVEL: level || "",
        },
        listIds: [3],
        updateEnabled: true,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      // "duplicate_parameter" means contact already exists — that's fine
      if (data.code === "duplicate_parameter") {
        return res.status(200).json({ success: true, message: "Contact already exists" });
      }
      return res.status(response.status).json({ error: data.message });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: "Server error" });
  }
}
