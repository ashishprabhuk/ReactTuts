import { FaPlus } from "react-icons/fa6";

export default function AddItem({
  newItem,
  setNewItem,
  handleSubmit,
  inputRef,
}) {
  return (
    <>
      <form className="addForm" onSubmit={handleSubmit}>
        <input
          className="addBox"
          autoFocus
          type="text"
          placeholder="Add New Task"
          id="addItem"
          value={newItem}
          ref={inputRef}
          required
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button
          type="submit"
          className="addBtn"
          onClick={() => inputRef.current.focus()}
        >
          <FaPlus />
        </button>
      </form>
    </>
  );
}
