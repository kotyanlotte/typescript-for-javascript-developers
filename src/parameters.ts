export {};

const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
};

type Profile = Parameters<typeof debugProfile>;
const profile: Profile = ["kotyan", 24];

debugProfile(...profile);
