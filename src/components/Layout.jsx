import Header from "./Header";
import Footer from "./Footer";
function Layout(props) {
  return (
    <>
      <Header></Header>
      {props.children}
      <Footer></Footer>
    </>
  );
}

// tambien es correcto hacer esto: desestructurar el objeto

/*function Layout(props) {
  const {children} = props
    return (
      <>
        <Header></Header>
        {children}
        <Footer></Footer>
      </>
    );
  }*/

export default Layout;
