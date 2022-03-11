module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0f4fccd4528d18db717373ddf1e734d6'),
  },
});
