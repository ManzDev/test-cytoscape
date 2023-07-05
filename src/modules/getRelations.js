const MAX_RELATIONS = 5;

// eslint-disable-next-line
const generateRandomNumberOfRelations = () => Math.floor(Math.random() * MAX_RELATIONS);

const generateNumberOfRelations = () => {
  const OPTIONS = [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 3, 4];
  const index = Math.floor(Math.random() * OPTIONS.length);
  return OPTIONS[index];
};

const createRelation = (user, users) => {
  const toUserIndex = Math.floor(Math.random() * users.length);
  const toUser = users[toUserIndex];

  return { data: { source: user, target: toUser } };
};

export const getRelations = (users) => {
  const edges = [];

  users.forEach(user => {
    const numberOfRelations = generateNumberOfRelations();
    for (let i = 0; i < numberOfRelations; i++) {
      const edge = createRelation(user, users);
      edges.push(edge);
    }
  });

  return edges;
};
