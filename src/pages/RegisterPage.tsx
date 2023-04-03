const RegisterPage = () => {
  return (
    <div>
      <h2>Registration Form</h2>

      <form>
        <section className="form-group">
          <label className="col col-lg-4 control-label">Email</label>
          <div className="col col-lg-8">
            <input
              className="form-control"
              type="email"
              id="email"
              name="email"
              placeholder="emailAddress"
              required
            />
          </div>
        </section>
        <section className="form-group">
          <label className="col col-lg-4 control-label">Password</label>
          <div className="col col-lg-8">
            <input
              className="form-control"
              type="password"
              id="pass"
              name="pass"
              placeholder="password"
              required
            />
          </div>
        </section>
        <section className="form-group">
          <label className="col col-lg-4 control-label">ConfirmPassword</label>
          <div className="col col-lg-8">
            <input
              type="password"
              name="password_confirmation"
              id="password_confirmation"
              className="form-control "
              placeholder="Confirm Password"
            />
          </div>
        </section>
        <section className="form-group col col-lg-4">
          <button type="submit" className="btn btn-primary btn-block ">
            Register
          </button>
        </section>
      </form>
    </div>
  );
};

export default RegisterPage;
