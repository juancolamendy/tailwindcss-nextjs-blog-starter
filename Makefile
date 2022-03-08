TAG_VERSION=$(shell git describe)
PORT=3000
DOCKER_USERNAME=juancolamendy
DOCKER_REPOSITORY=tailwindcss-nextjs-starter-blog

.PHONY: docker-build
docker-build: 
	@echo "--- Docker building ..." ;\
	cat Dockerfile.tpl | sed -e "s/{{PORT}}/${PORT}/g" > Dockerfile ;\
	docker build -t ${DOCKER_USERNAME}/${DOCKER_REPOSITORY}:${TAG_VERSION} . ;\
	rm -f Dockerfile

.PHONY: docker-run
docker-run:
	@ echo "--- Running image ..." ;\
	docker run --rm -p ${PORT}:${PORT} ${DOCKER_USERNAME}/${DOCKER_REPOSITORY}:${TAG_VERSION}

.PHONY: docker-rmi
docker-rmi:
	@ echo "--- Removing image ..." ;\
	docker rmi ${DOCKER_USERNAME}/${DOCKER_REPOSITORY}:${TAG_VERSION}
