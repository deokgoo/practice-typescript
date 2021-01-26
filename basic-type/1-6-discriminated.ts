() => {
  // function: login -> success, fail
  type SuccessState = {
    result: 'success';
    response: {
      body: string;
    };
  };
  type FailState = {
    result: 'fail';
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  function login(id: string, password: string): Promise<LoginState> {
    return Promise.resolve({
      result: 'success',
      response: {
        body: 'logged in!',
      },
    });
  }

  // printLoginState(state)
  // success -> 🎉 body
  // fail -> 😂 reason
  function printLoginState(state: LoginState) {
    if (state.result === 'success') {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😂 ${state.reason}`);
    }
  }
}
