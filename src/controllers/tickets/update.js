export function update({ request, response, database }) {
  const { id } = request.params.id;
  const { equipment, description, status } = request.body;

  database.update("tickets", id, {
    equipment,
    description,
    status,
    update_at: new Date(),
  });

  return response.writeHead(200).end();
}
