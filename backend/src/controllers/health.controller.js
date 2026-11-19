export const getHealth = (req, res) => {
  res.json({ status: 'UP', app: 'CVPilot' });
};