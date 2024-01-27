// pages/api/changePw.js

export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log('user 비밀번호 변경 라우터');
    const data = req.body;
    // Implement password change logic here
    userDAO.changePw(data, (resp) => {
      res.json(resp);
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
