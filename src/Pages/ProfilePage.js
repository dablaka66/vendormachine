import {useParams}  from 'react-router-dom';

export default function ProfilePage() {
    const { username } = useParams();
  return (
    <div><h1>profilePage:  {username}</h1></div>
  )
}