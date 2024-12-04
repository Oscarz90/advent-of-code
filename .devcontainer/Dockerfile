# Use Node.js base image
FROM node:18

# Install additional tools
RUN apt-get update && apt-get install -y \
    curl \
    git \
    bash

# Set working directory
WORKDIR /workspace

# Add a non-root user
RUN useradd -ms /bin/bash vscode
USER vscode