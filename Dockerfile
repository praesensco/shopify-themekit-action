FROM node:12.16.1-alpine

WORKDIR /themekit

ENV PATH /root/.yarn/bin:$PATH

RUN apk add --no-cache \
    curl               \
    yarn               \
    python

COPY entrypoint.sh /entrypoint.sh
COPY src/ /themekit/src/
COPY index.js package.json yarn.lock /themekit/

# Install themekit dependecies 
RUN cd /themekit && yarn install
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
