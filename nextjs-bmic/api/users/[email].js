// pages/api/user/[email].js

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { email } = req.query;
    // Fetch user info based on the email
    userDAO.userinfo(email, (resp) => {
      res.json(resp);
    });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
