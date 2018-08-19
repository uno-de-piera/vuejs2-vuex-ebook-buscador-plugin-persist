//https://stackoverflow.com/questions/44272405/mapstate-with-setter
export const mapSetter = (state, setters = {}) => (
    Object.keys(state).reduce((acc, stateName) => {
        acc[stateName] = {
            get: state[stateName],
        };
        if (setters[stateName]) {
            acc[stateName].set = setters[stateName];
        }
        return acc;
    }, {})
);
