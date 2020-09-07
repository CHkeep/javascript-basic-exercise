export default function waitForAll(...promises) {
  // This function returns a promise which will be triggered when all the `promises` are completed.
  //
  // If all the `promises` are resolved, then the returned promise will be resolved. Otherwise,
  // if one of the `promises` is rejected, then the returned promise will be rejected.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in wait_for_all_spec.js.
  // * Please do NOT modify the signature of the function.

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < promises.length; i++) {
    if (!(promises[i] instanceof Promise)) {
      throw new Error('Not all elements are promises.');
    };
  }

  return new Promise((resolve, reject) => {
    const len = promises.length;
    let rejectCount = 0;
    // eslint-disable-next-line no-shadow
    let counter = 0;
    const complete = () => {
      if (rejectCount > 0) {
        reject();
      } else {
        resolve();
      }
    };
    // eslint-disable-next-line no-shadow
    const count = () => {
      counter += 1;
      if (counter >= len) {
        complete();
      }
    };
    for (let i = 0; i < len; i += 1) {
      promises[i].then(() => {
        count();
      // eslint-disable-next-line no-loop-func
      }, () => {
        rejectCount += 1;
        count();
      });
    }
  });
}
