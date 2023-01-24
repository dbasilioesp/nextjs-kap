import Link from "next/link";

export default function Home({ clientID }: any) {
  
  const openOAuthWindow = () => {
    const url = `https://github.com/apps/nirvana-fly/installations/new/`;
    const name = 'Github OAuth'
    const params = 'width=700,height=700,left=200,top=100'
    const popup = window.open(url, name, params)
    if (popup) {
      popup.onbeforeunload = function(){
        console.info('Popup closed')
      }
    }
  }

  const containerStyle = {
    display: 'grid',
    height: '100vh',
    placeItems: 'center',
    justifyContent: 'center',
  };

  const listStyle = {
    display: 'flex',
    gap: 15
  }

  const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    padding: '0 15px',
    backgroundColor: '#ccc',
    border: 0,
    borderRadius: 4,
    cursor: 'pointer',
    fontSize: 16,
  }

  return (
    <div style={containerStyle}>
      <div style={listStyle}>
        <button style={buttonStyle} onClick={() => openOAuthWindow()}>Github OAuth</button>
        <Link style={buttonStyle} href='/repos'>Repos</Link>
      </div>
    </div>
  )
}


export const getStaticProps = async () => {
  return {
    props: {
      clientID: process.env.GITHUB_CLIENT_ID
    }
  }
}