
import React, {useEffect, useState} from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import {jwtDecode} from 'jwt-decode'; 

const handdleLogout = () => {
  localStorage.removeItem('token');
  window.location.href = '/';
}

function Header() {

  const [hasToken, setHasToken] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setHasToken(true);
      try {
        // Decodificar el token para obtener la información del usuario, incluido el rol
        const decodedToken = jwtDecode(token);
        console.log('decodedToken:', decodedToken); // Add this line to log the decoded token
        if (decodedToken) {
          setUserRole(decodedToken.rol); // Use the correct property name
          setUserName(decodedToken.user);
        }
      } catch (error) {
        console.error('Error decoding token:', error);
        setHasToken(false);
        setUserRole(null);
        setUserName(null);
      }
    } else {
      setHasToken(false);
      setUserRole(null);
      setUserName(null);
    }
  }, []);
  console.log('userRole:', userRole);
  console.log('userRole:', userName);

  return (
    <header style={{ marginBottom: '20px', fontFamily: 'Arial, sans-serif' }}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ borderBottom: '2px solid #3498db' }}>
        <div className="container">
          <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
          >
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <Nav className="ml-auto">
              {hasToken ? (
                <>
                <li className="nav-item">
                    <a href="/home" className="nav-link" style={{ color: '#3498db' }}>
                      Inicio
                    </a>
                </li>
              
                {userRole === 'Administrador' ?(
                <>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="usuarios-dropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ color: '#3498db' }}>
                      Usuarios
                  </a>
                        <div className="dropdown-menu" aria-labelledby="usuarios-dropdown">
                          <a className="dropdown-item" href="/createusuario" style={{ color: '#3498db' }}>Crear Usuario</a>
                          <a className="dropdown-item" href="/usuario" style={{ color: '#3498db' }}>Listar Usuarios</a>
                          <a className="dropdown-item" href="/createrol" style={{ color: '#3498db' }}>Crear rol</a>
                          <a className="dropdown-item" href="/rol" style={{ color: '#3498db' }}>Listar rol</a>
                        </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="socios-dropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ color: '#3498db' }}>
                      Socios
                  </a>
                        <div className="dropdown-menu" aria-labelledby="socios-dropdown">
                          <a className="dropdown-item" href="/createsocio" style={{ color: '#3498db' }}>Crear Socio</a>
                          <a className="dropdown-item" href="/socio" style={{ color: '#3498db' }}>Listar Socios</a>
                        </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="recaudaciones-dropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ color: '#3498db' }}>
                      Recaudaciones
                  </a>
                        <div className="dropdown-menu" aria-labelledby="recaudaciones-dropdown">
                          <a className="dropdown-item" href="/createpago" style={{ color: '#3498db' }}>Crear Pago</a>
                          <a className="dropdown-item" href="/pago" style={{ color: '#3498db' }}>Lista Pagos</a>
                          <a className="dropdown-item" href="/createrubro" style={{ color: '#3498db' }}>Crear rubro</a>
                          <a className="dropdown-item" href="/rubro" style={{ color: '#3498db' }}>Lista rubro</a>
                        </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="reuniones-dropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ color: '#3498db' }}>
                      Reuniones
                  </a>
                        <div className="dropdown-menu" aria-labelledby="reuniones-dropdown">
                          <a className="dropdown-item" href="/createreunion" style={{ color: '#3498db' }}>Crear Reunion</a>
                          <a className="dropdown-item" href="/reunion" style={{ color: '#3498db' }}>Lista reunion</a>
                        </div>
                </li>
                
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="gastos-dropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ color: '#3498db' }}>
                      Gastos
                  </a>
                        <div className="dropdown-menu" aria-labelledby="gastos-dropdown">
                          <a className="dropdown-item" href="/creategasto" style={{ color: '#3498db' }}>Crear gasto</a>
                          <a className="dropdown-item" href="/gasto" style={{ color: '#3498db' }}>Lista gasto</a>
                        </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="reportes-dropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ color: '#3498db' }}>
                      Reportes
                  </a>
                        <div className="dropdown-menu" aria-labelledby="reportes-dropdown">
                          <a className="dropdown-item" href="/reporte" style={{ color: '#3498db' }}>Lista reporte</a>
                        </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="documentos-dropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ color: '#3498db' }}>
                      Documentos
                  </a>
                        <div className="dropdown-menu" aria-labelledby="documentos-dropdown">
                          <a className="dropdown-item" href="/createdocument" style={{ color: '#3498db' }}>Subir nuevo documento</a>
                          <a className="dropdown-item" href="/document" style={{ color: '#3498db' }}>Lista documento</a>
                        </div>
                </li>
                </>
                ):(
                <>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="socios-dropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ color: '#3498db' }}>
                      Socios
                  </a>
                        <div className="dropdown-menu" aria-labelledby="socios-dropdown">
                          <a className="dropdown-item" href="/createsocio" style={{ color: '#3498db' }}>Crear Socio</a>
                          <a className="dropdown-item" href="/socio" style={{ color: '#3498db' }}>Listar Socios</a>
                        </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="recaudaciones-dropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ color: '#3498db' }}>
                      Recaudaciones
                  </a>
                        <div className="dropdown-menu" aria-labelledby="recaudaciones-dropdown">
                          <a className="dropdown-item" href="/createpago" style={{ color: '#3498db' }}>Crear Pago</a>
                          <a className="dropdown-item" href="/pago" style={{ color: '#3498db' }}>Lista Pagos</a>
                          <a className="dropdown-item" href="/createrubro" style={{ color: '#3498db' }}>Crear rubro</a>
                          <a className="dropdown-item" href="/rubro" style={{ color: '#3498db' }}>Lista rubro</a>
                        </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="reuniones-dropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ color: '#3498db' }}>
                      Reuniones
                  </a>
                        <div className="dropdown-menu" aria-labelledby="reuniones-dropdown">
                          <a className="dropdown-item" href="/createreunion" style={{ color: '#3498db' }}>Crear Reunion</a>
                          <a className="dropdown-item" href="/reunion" style={{ color: '#3498db' }}>Lista reunion</a>
                        </div>
                </li>
              
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="gastos-dropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ color: '#3498db' }}>
                      Gastos
                  </a>
                        <div className="dropdown-menu" aria-labelledby="gastos-dropdown">
                          <a className="dropdown-item" href="/creategasto" style={{ color: '#3498db' }}>Crear gasto</a>
                          <a className="dropdown-item" href="/gasto" style={{ color: '#3498db' }}>Lista gasto</a>
                        </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="reportes-dropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ color: '#3498db' }}>
                      Reportes
                  </a>
                        <div className="dropdown-menu" aria-labelledby="reportes-dropdown">
                          <a className="dropdown-item" href="/reporte" style={{ color: '#3498db' }}>Lista reporte</a>
                        </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="documentos-dropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ color: '#3498db' }}>
                      Documentos
                  </a>
                        <div className="dropdown-menu" aria-labelledby="documentos-dropdown">
                          <a className="dropdown-item" href="/createdocument" style={{ color: '#3498db' }}>Subir nuevo documento</a>
                          <a className="dropdown-item" href="/document" style={{ color: '#3498db' }}>Lista documento</a>
                        </div>
                </li>
                </>
                )}

  <div style={{ marginLeft: 'auto', marginRight: '0' }}>
  <li className="nav-item">
                    <div className="user-profile">
                      <span>
                        <i className="fas fa-user-circle profile-icon" style={{ marginRight: '5px' }}></i>
                        {userName}
                      </span>
                      <div className="user-dropdown">
                        <div className="dropdown-divider"></div>
                        <a href="#" className="dropdown-item" style={{ color: '#e74c3c' }} onClick={handdleLogout}>
                          Cerrar sesión
                        </a>
                      </div>
                    </div>
                  </li>
</div>
                </>
              ):(
                <>
                <Nav.Link href="/" style={{ color: '#3498db' }}>Iniciar sesión</Nav.Link>
                </>
              )}
            </Nav>
          </div>
        </div>
      </nav>
    </header>
  );

}

export default Header;
