export default function AuthCallback() {
    if (window.parent) {
        window.parent.close();
    }
    
    return (
        <h1>.</h1>
    );
}