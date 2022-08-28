import {fireEvent,render, screen} from "@testing-library/react";
import Login from "../Paginas/Login/signin";
import {BrowserRouter} from "react-router-dom";

test('renderizacion de pantalla de login', () => {
    render(<BrowserRouter><Login /></BrowserRouter>);
    const text = screen.getByText(/iniciar sesion/i);
    expect(text).toBeInTheDocument();
});
test('renderizacion Contraseña', () => {
    render(<BrowserRouter><Login /></BrowserRouter>);
    const text = screen.getByText(/contraseña/i);
    expect(text).toBeInTheDocument();
});
test('renderizacion Nombre de usuario', () => {
    render(<BrowserRouter><Login /></BrowserRouter>);
    const text = screen.getByText(/nombre de usuario/i);
    expect(text).toBeInTheDocument();
});
