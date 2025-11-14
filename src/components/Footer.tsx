const Footer = () => {
  return (
    <footer style={{width:"100%", height:"300px", display:"flex", flexDirection:"column", justifyContent:"center", alignContent:"center"}}>
      <p>&copy; 2023 Shopping Mall. All rights reserved.</p>
      <nav>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </footer>
  );
};

export default Footer;
