import "../assets/styles/gamesSection.css";

const GamesSection = () => {
  return (
    <main className="games-section">
      <h2 className="games-section-title">Games</h2>
      <div className="search-container">
        <div className="input-group">
          <input
            name="search"
            className="form-input"
            type="text"
            id="input-search"
            placeholder=" "
          />
          <label className="form-label" htmlFor="search">Search</label>
        </div>
      </div>
      <div className="games-section-container">

      </div>
    </main>
  );
};
export default GamesSection;
