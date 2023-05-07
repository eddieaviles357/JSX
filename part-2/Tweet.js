const Tweet = ( {username, user, date, message} ) => (
<div className='tweet'>
    <div>username: {username}</div>
    <div>user: {user}</div>
    <div>message: {message}</div>
    <div>date: {date}</div>
</div>
)