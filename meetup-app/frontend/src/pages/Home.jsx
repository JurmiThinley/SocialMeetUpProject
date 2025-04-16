import ActivityCard from '../components/ActivityCard';

const activities = [
  {
    id: 1,
    title: "Morning Yoga",
    description: "Start your day with relaxing yoga.",
    location: "Community Park",
    date: "2025-04-20"
  },
  {
    id: 2,
    title: "Coding Meetup",
    description: "Build cool stuff with local devs.",
    location: "Tech Hub",
    date: "2025-04-22"
  }
];

export default function Home() {
  return (
    <div className="container">
      <h1>Upcoming Activities</h1>
      {activities.map(activity => (
        <ActivityCard key={activity.id} activity={activity} />
      ))}
    </div>
  );
}
