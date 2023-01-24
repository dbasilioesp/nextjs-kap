import { useEffect } from "react";

export default function Dismiss() {
    useEffect(() => {
        if (!window) {
            console.warn('Window not found')
        }
        else if (window.parent) {
            var params = new URLSearchParams(document.location.search)
            window.alert(JSON.stringify(params))
            const accessToken = params.get('token')
            const installationId = params.get('installationId')
            document.cookie = `accessToken=${accessToken};installationId=${installationId}`;
            window.parent.close();
        }
    }, [])
    
    return (
        <div>Loading...</div>
    );
}

  