FROM roydan.azurecr.io/twilio.cli:latest
ARG REPO_NAME
ENV Settings__RepoName=$REPO_NAME

COPY . /plugin

#ENTRYPOINT [ "" ]