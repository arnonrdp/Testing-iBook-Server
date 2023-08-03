# Sample Node Server

Use this pre-built template to create a server repository on CloudFlare.

Before using this template, follow these instructions:

- Go to CloudFlare and create a Worker within "Create Application";
- Give the Worker a name and click "Deploy". It is not necessary to change the code snippet in `worker.js`;
- In this repository, click on "**Use this template**" and "**Create a new repository**".
- Once created, you need to enter your Worker's name in the following files:
  - `.github/workflows/deploy.yml` (line 26);
  - `wrangler.toml` (line 1);
