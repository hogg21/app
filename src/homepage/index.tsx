import React from "react";
import { Link } from "react-router-dom";
const HomePage = () => {
    const [name, setName] = React.useState<string>("")
    const [avatar, setAvatar] = React.useState<string>("")
    const [value, setValue] = React.useState<string>("")
    const [repo, setRepo] = React.useState<number>(0)

    const onChange = (e: any) => {
        setValue(e.target.value)
    }
    const fetchUserData = async (userId: any) => {
        const response = await fetch(`https://api.github.com/users/${userId}`)
            .then(res => res.json()).then(data => (
                setName(data.login),
                setAvatar(data.avatar_url),
                setRepo(data.public_repos)
            )
        )
        return response
    }

    React.useEffect(() => {
        fetchUserData('github')
    }, [])
    return (
        <>
            <h1>Github Searcher</h1>
            <input type="text" value={value} placeholder="Search for Users" onChange={onChange}></input>
            <div className="user__info">
                <img src={avatar} alt="Avatar Profile"></img>
                <Link to="/profile">
                    <p>{name}</p>
                </Link>
                <p>Repo: {repo}</p>
            </div>
        </>
    );
}
export default HomePage;
