// pages/api/signin.js

import userDAO from './dao';

export default async function handler(req, res) {
  console.log(req);
  if (req.method === 'POST') {
    const data = req.body;
    // Implement the signin logic here

    userDAO.signin(data, (resp) => {
      if (resp.status === 200) {
        // For session management in Next.js, you might use next-auth or a similar library
        // req.session.loginEmail = resp.data.email; // This line will change based on your session management
        console.log(resp.data.email); // Adjust according to your session management
      }
      res.json(resp);
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
