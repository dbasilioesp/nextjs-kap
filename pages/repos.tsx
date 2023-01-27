import { useEffect, useState } from "react";
import { Cookie } from "../src/cookie";

export default function Repositories() {
    const [repos, setRepos] = useState([])

    async function getRepos() {
        const cookie = new Cookie()
        const accessToken = cookie.get('appAccessToken')
        
        if (accessToken) {
            const res = await fetch(`/api/repos?appToken=${accessToken}`)
            const data = await res.json()
            
            setRepos(data.repositories)
        }
    }

    useEffect(() => {
        getRepos()
    }, [])

    return (
        <>
            <h1>Repositories</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                    </tr>
                </thead>
                <tbody>
                {repos.map((i: any) => (
                    <tr key={i.id}>
                        <td>{i.id}</td>
                        <td>{i.name}</td>
                    </tr>
                ))}
                </tbody>
            </table>
                        
        </>
    );
}
