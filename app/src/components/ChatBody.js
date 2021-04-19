import React from "react"
import "./ChatBody.scss"
import Message from "./Message"
import MyMessage from "./MyMessage"
const ChatBody = () => {
	return (
		<div className="ChatBody">
			<MyMessage />
			<Message />
			<Message />
			<Message />
			<MyMessage />
			<MyMessage />
			<Message />
		</div>
	)
}

export default ChatBody
