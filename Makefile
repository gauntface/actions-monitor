build:
	cd ondevicesite && npm run build
	make cp-devices-static

cp-devices-static:
	rm -rf ./devices/static/**/*
	cd ondevicesite/public/ && find . -name '*.html' -exec cp --parents '{}' ../../devices/static/ \;
