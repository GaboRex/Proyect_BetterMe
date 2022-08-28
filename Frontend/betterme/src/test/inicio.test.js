import {fireEvent,render, screen} from "@testing-library/react";
import Inicio from "../Paginas/Inicio/inicio";
import {BrowserRouter} from "react-router-dom";

test('renderizacion de pantalla de inicio', () => {
    render(<BrowserRouter><Inicio /></BrowserRouter>);
    const text = screen.getByText(/betterme/i);
    expect(text).toBeInTheDocument();
});
test('renderizacion boton inicio', () => {
    render(<BrowserRouter><Inicio /></BrowserRouter>);
    const text = screen.getByText(/iniciar/i);
    expect(text).toBeInTheDocument();
});
test('renderizacion frase inicial', () => {
    render(<BrowserRouter><Inicio/></BrowserRouter>);
    const text = screen.getByText(/sé fuerte cuando seas débil, valiente cuando tengas miedo y humilde cuando seas victorioso/i);
    expect(text).toBeInTheDocument();
});
test.skip('Boton de inicio navega a login',() =>{
    render(<BrowserRouter><Inicio /></BrowserRouter>);
    const button = screen.getByText(/iniciar/i);
    fireEvent.click(button);
    const text = screen.getByText(/iniciar sesion/i)
    expect(text).toBeInTheDocument();
})