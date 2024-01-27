// pages/api/deleteAccount.js

import userDAO from './dao';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log('회원탈퇴 라우터');
    const { email } = req.body;
    // Implement account deletion logic here
    userDAO.deleteAccount(email, (resp) => {
      res.json(resp);
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
