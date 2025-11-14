import { useState } from 'react'
import './styles/globals.css'
import HomePage from './components/HomePage'
import CandidateProfile from './components/CandidateProfile'
import CompanyListings from './components/CompanyListings'
import Login from './components/Login'

function App() {
  const [currentView, setCurrentView] = useState('login')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userInfo, setUserInfo] = useState(null)

  const handleLoginSuccess = (userData) => {
    setUserInfo(userData)
    setIsLoggedIn(true)
    setCurrentView('home')
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUserInfo(null)
    setCurrentView('login')
  }

  return (
    <div className="app">
      {/* Login Page */}
      {currentView === 'login' && <Login onLoginSuccess={handleLoginSuccess} />}

      {/* Main App Views (Protected) */}
      {isLoggedIn && (
        <>
          {currentView === 'home' && <HomePage onLogout={handleLogout} />}
          {currentView === 'candidate' && <CandidateProfile />}
          {currentView === 'companies' && <CompanyListings />}
          
          {/* Navigation buttons for demo - remove in production */}
          <div style={{ 
            position: 'fixed', 
            bottom: '20px', 
            right: '20px', 
            display: 'flex', 
            gap: '10px',
            zIndex: 1000,
            flexWrap: 'wrap',
            justifyContent: 'flex-end'
          }}>
            <button 
              onClick={() => setCurrentView('home')}
              style={{
                padding: '10px 15px',
                borderRadius: '8px',
                border: 'none',
                background: currentView === 'home' ? '#7B2CBF' : '#ccc',
                color: currentView === 'home' ? 'white' : 'black',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              🏠 Inicio
            </button>
            <button 
              onClick={() => setCurrentView('candidate')}
              style={{
                padding: '10px 15px',
                borderRadius: '8px',
                border: 'none',
                background: currentView === 'candidate' ? '#7B2CBF' : '#ccc',
                color: currentView === 'candidate' ? 'white' : 'black',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              👤 Perfil
            </button>
            <button 
              onClick={() => setCurrentView('companies')}
              style={{
                padding: '10px 15px',
                borderRadius: '8px',
                border: 'none',
                background: currentView === 'companies' ? '#7B2CBF' : '#ccc',
                color: currentView === 'companies' ? 'white' : 'black',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              🏢 Empresas
            </button>
            <button 
              onClick={handleLogout}
              style={{
                padding: '10px 15px',
                borderRadius: '8px',
                border: 'none',
                background: '#E74C3C',
                color: 'white',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
              title="Cerrar sesión"
            >
              🚪 Salir
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default App
