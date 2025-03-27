export function index({ request, response, database }) {
  const { status } = request.query;

  const filter = status ? { status } : null;

  const tickets = database.select("tickets", filter);

  return response.end(JSON.stringify(tickets));
}
