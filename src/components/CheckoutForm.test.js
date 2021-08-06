import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event"

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => 
{
    render(<CheckoutForm/>);
});

test("form shows success message on submit with form details", () => 
{
    //Arrange
    const firstName = screen.getByLabelText(/first name/i);
    const lastName = screen.getByLabelText(/last name/i);
    const address = screen.getByLabelText(/address/i);
    const city = screen.getByLabelText(/city /i);
    const state = screen.getByLabelText(/state /i);
    const zip = screen.getByLabelText(/zip /i);

    //Act:
    userEvent.type(firstName, "Samuel");
    userEvent.type(lastName, "Nichols");
    userEvent.type(address, "125-171 S Front St");
    userEvent.type(city, "Philadelphia");
    userEvent.type(state, "PA");
    userEvent.type(zip, "19106");

    //Assert:
    const successMessage = screen.getByTestId("success message");
    expect(successMessage).toHaveTextContent(firstName);
    expect(successMessage).toHaveTextContent(lastName);
    expect(successMessage).toHaveTextContent(address);
    expect(successMessage).toHaveTextContent(city);
    expect(successMessage).toHaveTextContent(state);
    expect(successMessage).toHaveTextContent(zip);
});
