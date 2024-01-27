import productDAO from './dao';

export default function handler(req, res) {
  console.log('디테일 불러오기');
  const id = req.query.id;

  productDAO.detail({ product_id: id }, (resp) => {
    res.status(200).json(resp);
  });
}
