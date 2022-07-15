import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/index";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en <GifGrid/>", () => {
  const category = "One Punch";
  useFetchGifs.mockReturnValue({
    images: [],
    isLoading: true,
  });
  render();
  test("Debe de mostrar el loading inicialmente", () => {
    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });

  test("Debe de mostrar items cuando se cargan las imagenes useFetchGifs", () => {
    const gifs = [
      {
        id: "ABC",
        title: "Saitama",
        url: "https://whatever.com/saitama.jpeg",
      },
      {
        id: "ABCDEF",
        title: "Saitama_2",
        url: "https://whatever.com/saitama.jpeg_2",
      },
      {
        id: "ABC2",
        title: "Saitama_3",
        url: "https://whatever.com/saitama.jpeg_3",
      },
      {
        id: "ABDEF",
        title: "Saitama_4",
        url: "https://whatever.com/saitama.jpeg_4",
      },
      
    ];
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });
    render(<GifGrid category={category} />);
    expect( screen.getAllByRole('img').length).toBe(4)
  });
});
