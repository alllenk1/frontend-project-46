install:
	npm ci

publish:
	npm publish --dry-run

gendiff:
	node bin/gendiff.js

lint:
	npx eslint .

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8