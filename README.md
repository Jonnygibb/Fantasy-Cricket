# Fantasy Cricket

Fantasy Cricket app utilising a dockerized nextjs app with a postgresql database.

# Things I've Learnt So Far

This section is dedicated for tips, tricks and concepts learnt during this project.

## Dockerfile Copy

The Dockerfile 'COPY' command caught me off guard. At first I was confused how the COPY command could take files from outside the /app directory when the WORKDIR had already been set to /app. The snippet below has an example.

```
WORKDIR /app
COPY package.json package-lock.json* ./
```

The WORKDIR command sets the working directory only in the container. The COPY command however operates at the directory the 'docker build' command is initiated from. The above code therefore copys the files from the local directory to the app directory inside the container.