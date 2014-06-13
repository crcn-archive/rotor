ONLY="."
REPORTER=dot

test-watch:
	mocha ./test/**/*-test.js --timeout 200 -g "$(ONLY)" --reporter=$(REPORTER) --ignore-leaks --watch ./lib ./test


browser:
	@rm -rf build;
	cp -R ./lib/browser ./build;
	find ./build -name "*.pc" -exec rm {} \;
	@for PCFILE in `find ./lib/browser -name "*.pc"`; \
		do \
		RCFILE=`echo $$PCFILE | sed -e "s/lib\/browser/build/g"`; \
		RCFILE="$$RCFILE.js"; \
		mkdir -p `dirname $$RCFILE`; \
		./node_modules/.bin/paperclip -p -i $$PCFILE > $$RCFILE; \
	done;