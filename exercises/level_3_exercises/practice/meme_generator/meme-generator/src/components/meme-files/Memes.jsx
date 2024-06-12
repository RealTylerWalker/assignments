import React from "react";
import "./meme.css";
import { v4 as uuidv4 } from "uuid";

function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomMeme: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = React.useState([]);
  const [savedMemes, setSavedMemes] = React.useState([]);
  const [editingMemeId, setEditingMemeId] = React.useState(null);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getNewMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomMeme: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  function handleSaveMeme() {
    setSavedMemes((prevMemes) => [...prevMemes, { ...meme, id: uuidv4() }]);
  }

  function handleDelete(id) {
    setSavedMemes(savedMemes.filter((savedMeme) => savedMeme.id !== id));
  }

  function handleEdit(id) {
    setEditingMemeId(id); // Set the editing meme ID
  }

  function handleEditChange(event, id) {
    const { name, value } = event.target;
    setSavedMemes((prevMemes) =>
      prevMemes.map((meme) =>
        meme.id === id ? { ...meme, [name]: value } : meme
      )
    );
  }

  function handleSaveEdit(id) {
    setEditingMemeId(null); // Clear the editing meme ID
  }

  return (
    <div>
      <div className="meme-container">
        <div className="input-container">
          <div className="top-text-container">
            <label for="top-text" className="top-text-label">
              Top text
            </label>
            <input
              type="text"
              id="top-text"
              name="topText"
              className="top-text-input"
              placeholder="enter text"
              onChange={handleChange}
              value={meme.topText}
            />
          </div>
          <div className="bottom-text-container">
            <label for="bottom-text" className="bottom-text-label">
              Bottom text
            </label>
            <input
              type="text"
              id="bottom-text"
              name="bottomText"
              className="bottom-text-input"
              placeholder="enter text"
              onChange={handleChange}
              value={meme.bottomText}
            />
          </div>
        </div>

        <button className="button" onClick={getNewMemeImage}>
          Get a new meme image 🖼
        </button>
        <button className="save-button" onClick={handleSaveMeme}>
          Save Your Meme
        </button>

        <div className="meme">
          <h2 className="meme-text top">{meme.topText}</h2>
          <h2 className="meme-text bottom">{meme.bottomText}</h2>
          <img src={meme.randomMeme} className="meme-image" />
        </div>
        <hr />
        <div className="save-meme-container">
          {savedMemes.map((savedMeme) => {
            return (
              <div>
                <div className="meme">
                  <h2 className="meme-text top">{savedMeme.topText}</h2>
                  <h2 className="meme-text bottom">{savedMeme.bottomText}</h2>
                  <img src={savedMeme.randomMeme} className="meme-image" />
                </div>
                <div className="buttonContainer">
                  <button
                    className="deleteButton"
                    onClick={() => handleDelete(savedMeme.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="editButton"
                    onClick={() => handleEdit(savedMeme.id)}
                  >
                    Edit
                  </button>

                  {editingMemeId === savedMeme.id && (
                    <div>
                      <input
                        type="text"
                        name="topText"
                        className="editTopText"
                        placeholder="Edit top text"
                        value={savedMeme.topText}
                        onChange={(event) =>
                          handleEditChange(event, savedMeme.id)
                        }
                      />
                      <input
                        type="text"
                        name="bottomText"
                        className="editBottomText"
                        placeholder="Edit bottom text"
                        value={savedMeme.bottomText}
                        onChange={(event) =>
                          handleEditChange(event, savedMeme.id)
                        }
                      />
                      <button onClick={() => handleSaveEdit(savedMeme.id)}>
                        Save
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Meme;
