# publishes to docker.io/watheialabs/bitpod
FROM gitpod/workspace-full

RUN sudo apt-get update && \
  sudo apt-get upgrade -y

RUN npm install --global @teambit/bvm && \
  bvm install && \
  npm uninstall --global @teambit/bvm

USER gitpod
ENV PATH="/home/gitpod/bin:${PATH}"