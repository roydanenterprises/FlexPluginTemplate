FROM roydan.azurecr.io/nextask.utility.deployment.pluginservice:latest
ARG REPO_NAME
ENV Settings__RepoName=$REPO_NAME

COPY . /plugin

#ENTRYPOINT [ "" ]