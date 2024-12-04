# Use an official Ubuntu image as a base
FROM mcr.microsoft.com/devcontainers/base:ubuntu

# Install additional tools
RUN apt-get update && apt-get install -y \
    curl \
    git \
    bash \
    # Install Node.js
    && curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs \
    # Install Deno
    && curl -fsSL https://deno.land/x/install/install.sh | DENO_INSTALL="/home/vscode/.deno" sh \
    && apt-get clean

# Set up Deno environment variables
ENV DENO_INSTALL="/home/vscode/.deno"
ENV PATH="$DENO_INSTALL/bin:$PATH:$HOME/.npm-global/bin:/usr/local/bin"

# Set the working directory for the project
WORKDIR /workspace

USER vscode