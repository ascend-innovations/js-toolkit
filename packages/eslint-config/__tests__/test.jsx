/**
 * For now we will use this file to run a simple lint test in the pipeline to
 * make sure our React ESLint config is valid and working
 *
 * ! Ignore the JSX eslint error below - it's because we are using the vanilla js config in this package.
 * ! When we run our tests we will apply the react config automatically.
 */

export const test = (text) => {
    return <>{text}</>;
};
