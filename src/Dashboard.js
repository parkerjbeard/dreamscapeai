import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  // Replace the following dummy data with actual user data
  const userProfile = {
    name: "John Doe",
    email: "john.doe@example.com",
  };

  const recentDreamInterpretations = [
    { id: 1, interpretation: "Interpretation 1" },
    { id: 2, interpretation: "Interpretation 2" },
    { id: 3, interpretation: "Interpretation 3" },
  ];

  const personalizedInsights = [
    { id: 1, insight: "Insight 1" },
    { id: 2, insight: "Insight 2" },
    { id: 3, insight: "Insight 3" },
  ];

  return (
    <div className="dashboard-container">
      <div className="profile-summary">
        <h2 className="section-title">Profile Summary</h2>
        <p>Name: {userProfile.name}</p>
        <p>Email: {userProfile.email}</p>
      </div>
      <div className="recent-dreams">
        <h2 className="section-title">Recent Dream Interpretations</h2>
        <ul className="recent-dreams-list">
          {recentDreamInterpretations.map((dream) => (
            <li key={dream.id}>{dream.interpretation}</li>
          ))}
        </ul>
      </div>
      <div className="personalized-insights">
        <h2 className="section-title">Personalized Insights</h2>
        <ul className="personalized-insights-list">
          {personalizedInsights.map((insight) => (
            <li key={insight.id}>{insight.insight}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
