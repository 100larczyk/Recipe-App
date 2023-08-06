const FirstStepForm = () => {
  return (
    <form className="firstStepForm">
      <div className="formWrapper">
        <label htmlFor="addPicture">Add meal picture</label>
        <input type="file" id="addPicture" name="addPicture" />
      </div>
      <div className="formWrapper">
        <label htmlFor="addTitle">Title:</label>
        <input type="text" id="addTitle" name="addTitle" />
      </div>
      <div className="formWrapper">
        <label htmlFor="addRate">Rate:</label>
        <input type="text" id="addRate" name="addRate" />
      </div>
      <div className="formWrapper">
        <label htmlFor="addTags">Tags:</label>
        <input type="text" id="addTags" name="addTags" />
      </div>
      <input type="submit" value="Submit and move to the next step"/>
    </form>
  )
}

export default FirstStepForm