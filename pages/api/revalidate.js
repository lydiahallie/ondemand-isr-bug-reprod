export default async function handler(req, res) {
  try {
    console.log('[Next.js] Revalidating /');
    await res.unstable_revalidate('/')
    return res.json({ revalidated: true })
  } catch (err) {
    console.log("Error", err)
    return res.status(500).send('Error revalidating')
  }
}