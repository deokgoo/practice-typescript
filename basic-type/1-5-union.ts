() => {
  /**
   * Union Types: OR
   */

  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(driection: Direction) {
    console.log(driection);
  }
  move('down');

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // function: login -> success, fail
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  function login(id: string, password: string): Promise<LoginState> {
    return Promise.resolve({
      response: {
        body: 'logged in!',
      },
    });
  }

  // printLoginState(state)
  // success -> 🎉 body
  // fail -> 😂 reason
  function printLoginState(state: LoginState) {
    if ('response' in state) {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😂 ${state.reason}`);
    }
  }
}
