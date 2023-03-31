import React, { useState } from 'react';
import './DreamAnalysis.css';

const DreamAnalysis = () => {
  const [dreams, setDreams] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [coverImage, setCoverImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setDreams([...dreams, { title, description, coverImage }]);
    setTitle('');
    setDescription('');
    setCoverImage('');
    setShowForm(false);
  };

  const handleCancel = () => {
    setTitle('');
    setDescription('');
    setCoverImage('');
    setShowForm(false);
  };

  return (
    <div className="dream-analysis">
      {!showForm && <button onClick={() => setShowForm(!showForm)}>Add New Dream</button>}
      {showForm && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label htmlFor="coverImage">Cover Image URL:</label>
          <input
            type="text"
            id="coverImage"
            value={coverImage}
            onChange={(e) => setCoverImage(e.target.value)}
          />
          <button type="submit">Save Dream</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
        </form>
      )}
      <div className="dream-grid">
        {dreams.map((dream, index) => (
          <div key={index} className="dream-card">
            <img src={dream.coverImage} alt={dream.title} />
            <h3>{dream.title}</h3>
            <p>{dream.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DreamAnalysis;
