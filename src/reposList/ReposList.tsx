import React from "react";
const ReposList = () => {
    const [repos, setRepos] = React.useState<any[]>([])
    const [search, setSearch] = React.useState<string>("")
    const fetchRepos = (userId: string) => {
        return fetch(`https://api.github.com/users/${userId}/repos`)
            .then(res => res.json())
            .then(data => setRepos(data))
    }
    React.useEffect(() => {
        fetchRepos('github')
    }, [])
    return (
        <>
            <ul>
                {repos.filter((el) => {
                    if (search === "") {
                        return el
                    } else if (el.name.toLowerCase().includes(search.toLowerCase())) {
                        return el
                    }
                }).map(el => (
                    <>
                        <li key={el['id']}>{el['name']}</li>
                    </>
                ))}
            </ul>
            <input className="repos-input" type="text" placeholder="Search for User's repos" onChange={event => setSearch(event.target.value)}></input>
        </>
    );
}
export default ReposList;