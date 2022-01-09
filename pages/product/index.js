import Link from "next/link";

const ProductList = ({ productId = 100 }) => {
  return (
    <div>
      <h1>
        <Link href="/">
          <a>Home</a>
        </Link>
      </h1>
      <h1>Product List</h1>
      <Link href={`/product/${[productId]}`}>
        <h2>Product 1</h2>
      </Link>
      <Link href="/product/3" replace>
        <h2>Product 2</h2>
      </Link>

      <h2>Product 3</h2>
    </div>
  );
};

export default ProductList;
