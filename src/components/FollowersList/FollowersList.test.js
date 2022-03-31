import { render, screen, fireEvent } from '@testing-library/react';
import FollowersList from './FollowersList';
import { BrowserRouter } from "react-router-dom";

const MockFollowersList = () => (
    <BrowserRouter>
        <FollowersList />
    </BrowserRouter>
);

describe("FollowersList", () => {
    it('should render list', async () => {
        render(<MockFollowersList />);
        const followerElements = await screen.findByTestId("follower-test-0");
        expect(followerElements).toBeInTheDocument();
    });

    it('should have 5 elements', async () => {
        render(<MockFollowersList />);
        const followerElements = await screen.findAllByTestId(/follower-test/i);
        expect(followerElements.length).toBe(1);
        screen.debug()
    });
})