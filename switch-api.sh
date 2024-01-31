find www -name '*.js' | xargs grep -l 'sagendatabas' | xargs sed -i.bak s/sagendatabas/folkeservice/g
find www -name '*.js' | xargs grep -l 'frigg-test.isof' | xargs sed -i.bak s/frigg-test.isof.se/garm-test.isof.se/g
find www -name '*.js' | xargs grep -l 'frigg.isof' | xargs sed -i.bak s/frigg.isof.se/garm-test.isof.se/g
find www -name '*.js' | xargs grep -l 'garm.isof' | xargs sed -i.bak 's|garm.isof.se/static/js-apps/sagenkarta-norsk/|sagenkartan-norsk.isof.se/|g'
find www -name '*.js' | xargs grep -l 'garm-test.isof' | xargs sed -i.bak 's|garm-test.isof.se/static/js-apps/sagenkarta-norsk/|sagenkartan-norsk-test.isof.se/|g'
