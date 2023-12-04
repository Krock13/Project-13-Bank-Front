import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export function ProtectedRoute({ children }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    // Si l'utilisateur n'est pas connecté, redirige vers la page de connexion
    return <Navigate to='/login' />;
  }

  return children; // Si connecté, affiche l'enfant (la route protégée)
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
