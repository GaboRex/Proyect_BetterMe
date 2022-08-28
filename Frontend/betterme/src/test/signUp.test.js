import {fireEvent,render, screen} from "@testing-library/react";
import Resgister from "../Paginas/Signin/signUp";
import {BrowserRouter} from "react-router-dom";

test.skip('renderizacion de pantalla de registro', () => {
    render(<BrowserRouter><Resgister /></BrowserRouter>);
    const text = screen.getByText(/registrarse/i);
    expect(text).toBeInTheDocument();
});
test('renderizacion nombre de usuario', () => {
    render(<BrowserRouter><Resgister /></BrowserRouter>);
    const text = screen.getByText(/nombre de usuario/i);
    expect(text).toBeInTheDocument();
});
test.skip('renderizacion de nombre', () => {
    render(<BrowserRouter><Resgister /></BrowserRouter>);
    const text = screen.getByText(/nombre/i);
    expect(text).toBeInTheDocument();
});
test('renderizacion de apellido', () => {
    render(<BrowserRouter><Resgister /></BrowserRouter>);
    const text = screen.getByText(/apellido/i);
    expect(text).toBeInTheDocument();
});
test.skip('renderizacion de contrasena', () => {
    render(<BrowserRouter><Resgister /></BrowserRouter>);
    const text = screen.getByText(/contraseña/i);
    expect(text).toBeInTheDocument();
});
test('renderizacion de confirmar constrasena', () => {
    render(<BrowserRouter><Resgister /></BrowserRouter>);
    const text = screen.getByText(/confirmar contraseña/i);
    expect(text).toBeInTheDocument();
});