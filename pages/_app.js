import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div style={{
        backgroundColor: '#b91c1c',
        color: 'white',
        textAlign: 'center',
        padding: '10px 16px',
        fontWeight: 'bold',
        fontSize: '1rem',
        position: 'relative',
        zIndex: 200,
      }}>
        Our New Albany office is now closed. Please contact our St. Matthews location.
      </div>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
