export default function ActivityCard({ activity }) {
    return (
      <div className="card">
        <h2>{activity.title}</h2>
        <p>{activity.description}</p>
        <p><strong>Location:</strong> {activity.location}</p>
        <p><strong>Date:</strong> {activity.date}</p>
        <button className="button">Join</button>
      </div>
    );
  }
  