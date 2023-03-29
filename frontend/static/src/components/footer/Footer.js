function Footer() {
    const style = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100px',
        fontSize: '20px',
        color: 'white',
      };
    return (
        <footer 
        style={style}>
        &copy; Drew Coker 2023 
        </footer>
    )
}
export default Footer;