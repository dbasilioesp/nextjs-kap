import { useEffect } from "react";
import { setHeaderAccessToken } from "../src/oauth-github";

export default function Dismiss() {
    useEffect(() => {
        if (!window) {
            console.warn('Window not found')
        }
        else if (window.parent) {
            var params = new URLSearchParams(document.location.search)
            const accessToken = params.get('token')
            document.cookie = `accessToken=${accessToken};`;
            window.parent.close();
        }
    }, [])
    
    return (
        <div>Loading...</div>
    );
}

  