import React from "react";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/userSlice";

export default function PostAuthor({ userId }) {
  const users = useSelector(selectAllUsers);
  const author = users.find((user) => userId === user.id);
  return <div>by {author ? author.name : "Anonymous"}</div>;
}
