import Link from 'next/link';
//Timer랑 Table은 Detail 안에 있음

const Products = () => {
  return (
    <div>
      <h2>제품 페이지</h2>
      <Link href={'/products'} />
      <Link href={'/products/detail'} />
      <Link href={'/products/bidding'} />
    </div>
  );
};
export default Products;
