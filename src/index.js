export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Keep the old Gin route available on the static deployment.
    if (url.pathname === "/index") {
      return Response.redirect(new URL("/", request.url), 301);
    }

    return env.ASSETS.fetch(request);
  },
};
