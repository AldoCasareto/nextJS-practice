import { useRouter } from "next/router";

const Doc = () => {
  const router = useRouter();
  const { params = [] } = router.query;

  if (params.length === 2) {
    return (
      <div>
        <h1>
          viewing docs for feature {params[0]} and page {params[1]}
        </h1>
      </div>
    );
  } else if (params.length === 1) {
    return (
      <div>
        <h1>viewing docs for feature {params[0]}</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>DOCS HOME PAGE</h1>
    </div>
  );
};

export default Doc;
