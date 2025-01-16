.PHONY: emulator build lint format checkFormat test clean

emulator:
	pnpm dev

build:
	pnpm build

preCommit:
	pnpm husky
	.husky/pre-commit

lint:
	pnpm lint

lintFix:
	pnpm lint:fix

test:
	pnpm test-run

test-watch:
	pnpm test

checkFormat:
	@echo "Checking format..."
	@pnpm format:check

format:
	@echo "Formatting..."
	@pnpm format:write

clean:
	rm -rf dist
	rm -rf node_modules
