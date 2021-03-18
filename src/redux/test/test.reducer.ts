import { TEST_ACTION } from "./test.actions";

export interface TestState {
  test: string,
}

const initialState = {
  test: 'test',
};

export default function testReducer(state: TestState = initialState, action: any): TestState | { state: TestState; } {
  switch (action.type) {
    case TEST_ACTION:
      return {
        state,
      };

    default:
      return state;
  }
}
