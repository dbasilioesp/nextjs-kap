import { useEffect } from "react";

export default function Dismiss() {
    useEffect(() => {
        if (!window) {
            console.warn('Window not found')
        }
        else if (window.parent) {
            var params = new URLSearchParams(document.location.search)
            const accessToken = params.get('token')
            const installationId = params.get('installationId')
            const appAccessToken = params.get('appToken')
            
            document.cookie = `accessToken=${accessToken};`;
            document.cookie = `installationId=${installationId};`;
            document.cookie = `appAccessToken=${appAccessToken}`;
            window.parent.close();
        }
    }, [])
    
    return (
        <div>Loading...</div>
    );
}

  