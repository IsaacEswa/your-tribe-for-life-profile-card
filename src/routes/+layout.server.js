export const actions = {
  default: async ({ request }) => ({
    color: (await request.formData()).get('color')
  })
};

export async function load({ fetch }) {
  const res = await fetch("https://fdnd.directus.app/items/person?fields=*&filter[id][_eq]=242");
  const data = await res.json();
  const person = data.data?.[0];

  return {
    person
  };
}