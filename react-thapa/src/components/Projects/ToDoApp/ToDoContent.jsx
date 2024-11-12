import { MdOutlineDeleteForever } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
export const ToDoContent = ({ content, setContent }) => {
  const handleMarkClick = (key) => {
    let currentStatus = JSON.parse(localStorage.getItem(key));
    const newStatus = currentStatus === 0 ? 1 : 0;
    localStorage.setItem(key, JSON.stringify(newStatus));

    const updatedContent = content.map((item) =>
      item.text === key ? { ...item, status: newStatus } : item
    );
    setContent(updatedContent);
  };

  const handleDeleteButton = (text) => {
    localStorage.removeItem(text);
    const updatedContent = content.filter((item) => item.text !== text);
    setContent(updatedContent);
  };
  return (
    <div className="content" style={{ marginTop: "10px" }}>
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "3px",
          flexDirection: "column",
        }}
      >
        {content.length ? (
          content.map((item, index) => (
            <li
              key={index}
              style={{
                width: "100%",
                background: "white",
                padding: "10px 20px",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              {item.status ? "hogya" : item.text}
              <div
                className="buttons"
                style={{ display: "flex", flexDirection: "row", gap: "30px" }}
              >
                <FaCheckCircle
                  style={{
                    fontSize: "26px",
                    color: "green",
                    cursor: "pointer",
                  }}
                  onClick={() => handleMarkClick(item.text)}
                />
                <MdOutlineDeleteForever
                  style={{ fontSize: "26px", color: "red", cursor: "pointer" }}
                  onClick={() => handleDeleteButton(item.text)}
                />
              </div>
            </li>
          ))
        ) : (
          <h1>Nothing</h1>
        )}
      </ul>
    </div>
  );
};
