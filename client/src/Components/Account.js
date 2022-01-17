function Account({ user }) {
  return (
    <div>
      <div className="signinPage">
        <div className="signContainerL">
          <p>NAME</p>
          <div className="accountinfo">{user.full_name}</div>
          <p>EMAIL</p>
          <div className="accountinfo">{user.email}</div>

          <p>PHONE NUMBER</p>
          <div className="accountinfo">{user.phone_number}</div>

          <p>USERNAME</p>
          <div className="accountinfo">{user.username}</div>

          <p>PASSWORD</p>

          <div className="accountinfo">{user.password}</div>
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
