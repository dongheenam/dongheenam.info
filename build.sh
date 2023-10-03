#!/bin/bash
# https://gohugo.io/hugo-pipes/transpile-sass-to-css/#netlify

curl -LJO https://github.com/sass/dart-sass/releases/download/${DART_SASS_VERSION}/dart-sass-${DART_SASS_VERSION}-linux-x64.tar.gz

tar -xf dart-sass-${DART_SASS_VERSION}-linux-x64.tar.gz

rm dart-sass-${DART_SASS_VERSION}-linux-x64.tar.gz

export PATH=/opt/build/repo/dart-sass:$PATH

hugo --gc --minify