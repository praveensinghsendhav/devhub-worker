export default {
  async scheduled(event, env, ctx) {
    try {
      const response = await fetch("https://devhub-api-91ea.onrender.com", {
        method: "GET",
      });

      console.log(`Keep-alive ping: ${response.status}`);
    } catch (error) {
      console.error("Keep-alive ping failed:", error);
    }
  },

  async fetch(request, env, ctx) {
    return new Response("Keep-alive worker is running!");
  },
};
