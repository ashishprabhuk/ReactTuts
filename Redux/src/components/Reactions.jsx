import React from "react";
import { reactionAdded } from "../features/posts/postSlice";
import { useDispatch } from "react-redux";

export default function Reactions({ post }) {
  const emojies = {
    thumbsUp: "👍",
    hooray: "👏",
    heart: "❤️",
    rocket: "🚀",
    eyes: "👀",
  };
  const dispatch = useDispatch();

  const reactions = Object.entries(emojies).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="reactionBtn"
        onClick={() =>
          dispatch(reactionAdded({ postId: post.id, reaction: name }))
        }
      >
        {emoji}
        <span style={{paddingLeft:'3px'}}>
          {post.reactions[name]}
        </span>
        
      </button>
    );
  });

  return <div>{reactions}</div>;
}
