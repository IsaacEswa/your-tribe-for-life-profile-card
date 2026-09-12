export const actions = {
  default: async ({ request }) => ({
    color: (await request.formData()).get('color')
  })
};