import { eventsData } from "@/lib/data";  // Assuming your event data is stored here
import Image from "next/image";
import Link from "next/link";

const EventPage = () => {
  const event = eventsData[9]; // Assuming the second event in the data array is for this page

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* Back Button */}
      <div className="flex items-center mb-4">
        <Link href="/list/events" passHref>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
            Back to Events
          </button>
        </Link>
      </div>

      {/* Event Title, Venue, Date, Time */}
      <h1 className="text-2xl font-semibold">{event.title}</h1>
      <p><strong>Venue:</strong> {event.venue}</p>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Start Time:</strong> {event.startTime}</p>
      <p><strong>End Time:</strong> {event.endTime}</p>

      <div className="my-6">
        <div className="my-4">
          <Image 
            src="/dance.png" 
            alt="Event Image" 
            width={600} 
            height={400} 
            className="rounded-md"
          />
        </div>

        <h2 className="text-xl font-semibold">About the Event</h2>
        <p className="text-sm mt-2">
          Step back in time and experience the magic of swing dancing! Groove to live music,
           learn some moves, and enjoy an evening filled with rhythm and retro charm.
        </p>        
      </div>
    </div>
  );
};

export default EventPage;

