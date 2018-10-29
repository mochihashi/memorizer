#!/bin/bash
cd $(dirname $0)
rm -f memorizer.zip
cd ../
zip memorizer.zip memorizer/index.html
zip memorizer.zip memorizer/favicon.ico
zip -r memorizer.zip memorizer/lib/
mv memorizer.zip memorizer/
