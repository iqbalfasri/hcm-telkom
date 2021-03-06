@import url("https://getbootstrap.com/docs/4.1/dist/css/bootstrap.min.css");
@import url("https://fonts.googleapis.com/css?family=Roboto:400,700");
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
*, body {
  -webkit-font-smoothing: antialiased;
  font-family: 'Roboto', sans-serif !important; }

.navbar {
  width: 100%;
  height: 60px;
  position: fixed;
  z-index: 1333;
  background-color: #ffffff;
  border-bottom: 1px solid #ddd; }
  .navbar .navbar-item a {
    color: #111;
    padding: 0 10px;
    text-decoration: none !important; }
    .navbar .navbar-item a:hover {
      color: #ff4018;
      transform: scale(0.98); }
  .navbar .search .search-input {
    border-radius: 25px;
    border: 1px solid #ff4018;
    outline: none;
    padding: 8px 20px;
    font-size: 14px;
    font-weight: 400; }
  .navbar .menu {
    background: transparent;
    outline: none;
    border: none;
    cursor: pointer; }
  .navbar .menu-drop-down {
    background-color: #ffffff;
    position: absolute;
    margin: 21px 0;
    right: 20;
    display: block;
    padding: 10px;
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.15);
    border-radius: 5px; }
    .navbar .menu-drop-down a {
      display: block;
      padding: 10px 0;
      transition: .1s all ease-in-out; }
      .navbar .menu-drop-down a:hover {
        color: #ff4018; }

.header {
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto !important; }
  .header .header-logo {
    width: 150px;
    max-width: 150px; }
  .header .header-info {
    display: flex;
    flex-direction: row;
    margin: 50px 0; }
    .header .header-info img {
      width: 100px;
      height: 100px; }
    .header .header-info .header-info-content {
      max-width: 450px;
      margin: 0 15px; }
      .header .header-info .header-info-content h1 {
        font-size: 28px;
        font-weight: bold;
        margin: 0 0 10px 0; }
      .header .header-info .header-info-content p {
        line-height: 1.5; }
    .header .header-info .user-info {
      display: flex;
      flex-direction: column;
      text-align: center; }
      .header .header-info .user-info a {
        line-height: 2.5; }

.content-head {
  position: relative;
  font-size: 22px;
  font-weight: bold;
  margin-block-end: 20px; }

.content a {
  color: #111;
  text-decoration: none; }
  .content a .card .card-title {
    font-weight: bold;
    font-size: 18px;
    word-wrap: unset; }
  .content a .card .card-text {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.3; }
    .content a .card .card-text .text-muted {
      margin-bottom: 15px;
      line-height: 3; }

.footer {
  display: flex;
  align-items: center;
  position: relative;
  height: 200px;
  background-color: #777777; }
  .footer .footer-site-info {
    text-align: right; }
    .footer .footer-site-info h1 {
      font-size: 28px;
      font-weight: bold; }
    .footer .footer-site-info p {
      font-size: 14px;
      line-height: 2; }
    .footer .footer-site-info a {
      color: #111;
      text-decoration: none;
      margin: 0 15px; }

/*# sourceMappingURL=main.cs.map */
