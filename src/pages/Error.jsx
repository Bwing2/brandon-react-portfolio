import { NavLink, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="modal fade show d-block">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content custom-background-color">
          <div className="modal-header custom-border-1">
            <h2 className="error-title">Error</h2>
          </div>
          <div className="modal-body">
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
              <i>{error.error.message}</i>
            </p>
          </div>
          <div className="modal-footer custom-border-2">
            <NavLink to="/" className="btn custom-button-color">
              Go back to homepage
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
