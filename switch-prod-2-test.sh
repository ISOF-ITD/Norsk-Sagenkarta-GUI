find . -name 'app.js' | xargs grep -l 'garm.isof' | xargs sed -i.bak s/garm.isof.se/garm-test.isof.se/g
