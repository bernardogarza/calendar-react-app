const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-dark mb-4">
      <span className="navbar-brand">Nicollo</span>
      <button className="btn btn-outline-danger">
        <i className="fas fa-sign-out-alt" />
        <span> Log Out</span>
      </button>
    </div>
  );
};

export default Navbar;
