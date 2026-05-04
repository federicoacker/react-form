import Container from "react-bootstrap/Container"

function Header() {
  return (
    <header className="bg-dark py-3">
        <Container >
            <h1 className="mx-auto text-center text-white"> Blog di Viaggio </h1>
        </Container>
    </header>
  )
}

export default Header