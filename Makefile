build:
	cd ondevicesite && npm install && npm run build
	make cp-devices-static

cp-devices-static:
	rm -rf ./devices/static/**/*
	mkdir -p ./devices/static/
	cd ondevicesite/public/ && find . -name '*.html' -exec cp --parents '{}' ../../devices/static/ \;
