export interface Props {
    name: string
    age: number
}

const Header = (props: Props) => {
    return (
        <header className="App-header">
            <h1>{props.name} {props.age}</h1>
        </header>
    )
}

// created_at
// followers
// following
export default Header;