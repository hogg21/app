import React from "react";
import ReposList from "../reposList/ReposList";


const Profile = () => {
    const [avatarUrl, setAvatarUrl] = React.useState<string>("")
  const [userName, setUserName] = React.useState<string>("")
  const [location, setLocation] = React.useState<string>("")
  const [createdAt, setDateCreate] = React.useState<string>("")
  const [bio, setBio] = React.useState<null>()
  const [followers, setFollowers] = React.useState<number>(0)
    const [following, setFollowing] = React.useState<number>(0)
    const [reposList, setReposList] = React.useState<[]>([])
  const fetchData = (userId: string) => {
    return fetch(`https://api.github.com/users/${userId}`)
      .then(res => res.json()).then(data => (
        setAvatarUrl(data.avatar_url),
        setUserName(data.name),
        setLocation(data.location),
        setDateCreate(data.created_at),
        setBio(data.bio),
        setFollowers(data.followers),
        setFollowing(data.following)
      )
    )
    }
    
    React.useEffect(() => {
        fetchData('github')
    }, [])

    return (
        <>
            <h1>Github searcher</h1>
            <div className='container'>
                <img src={avatarUrl} alt="Avatar"></img>
                <div>
                    <p>UserName: {userName}</p>
                    <p>Location: {location}</p>
                    <p>Join Date: {createdAt}</p>
                    <p>{bio}</p>
                    <p>{followers} Followers</p>
                    <p>Following {following}</p>
                </div>
                <ReposList></ReposList>
            </div>
        </>
    );
}
export default Profile;