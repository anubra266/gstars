import { Authenticator } from "remix-auth";
import { GitHubStrategy } from "remix-auth-github";
import { User } from "~/models/user";
import { sessionStorage } from "~/services/session.server";

export let authenticator = new Authenticator<User>(sessionStorage);

if (!process.env.GITHUB_CLIENT_ID) {
  throw new Error("Missing GITHUB_CLIENT_ID env");
}

if (!process.env.GITHUB_CLIENT_SECRET) {
  throw new Error("Missing GITHUB_CLIENT_SECRET env");
}

let gitHubStrategy = new GitHubStrategy(
  {
    clientID: process.env.GITHUB_CLIENT_ID!,
    clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    callbackURL: "http://localhost:3000/auth/github/callback",
  },
  async ({ accessToken, extraParams, profile }) => {
    return { email: profile.emails[0].value };
    // Get the user data from your DB or API using the tokens and profile
    // return User.findOrCreate({ email: profile.emails[0].value });
  }
);

authenticator.use(gitHubStrategy);
