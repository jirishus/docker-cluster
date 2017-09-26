## Basic Docker-Cluster

To start a new docker machine run the following command:

```
docker-machine start default
```

If you get the error 'Cannot find host default', run:

```
docker-machine create -d virtualbox default
```

## Configure Docker-Compose To Use Machine
```
eval "$(docker-machine env default)"
```

## Create Docker Image For Wishlist-API

 1. cd into the __wishlist-api__ folder
 2. create the docker image:

    ```
    docker build -t wishlist-api .
    ```

## Create Docker Image For Purchase-API

 1. cd into the __purchase-api__ folder
 2. create the docker image:

    ```
    docker build -t purchase-api .
    ```

## Run Cluster With Docker-Compose
```
docker-compose up
```
