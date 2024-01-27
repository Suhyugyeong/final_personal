// pages/api/logout.js

export default function handler(req, res) {
  if (req.method === 'GET') {
    console.dir('로그아웃', req);
    // Clear cookies or session here
    res.json({ status: 200, message: 'OK' });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
