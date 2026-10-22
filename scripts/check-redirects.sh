#!/usr/bin/env bash
# Check that every old blog URL on detassigny.net 301s, in one hop, to the same page
# on blog.detassigny.net, and that the portfolio pages answer 200.
# Usage: scripts/check-redirects.sh [base-url]
set -uo pipefail

BASE="${1:-https://detassigny.net}"
BASE="${BASE%/}"
BLOG="https://blog.detassigny.net"
UA="detassigny-portfolio-check"
fail=0

SLUGS=(
	design-pattern-1-value-object going-frameworkless managing-my-passwords-with-keepass-and-owncloud
	design-pattern-2-dependency-injection i-gave-up-on-android you-need-to-write-tests
	mocking-in-php-1-writing-your-own-mocks mocking-in-php-2-phpunit-mocks mocking-in-php-3-mockery
	mocking-in-php-4-phake design-pattern-3-decorator-pattern safe-refactoring-split-a-class-into-smaller-ones
	zensical-migration
)

# old path | expected final URL after exactly one 301
REDIRECTS=(
	"/posts/1/value-object|$BLOG/design-pattern-1-value-object/"
	"/posts/12|$BLOG/safe-refactoring-split-a-class-into-smaller-ones/"
	"/posts/page/2|$BLOG/"
	"/rss|$BLOG/feed_rss_created.xml"
	"/about|$BLOG/about/"
	"/about/|$BLOG/about/"
	"/archive/2021/|$BLOG/archive/2021/"
	"/page/2/|$BLOG/page/2/"
	"/feed_rss_created.xml|$BLOG/feed_rss_created.xml"
	"/feed_json_created.json|$BLOG/feed_json_created.json"
)
for slug in "${SLUGS[@]}"; do
	REDIRECTS+=("/$slug/|$BLOG/$slug/" "/$slug|$BLOG/$slug/")
done

OK_200=(/ /fr/ /projects/cherrylift/ /fr/projects/cherrylift/ /cv/gabriel-de-tassigny-cv-en.pdf /cv/gabriel-de-tassigny-cv-fr.pdf /og.png /sitemap-index.xml)

for pair in "${REDIRECTS[@]}"; do
	from="${pair%%|*}"
	to="${pair##*|}"
	read -r code location <<<"$(curl -s -o /dev/null -A "$UA" -w '%{http_code} %{redirect_url}' "$BASE$from")"
	final=$(curl -s -o /dev/null -A "$UA" -w '%{http_code}' "$to")
	if [[ "$code" == "301" && "$location" == "$to" && "$final" == "200" ]]; then
		echo "ok    $from -> $to"
	else
		echo "FAIL  $from: got [$code $location], target answered [$final], expected 301 -> $to"
		fail=1
	fi
done

for path in "${OK_200[@]}"; do
	code=$(curl -s -o /dev/null -A "$UA" -w '%{http_code}' "$BASE$path")
	if [[ "$code" == "200" ]]; then echo "ok    $path 200"; else echo "FAIL  $path: $code"; fail=1; fi
done

code=$(curl -s -o /dev/null -A "$UA" -w '%{http_code}' "$BASE/does-not-exist/")
if [[ "$code" == "404" ]]; then echo "ok    unknown path 404"; else echo "FAIL  unknown path: $code"; fail=1; fi

exit $fail
