
const TemporaryBtn = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <button onClick={handleClick} className="temporaryBtn">Add recipe</button>
  )
}


export default TemporaryBtn