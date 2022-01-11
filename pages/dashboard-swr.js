import useSWR from "swr";

const fetcher = async () => {
  const response = await fetch("http://localhost:3004/dashboard");
  const data = await response.json();
  return data;
};

const DashBoardSWR = () => {
  const { data, error } = useSWR("dashboard", fetcher);
  console.log(data);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>{data.followers}</h2>
      <h2>{data.following}</h2>
      <h2>{data.posts}</h2>
    </div>
  );
};

export default DashBoardSWR;
