import { map, range } from 'ramda'

export const generateCells = () => map(
  (c) => ({
    index: c,
    edit: false,
    value: '',
    selected: false,
    free: c === 12
  }),
  range(0, 25)
)

export const getStorage = (SESSION_KEY) => JSON.parse(sessionStorage.getItem(SESSION_KEY));
export const saveStorage = (content, SESSION_KEY) => {
  const oldStore = getStorage() || {};
  sessionStorage.setItem(SESSION_KEY, JSON.stringify({...oldStore, ...content}));
}

export const loadFromStore = (SESSION_KEY) => {
  const store = getStorage(SESSION_KEY);
  return store === null ? {
    numbers: generateCells(),
    editModeActive: false
  } : store;
};
