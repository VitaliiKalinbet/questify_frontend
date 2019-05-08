export const types = {
  IS_NEW_CHALLENGE: 'challenge/IS_NEW_CHALLENGE'
};

export const newChallenge = challenges => {
  if (challenges.length === 0) {
    return ({
      type: types.IS_NEW_CHALLENGE,
      payload: false
    });
  }
  if (challenges.length === 1) {
    return ({
      type: types.IS_NEW_CHALLENGE,
      payload: true
    });
  }
};
