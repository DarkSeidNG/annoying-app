import '@testing-library/jest-dom/extend-expect';
import { render } from "@testing-library/react";
import { wait } from "@testing-library/user-event/dist/utils";
import { Suspense } from "react";
import Home from "./Home";

test("renders Annoying app header", async () => {
  const { getByText } = render(
    <Suspense fallback={<div>loading...</div>}>
      <Home />
    </Suspense>
  );
  await wait(() => expect(getByText(/Annoying app/i)).toBeInTheDocument());
});
