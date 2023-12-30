install:
	go install github.com/gauntface/go-html-asset-manager/v5/cmds/htmlassets@latest
	go install github.com/gauntface/go-html-asset-manager/v5/cmds/genimgs@latest
	go install github.com/tdewolff/minify/v2/cmd/minify@latest

build:
	cd ondevicesite && npm install && npm run build
	make cp-devices-static

cp-devices-static:
	rm -rf ./devices/static/**/*
	mkdir -p ./devices/static/
	cd ondevicesite/public/ && find . -name '*.html' -exec cp --parents '{}' ../../devices/static/ \;
