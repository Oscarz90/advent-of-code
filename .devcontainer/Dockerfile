# Use Node.js base image
FROM node:18

# Install additional tools
RUN apt-get update && apt-get install -y \
    curl \
    git \
    bash

# Create the vscode user if it doesn't exist
RUN useradd -ms /bin/bash vscode

# Switch to the vscode user
USER vscode

# Install Deno
RUN curl -fsSL https://deno.land/x/install/install.sh | sh

# Add Deno to the PATH
ENV DENO_INSTALL="/home/vscode/.deno"
ENV PATH="$DENO_INSTALL/bin:$PATH"

# Set working directory
WORKDIR /workspace
