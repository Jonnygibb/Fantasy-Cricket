# Fantasy Cricket

Fantasy Cricket app utilising a dockerized nextjs app with a postgresql database.

The app can be ran in development mode by running the below commands.

```
docker compose up web-dev db
```

# Things I've Learnt So Far

This section is dedicated for tips, tricks and concepts learnt during this project.

## Dockerfile Copy

The Dockerfile 'COPY' command caught me off guard. At first I was confused how the COPY command could take files from outside the /app directory when the WORKDIR had already been set to /app. The snippet below has an example.

```
WORKDIR /app
COPY package.json package-lock.json* ./
```

The WORKDIR command sets the working directory only in the container. The COPY command however operates at the directory the 'docker build' command is initiated from. The above code therefore copys the files from the local directory to the app directory inside the container.

## Dev and Prod Services

Inside of the docker-compose.yml, two different versions of the nextjs web app are defined. One is to be used in development and as such has hot reloading of files and node running in dev mode. The production version on the other hand has no shared volumes and relies only on the compiled node app.

```
# Enables hot reloading by sharing a volume with the local app folder.
# /app/node_modules is maintained in the container to keep the modules
# consistent in the container.
volumes:
    - .:/app
    - /app/node_modules
```