// example of creating api endpoint and deploy as serverless functions

export default function handler(req, res) {
  res.status(200).json({ text: "Hello" });
}
