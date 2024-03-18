import React from "react";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../features/users/userSlice";

export default function PostAuthor({ userId }) {
  const users = useSelector(selectAllUsers);
  const author = users.find((user) => user.id === userId);
  return <div>by {author ? author.name : "Anonymous"}</div>;
}
