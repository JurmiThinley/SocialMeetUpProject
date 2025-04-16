export default function HostDashboard() {
    return (
      <div className="form">
        <h2>Create an Activity</h2>
        <input type="text" placeholder="Title" />
        <textarea placeholder="Description"></textarea>
        <input type="text" placeholder="Location" />
        <input type="date" />
        <button className="button">Create</button>
      </div>
    );
  }
  