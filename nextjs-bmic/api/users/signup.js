// pages/api/signup.js

import userDAO from './dao';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    // Call your userDAO.signup function here
    // You might need to adjust how you handle the response depending on your DAO implementation
    userDAO.signup(data, (resp) => {
      res.json(resp);
    });
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
