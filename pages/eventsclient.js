import { useState } from "react";
import { useRouter } from "next/router";

const EventsClient = ({ eventList }) => {
  const [events, setEvents] = useState(eventList);

  const router = useRouter();

  const fetchSports = async () => {
    const response = await fetch(
      `http://localhost:3004/events?category=sports`
    );
    const data = await response.json();
    setEvents(data);
    router.push("/eventsclient?category=sports", undefined, { shallow: true });
  };

  return (
    <div>
      <button onClick={fetchSports}>Fetch Sports</button>
      <ul>
        {events.map((event) => (
          <div key={event.id}>
            <li>
              {event.title}-{event.category}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  const queryString = category ? `?category=${category}` : "";

  const response = await fetch("http://localhost:3004/events?" + queryString);
  const data = await response.json();

  return {
    props: {
      eventList: data,
    },
  };
}

export default EventsClient;
