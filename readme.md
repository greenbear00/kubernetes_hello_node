minikube
$ minikube start --driver=docker
# examples1
- hello-node.yml
    $ kubectl apply -f hello-node.yml

# examples2
- hello-deployment.yml
- hello-sevice.yml
    $ kubectl apply -f hello-deployment.yml
    $ kubectl apply -f hello-service.yml
    $ kubectl get all
    $ minikube start hello-node
or
- hello.yml
    $ kubectl apply -f hello.yml
    $ kubectl get all
    $ minikube start hello-node

minikube start [service_name]