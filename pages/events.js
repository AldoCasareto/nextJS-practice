import SWR from "swr";

const fetcher = async () => {
  const response = await fetch("http://localhost:3004/events");
  const data = await response.json();
  return data;
};

const Events = () => {
  const { data, error } = SWR("events", fetcher);

  return (
    <div>
      <h1>Events</h1>
      {error && <div>failed to load</div>}
      {!data && <div>loading...</div>}
      {data &&
        data.map((event) => (
          <div key={event.id}>
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <p>{event.category}</p>
          </div>
        ))}
    </div>
  );
};

export default Events;
