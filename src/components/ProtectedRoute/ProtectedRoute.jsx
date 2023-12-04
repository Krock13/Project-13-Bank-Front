/**
 * ProtectedRoute component to handle private routes.
 * Renders child components only if the user is authenticated, otherwise redirects to the login page.
 */

// Redux hook for accessing state and React Router utility for navigation
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

// Prop-types for component prop validation
import PropTypes from 'prop-types';

export function ProtectedRoute({ children }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  // Check authentication status and redirect if not authenticated
  if (!isAuthenticated) {
    return <Navigate to='/login' />;
  }

  // Render child components if authenticated
  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
