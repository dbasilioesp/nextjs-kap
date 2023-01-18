import { useEffect, useState } from 'react'
import { listRepos } from '../src/oauth-github';

export default function Repositories() {
    
    const [repos, updateRepos] = useState([1, 2, 3])

    useEffect(() => {
        listRepos()
    }, [])

    return (
        <>
            <h1>Repositories</h1>
            {repos.map((i) => (
                    <h2 key={i}>{i}</h2>
                ))
            }
        </>
    );
}