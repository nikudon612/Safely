function Account({ user }) {
  return (
    <div>
      <div className="signinPage">
        <div className="signContainerL">
          <p>NAME</p>
          <div className="accountinfo">
            <div className="ucontent">{user.full_name}</div>
          </div>
          <p>EMAIL</p>
          <div className="accountinfo">
            <div className="ucontent">{user.email}</div>
          </div>

          <p>PHONE NUMBER</p>
          <div className="accountinfo">
            <div className="ucontent">{user.phone_number}</div>
          </div>

          <p>USERNAME</p>
          <div className="accountinfo">
            <div className="ucontent">{user.username}</div>
          </div>

          {/* <p>PASSWORD</p>

          <div className="accountinfo">
            <div className="ucontent">{user.password}</div>
          </div> */}
        </div>
        <div id="sisiA">
          <a href="https://sisiyuart.com/">
            <p>Art by Sisi Yu</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Account;
