FROM node:4.0.0

WORKDIR /src

ADD . /src

RUN apt-get update && \
    npm install

EXPOSE 3000

CMD ["node","app"]

