import { useState, useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import "./App.css";
import apiRequest from "./apiRequest";

export default function App() {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState("");
    const [search, setSearch] = useState("");
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const inputRef = useRef();

    const API_URL = "http://localhost:7000/items";

    const checkedTasks = items.filter((item) => item.checked);
    const remainTasks = items.filter((item) => !item.checked);

    useEffect(() => {
        // localStorage.setItem("todo", JSON.stringify(items));
        const fetchTask = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) throw Error("Error in fetching");
                const items = await response.json();
                setItems(items);
                setError(null);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        setTimeout(() => {
            (async () => await fetchTask())();
        }, 2000);
    }, [items]);

    const addItem = async (item) => {
        const id = items.length ? items[items.length - 1].id + 1 : 1;
        const addNewItem = { id, checked: false, task: item };
        const listItems = [...items, addNewItem];
        setItems(listItems);

        const postOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(addNewItem),
        };
        const result = await apiRequest(API_URL, postOptions);
        if (result) setError(result);
    };

    const handleCheck = async (id) => {
        const listItem = items.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item
        );
        setItems(listItem);

        const updatedItem = listItem.find((item) => item.id === id);
        const updateOptions = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ checked: updatedItem[0].checked }),
        };
        const reqUrl = `${API_URL}/${id}`;
        const result = await apiRequest(reqUrl, updateOptions);
        if (result) setError(result);
    };

    const handleDelete = async (id) => {
        const listItem = items.filter((item) => item.id !== id);
        setItems(listItem);

        const deleteItem = await apiRequest(API_URL, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(deleteItem),
        });
        if (deleteItem) setError(deleteItem);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(newItem);
        setNewItem("");
    };

    return (
        <div className="App">
            <Header />
            <AddItem
                newItem={newItem}
                setNewItem={setNewItem}
                handleSubmit={handleSubmit}
                inputRef={inputRef}
            />
            <SearchItem
                search={search}
                setSearch={setSearch}
                inputRef={inputRef}
            />
            {error && <p>{error}</p>}
            {isLoading && <p>Loading data...</p>}
            <main>
                {!isLoading && !error && (
                    <Body
                        items={items.filter((item) =>
                            item.task
                                .toLocaleLowerCase()
                                .includes(search.toLocaleLowerCase())
                        )}
                        checkedTasks={checkedTasks}
                        remainTasks={remainTasks}
                        handleCheck={handleCheck}
                        handleDelete={handleDelete}
                        handleSubmit={handleSubmit}
                    />
                )}
            </main>
            <Footer
                length={items.length}
                checkedTasks={checkedTasks}
                remainTasks={remainTasks}
            />
        </div>
    );
}
