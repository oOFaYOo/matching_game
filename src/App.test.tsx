import React from "react";
import {render} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import 'regenerator-runtime/runtime';
import App from "./App";

it('App test', ()=>{

  const Comp = () => {
    return (
        <MemoryRouter>
          <App />
        </MemoryRouter>
    )
  }

  render(<Comp />)
})