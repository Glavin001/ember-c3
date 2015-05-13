#!/bin/bash
git checkout gh-pages
git pull origin master
ember build --environment production
mv dist/* .
rm -rf dist
git add .
git commit -m "Publishing to github pages"
git push origin gh-pages
