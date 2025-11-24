import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{width:"100%", padding: "40px 0", backgroundColor: "#f9f9f9", borderTop: "1px solid #eee", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", color: "#666"}}>
      <div style={{marginBottom: "16px"}}>
        <span style={{fontWeight: "bold", fontSize: "18px", color: "#333"}}>Diet Food Mall</span>
      </div>
      <nav style={{marginBottom: "20px", display: "flex", gap: "20px"}}>
        <Link to="/about" style={{textDecoration: "none", color: "#666"}}>회사소개</Link>
        <Link to="/contact" style={{textDecoration: "none", color: "#666"}}>고객센터</Link>
        <Link to="/terms" style={{textDecoration: "none", color: "#666"}}>이용약관</Link>
        <Link to="/privacy" style={{textDecoration: "none", color: "#666", fontWeight: "bold"}}>개인정보처리방침</Link>
      </nav>
      <p style={{fontSize: "13px"}}>&copy; 2025 Diet Food Mall. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
