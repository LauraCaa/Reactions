import Amount from "../../../src/components/testing/amount";
import {screen, fireEvent, render} from '@testing-library/react';

describe("testing amount component", () => {
    test('increment amount using the button', () => {
        render(<Amount></Amount>);

        expect(screen.getByLabelText('amount').textContent).toEqual("0");
        fireEvent.click(screen.getByText('-'))
        expect(screen.getByLabelText('amount').textContent).toEqual('-1');
        fireEvent.click(screen.getByText('+'))
        expect(screen.getByLabelText('amount').textContent).toEqual('0');


    })
})