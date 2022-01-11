import { useEffect, useState } from "react";

const DashBoard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dataDashboard, setDataDashboard] = useState([]);

  console.log(dataDashboard);
  console.log(dataDashboard.followers);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3004/dashboard");
      const data = await response.json();
      console.log(data);
      setDataDashboard(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>{dataDashboard.followers}</h2>
      <h2>{dataDashboard.following}</h2>
      <h2>{dataDashboard.posts}</h2>
    </div>
  );
};

export default DashBoard;
