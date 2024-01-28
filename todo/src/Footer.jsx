export default function Footer({ length, checkedTasks, remainTasks }) {
    return (
      <>
        <footer className="footer">
          <h4 className="fText">
            Total: <span>{length}</span>
          </h4>
          <h4>
            Completed: <span>{checkedTasks.length}</span>
          </h4>
          <h4>
            Remaining: <span>{remainTasks.length}</span>
          </h4>
        </footer>
      </>
    );
  }
  