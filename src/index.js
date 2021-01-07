import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import moment from 'moment';
import './index.css';
import reportWebVitals from './reportWebVitals';

function Message({ message }) {
  return (
    <div className="message">
      {message}
    </div>
  )
}
Message.propTypes = {
  message : PropTypes.string
}

const NameWithHandle = ({ author }) => {
  return (
    <span className="name-with-handle">
      <span className="name">
        {author.name}
      </span>
      <span className="handle">
        @{author.handle}
      </span>
    </span>
  )
}
NameWithHandle.prototype = {
  author : PropTypes.shape({
    name: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired
  }).isRequired
}


const Time = ({ time }) => {
  const timeString = moment(time).fromNow();
  console.log(timeString);
  return (
    <span className="time">{timeString}</span>
  )
}

Time.propTypes = {
  time: PropTypes.string
}

const ReplyButton = () => (
  <i className="fa fa-reply reply-button"></i>
)

function getRetweetCount(count) {
    if(count > 0) {
      return (
        <span className="retweet-count">
            {count}
        </span>
      )
    } else {
      return null;
    }
}

const RetweetButton = ({count}) => {
  return (
    <span className="retweetbutton">
         <i className="fa fa-retweet"/>
         {getRetweetCount(count)}
    </span>
  )
}
RetweetButton.propTypes = {
  count : PropTypes.number
}

function LikeButton({count}){
  return (
    <span className="likebutton">
      <i className="fa fa-heart like-button"></i>
      {/* {count > 0 && <span className="like-count" > {count} </span>} */}
      <span className="like-count" > {count} </span>
    </span>
  )
} 
LikeButton.propTypes  = {
  count : PropTypes.number
}

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button"></i>
)

function Avatar({ hash }) {
  let url = `https://en.gravatar.com/userimage/160528960/${hash}`;
  return (
    <img src={url} className="avatar" alt="avatar" />
  )
}

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar}></Avatar>
      <div className="content">
        <NameWithHandle author={tweet.author} />
        <Time time={tweet.timestamp} />
        <Message message={tweet.message} />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton count={tweet.retweets} />
          <LikeButton count={tweet.likes} />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  )
}

let testTweet = {
  message: "To the unknown world we are here",
  gravatar: "0570d1db6d67cd64f0e41b4122fe0a70",
  author: {
    handle: 12,
    name: "Elon Musk",
  },
  likes: 23,
  retweets: 123,
  timestamp: "2021-01-03 18:05:09"
}

ReactDOM.render(
  <React.StrictMode>
    <Tweet tweet={testTweet} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
