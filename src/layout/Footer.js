function Footer() {
  return (
    <footer className='page-footer pink lighten-3'>
      <div classNameName='footer-copyright'>
        <div className='container'>
          © {new Date().getFullYear()}
          <a
            className='grey-text text-lighten-4 right'
            href='https://github.com/ArtemMrdn'
          >
            ArtemMrdn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
