import { FaInfoCircle } from "react-icons/fa";
import ItemList from "./ItemList";

export default function Body({ items, handleCheck, handleDelete }) {
    return (
        <>
            {items.length ? (
                <ItemList
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ) : (
                <>
                    <p
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#ff3b3b",
                            gap: "10px",
                        }}
                    >
                        <FaInfoCircle /> No Task Found
                    </p>
                </>
            )}
        </>
    );
}
