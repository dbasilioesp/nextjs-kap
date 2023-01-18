import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  const openOAuthWindow = () => {
    const url = 'https://github.com/login/oauth/authorize?client_id=495ec155c68668716542&scope=repo';
    const name = 'Github OAuth'
    const params = 'width=700,height=700,left=200,top=100'
    window.open(url, name, params)
  }

  const containerStyle = {
    display: 'grid',
    height: '100vh',
    placeItems: 'center',
    justifyContent: 'center',
  };

  const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    padding: '0 15px'
  }

  return (
    <div style={containerStyle}>
      <button  style={buttonStyle} onClick={() => openOAuthWindow()}>Github</button>
    </div>
  )
}
