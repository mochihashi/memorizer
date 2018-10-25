#!/bin/bash
cd $(dirname $0)
rm -f memorizer.zip
cd ../
zip memorizer.zip memorizer/index.html
zip -r memorizer.zip memorizer/*/
mv memorizer.zip memorizer/
