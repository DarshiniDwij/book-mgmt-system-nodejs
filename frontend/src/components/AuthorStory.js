import React from "react";
const AuthorStory = () => {
  return (
    <div>
      <div>
        <span>Author</span>
        <h1>Story</h1>
      </div>
      <div className="main-div">
        <div className="empty-div">
          <div className="author-img">
            <img src="/images/testAuthor.png" alt="" />
          </div>
          <div className="content-div">
            <h2>Biography</h2>
            <p style={{ letterSpacing: "0.05em", marginTop: "40px" }}>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page.
            </p>

            <p></p>

            <p style={{ letterSpacing: "0.05em", marginTop: "20px" }}>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AuthorStory;
