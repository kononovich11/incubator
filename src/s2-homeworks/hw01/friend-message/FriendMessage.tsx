import React from 'react'
import s from './FriendMessage.module.css'

export type FriendMessagePropsType = {
    message: {
        id: number,
        user: {
            avatar: string,
            name: string,
        },
        message: {
            text: string,
            time: string
        }
    }
}

const FriendMessage = (props: FriendMessagePropsType) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <div className={s.userContent}>
                <img
                    id={'hw1-friend-avatar-' + props.message.id}
                    src={props.message.user.avatar}
                />
                <div
                    id={'hw1-friend-time-' + props.message.id}
                    className={s.friendTime}
                >
                    {props.message.message.time}
                </div>
            </div>

            <div className={s.friendText}>
                <div
                    id={'hw1-friend-name-' + props.message.id}
                    className={s.friendName}
                >
                    {props.message.user.name}
                </div>
                <pre
                    id={'hw1-friend-text-' + props.message.id}
                    className={s.friendMessageText}
                >
                    {props.message.message.text}
                </pre>
            </div>

        </div>
    )
}

export default FriendMessage
